package main

import (
	"bytes"
	"crypto/sha256"
	"errors"
	"fmt"
	"io/fs"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"sync"
	"sync/atomic"
)

func main() {
	args := must(parseArgs(os.Args))
	dirs := must(getDirs())
	switch args.mode {
	case modeBuild:
		must(build(args.targetsToBuild, dirs))
	case modeInfo:
		fmt.Println("workspace:", dirs.workspace)
		fmt.Println("execroot:", dirs.execroot)
	case modeClean:
		if err := os.RemoveAll(dirs.execroot); err != nil {
			panic(err)
		}
	}
}

func build(targetsToBuild []string, dirs dirs) (interface{}, error) {
	rc, err := dialRemoteCache("localhost:9999", dirs.execroot)
	if err != nil {
		panic(err)
	}
	defer rc.close()

	configs := []config{
		{
			name: "one",
			rule: "genrule",
			cmd:  "sleep 2; cat who.txt > $(out)",
			srcs: []string{":who.txt"},
			outs: []string{"one.txt"},
		},
		{
			name: "two",
			rule: "genrule",
			cmd:  "sleep 2; echo I am two > $(out)",
			outs: []string{"two.txt"},
		},
		{
			name: "combined",
			rule: "genrule",
			cmd:  "sleep 2; cat one.txt two.txt > $(out)",
			srcs: []string{":one", ":two.txt"},
			outs: []string{"combined.txt"},
		},
	}

	inputFiles := make(stringSet)
	// recursively list all input files under dirs.workspace
	filepath.WalkDir(dirs.workspace, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() {
			return nil
		}
		rel, err := filepath.Rel(dirs.workspace, path)
		if err != nil {
			return err
		}
		inputFiles.add(makeLabel(rel))
		return nil
	})

	targets := make(stringSet)
	for _, conf := range configs {
		targets.add(makeLabel(conf.name))
	}

	outputFiles := make(map[string]string)
	for _, conf := range configs {
		for _, out := range conf.outs {
			outputFiles[makeLabel(out)] = makeLabel(conf.name)
		}
	}

	resolvedLabelsToBuild := []string{}
	for _, targetToBuild := range targetsToBuild {
		if !strings.HasPrefix(targetToBuild, "//") {
			targetToBuild = "//" + targetToBuild
		}
		if targets.has(targetToBuild) {
			resolvedLabelsToBuild = append(resolvedLabelsToBuild, targetToBuild)
			continue
		}
		if _, ok := outputFiles[targetToBuild]; ok {
			resolvedLabelsToBuild = append(resolvedLabelsToBuild, outputFiles[targetToBuild])
			continue
		}
		return nil, fmt.Errorf("target %q not found", targetToBuild)
	}

	if err := os.MkdirAll(dirs.execroot, 0755); err != nil {
		return nil, err
	}

	normalizeLabel := func(src string) string {
		if !strings.HasPrefix(src, ":") {
			panic("src must start with :")
		}
		fullLabel := "//" + src
		if targets.has(fullLabel) {
			return fullLabel
		}

		if target, ok := outputFiles[fullLabel]; ok {
			return target
		}

		if inputFiles.has(fullLabel) {
			return fullLabel
		}

		panic("src not found: " + src)
	}

	linkedInputFiles := make(stringSet)
	actions := make(map[string]action)
	graph := digraph{edges: make(map[string]stringSet)}
	for _, conf := range configs {
		label := makeLabel(conf.name)
		inputFileSrcs := []string{}
		for _, src := range conf.srcs {
			normalizedLabel := normalizeLabel(src)
			if inputFiles.has(normalizedLabel) {
				filename := strings.ReplaceAll(normalizedLabel, "//", "")
				filename = strings.ReplaceAll(filename, ":", "")
				if !linkedInputFiles.has(filename) {
					// attempt to unlink the file in case it already exists
					_ = os.Remove(filepath.Join(dirs.execroot, filename))
					if err := os.Link(filepath.Join(dirs.workspace, filename), filepath.Join(dirs.execroot, filename)); err != nil {
						return nil, err
					}
					linkedInputFiles.add(filename)
				}
				inputFileSrcs = append(inputFileSrcs, filename)
				continue
			}
			graph.insert(label, normalizedLabel)
		}

		actions[label] = makeGenruleAction(conf.name, conf.cmd, inputFileSrcs, conf.outs)
	}

	transitive := graph.walk(resolvedLabelsToBuild)
	subgraph := graph.subgraph(transitive)
	order := must(subgraph.toposort())

	var wg sync.WaitGroup
	tasks := make(map[string]task)
	mu := sync.Mutex{}
	results := []actionResult{}
	runner := sandboxedActionRunner{execroot: dirs.execroot}
	for _, label := range order {
		action, ok := actions[label]
		if !ok {
			panic("action not found: " + label)
		}
		wg.Add(1)

		deps := []*task{}
		for dep := range graph.edges[label] {
			dt, ok := tasks[dep]
			if !ok {
				panic("could not find task for dep: " + dep)
			}
			deps = append(deps, &dt)

			da, ok := actions[dep]
			if !ok {
				panic("could not find action for dep: " + dep)
			}
			action.ins = append(action.ins, da.outs...)
		}

		t := task{
			execute: func() error {
				fmt.Println("executing", action.name)
				defer wg.Done()
				res, isNotFoundErr, err := rc.getActionResult(action)
				if err != nil {
					if isNotFoundErr {
						res, err = runner.run(action)
					} else {
						return err
					}
				} else {
					for _, out := range res.outputFiles {
						err := os.WriteFile(filepath.Join(dirs.execroot, out.path), out.contents, 0644)
						if err != nil {
							return err
						}
					}
				}
				mu.Lock()
				defer mu.Unlock()
				results = append(results, *res)
				return err
			},
			deps:     deps,
			finished: make(chan struct{}),
		}
		tasks[label] = t

		go t.run()
	}

	wg.Wait()

	for _, res := range results {
		if !res.fromActionCache {
			rc.updateActionResult(res)
		}
	}

	return nil, nil
}

type action struct {
	name string
	ins  []string
	outs []string
	args []string
}

func makeGenruleAction(name, cmd string, srcs, outs []string) action {
	prog := []string{`set -ueo pipefail`}
	if len(outs) == 1 {
		outFn := fmt.Sprintf("out() { echo %s; }", outs[0])
		prog = append(prog, outFn)
	}
	prog = append(prog, cmd)
	args := []string{"bash", "-c", strings.Join(prog, "\n")}
	return action{
		name: name,
		ins:  srcs,
		outs: outs,
		args: args,
	}
}

type task struct {
	execute  func() error
	deps     []*task
	finished chan struct{}
	err      error
}

func (t *task) run() {
	for _, dep := range t.deps {
		dep.wait()
	}
	t.err = t.execute()
	close(t.finished)
}

func (t *task) wait() {
	<-t.finished
}

type outputFile struct {
	path     string
	contents []byte
}

type actionResult struct {
	action      action
	exitCode    int32
	outputFiles []outputFile
	stderr      []byte
	stdout      []byte
	/// true if this was loaded from the action cache. implies that the action should be written to the AC
	fromActionCache bool
}

type sandboxedActionRunner struct {
	nextSandboxID atomic.Uint64
	execroot      string
}

func (ae *sandboxedActionRunner) run(action action) (*actionResult, error) {
	sandboxDir := ae.nextSandboxDir()
	if err := os.MkdirAll(sandboxDir, 0755); err != nil {
		return nil, err
	}
	defer os.RemoveAll(sandboxDir)
	for _, input := range action.ins {
		if err := os.Link(filepath.Join(ae.execroot, input), filepath.Join(sandboxDir, input)); err != nil {
			return nil, err
		}
	}

	cmd := exec.Command(action.args[0], action.args[1:]...)
	cmd.Dir = sandboxDir
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr
	if err := cmd.Run(); err != nil {
		if exitErr, ok := err.(*exec.ExitError); ok {
			return &actionResult{
				action:   action,
				exitCode: int32(exitErr.ExitCode()),
				stdout:   stdout.Bytes(),
				stderr:   stderr.Bytes(),
			}, nil
		}
		return nil, err
	}

	outputFiles := []outputFile{}
	for _, out := range action.outs {
		absOut := filepath.Join(sandboxDir, out)
		contents, err := os.ReadFile(absOut)
		if err != nil {
			return nil, err
		}
		outputFiles = append(outputFiles, outputFile{
			path:     out,
			contents: contents,
		})
		if err := os.Rename(absOut, filepath.Join(ae.execroot, out)); err != nil {
			return nil, err
		}
	}

	return &actionResult{
		action:      action,
		exitCode:    0,
		stdout:      stdout.Bytes(),
		stderr:      stderr.Bytes(),
		outputFiles: outputFiles,
	}, nil
}

func (ae *sandboxedActionRunner) nextSandboxDir() string {
	return filepath.Join(ae.execroot, "sandbox", fmt.Sprintf("%d", ae.nextSandboxID.Add(1)))
}

type digraph struct {
	edges map[string]stringSet
}

func (g *digraph) insert(from, to string) {
	if _, ok := g.edges[from]; !ok {
		g.edges[from] = make(stringSet)
	}
	g.edges[from].add(to)
}

func (g *digraph) walk(entrypoints []string) stringSet {
	seen := make(stringSet)
	for len(entrypoints) > 0 {
		entrypoint := entrypoints[0]
		entrypoints = entrypoints[1:]
		if seen.has(entrypoint) {
			continue
		}
		seen.add(entrypoint)
		for to := range g.edges[entrypoint] {
			entrypoints = append(entrypoints, to)
		}
	}
	return seen
}

func (g *digraph) toposort() ([]string, error) {
	indegrees := g.indegrees()
	sources := []string{}
	for node, indegree := range indegrees {
		if indegree == 0 {
			sources = append(sources, node)
		}
	}
	if len(sources) == 0 {
		return nil, errNoSourceNodes
	}

	sorted := []string{}
	for len(sources) > 0 {
		source := sources[0]
		sources = sources[1:]
		sorted = append(sorted, source)
		for to := range g.edges[source] {
			indegrees[to]--
			if indegrees[to] == 0 {
				sources = append(sources, to)
			}
		}
	}

	if len(sorted) != len(indegrees) {
		return nil, errGraphIsCyclic
	}

	// reverse the order
	for i := 0; i < len(sorted)/2; i++ {
		j := len(sorted) - i - 1
		sorted[i], sorted[j] = sorted[j], sorted[i]
	}

	return sorted, nil
}

var (
	errGraphIsCyclic = errors.New("graph is cyclic")
	errNoSourceNodes = errors.New("graph has no source nodes")
)

func (g *digraph) indegrees() map[string]int {
	indegrees := make(map[string]int)
	for from, tos := range g.edges {
		for to := range tos {
			indegrees[to]++
		}
		if _, ok := indegrees[from]; !ok {
			indegrees[from] = 0
		}
	}
	return indegrees
}

func (g *digraph) subgraph(keep stringSet) digraph {
	sg := digraph{edges: make(map[string]stringSet)}
	for from, tos := range g.edges {
		if !keep.has(from) {
			continue
		}
		for to := range tos {
			if keep.has(to) {
				sg.insert(from, to)
			}
		}
	}
	for from := range keep {
		if _, ok := sg.edges[from]; !ok {
			sg.edges[from] = make(stringSet)
		}
	}
	return sg
}

type config struct {
	name string
	rule string
	cmd  string
	srcs []string
	outs []string
}

func parseArgs(argv []string) (args, error) {
	if len(argv) < 2 {
		return args{}, errNoMode
	}

	mode := mode(argv[1])
	if mode != modeBuild && mode != modeInfo && mode != modeClean {
		return args{}, errInvalidMode
	}

	targetsToBuild := []string{}
	if mode == modeBuild {
		targetsToBuild = argv[2:]
		if len(targetsToBuild) == 0 {
			return args{}, errNoTargets
		}
	}

	return args{
		mode:           mode,
		targetsToBuild: targetsToBuild,
	}, nil
}

var (
	errNoMode      = errors.New("no mode specified")
	errInvalidMode = errors.New("invalid mode")
	errNoTargets   = errors.New("no targets specified")
)

type args struct {
	mode           mode
	targetsToBuild []string
}

type mode string

const (
	modeBuild mode = "build"
	modeInfo  mode = "info"
	modeClean mode = "clean"
)

type dirs struct {
	workspace, execroot string
}

func getDirs() (dirs, error) {
	workspace, err := os.Getwd()
	if err != nil {
		return dirs{}, err
	}

	// get a unique execroot for this workspace
	hasher := sha256.New()
	must(hasher.Write([]byte(workspace)))
	workspaceDirHash := fmt.Sprintf("%x", hasher.Sum(nil))

	return dirs{
		workspace: workspace,
		execroot:  filepath.Join(workspace, "out", workspaceDirHash, "execroot"),
	}, nil
}

func makeLabel(name string) string {
	return "//:" + name
}

type stringSet map[string]bool

func (s stringSet) add(str string) {
	s[str] = true
}

func (s stringSet) has(str string) bool {
	return s[str]
}

func must[A any](a A, err error) A {
	if err != nil {
		panic(err)
	}
	return a
}
