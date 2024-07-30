import abc
import argparse
import collections
import dataclasses
import hashlib
import json
import os
import pathlib
import queue
import shutil
import subprocess
import threading
from collections.abc import Iterable
from dataclasses import dataclass


class Label:
    label: str

    def __init__(self, label: str) -> None:
        assert label.startswith("//"), "label must be resolved"
        self.label = label

    def __hash__(self) -> int:
        return hash(self.label)

    def __repr__(self) -> str:
        return f"Label({self.label})"

    def __eq__(self, value: object) -> bool:
        return isinstance(value, Label) and self.label == value.label

    def path(self) -> str:
        assert self.label.startswith("//:")
        return self.label.replace("//:", "")


@dataclass
class Action:
    target: Label
    args: list[str]
    outs: list[Label]
    srcs: list[Label] = dataclasses.field(default_factory=list)


@dataclass
class ActionResult:
    exit_code: int
    stdout: bytes
    stderr: bytes
    outputs: dict[str, str]

    def as_json(self) -> str:
        return json.dumps(
            {
                "exit_code": self.exit_code,
                "outputs": self.outputs,
                "stderr": self.stderr.decode("utf-8"),
                "stdout": self.stdout.decode("utf-8"),
            }
        )

    @staticmethod
    def from_json(json_str: str) -> "ActionResult":
        obj = json.loads(json_str)
        assert isinstance(obj, dict)
        return ActionResult(
            exit_code=obj["exit_code"],
            outputs=obj["outputs"],
            stderr=obj["stderr"].encode("utf-8"),
            stdout=obj["stdout"].encode("utf-8"),
        )


class Target(abc.ABC):
    pass


@dataclass
class RuleTarget(Target):
    outs: list[Label]


@dataclass
class OutputFileTarget(Target):
    produced_by_target: Label


@dataclass
class WorkspaceFileTarget(Target):
    pass


def clean(workspace: pathlib.Path):
    shutil.rmtree(str(workspace / "bazel-out"), ignore_errors=True)


def build(workspace: pathlib.Path, requested_labels: list[str], jobs: int):
    with open('./examples/txt/BUILD.bazel', 'r') as file:
        contents = file.read()

    actions: list[Action] = []
    exec(contents, {}, {
        "genrule": lambda *_args, **kwargs: actions.append(genrule(**kwargs))
    })
    label_to_action: dict[Label, Action] = {action.target: action for action in actions}

    targets: dict[Label, Target] = dict()

    for root, _, files in os.walk(workspace):
        rel_root = os.path.relpath(root, workspace)
        for file in files:
            file_target_label = f"//:{os.path.join(rel_root, file).replace('./', '')}"
            targets[Label(file_target_label)] = WorkspaceFileTarget()

    for action in actions:
        targets[action.target] = RuleTarget(outs=action.outs)
        for output in action.outs:
            targets[output] = OutputFileTarget(produced_by_target=action.target)

    targets_to_build: set[Label] = set()
    for rule_target_label in requested_labels:
        qualified_label = rule_target_label
        # very simple qualification (:one -> //:one)
        if not qualified_label.startswith("//"):
            qualified_label = f"//{qualified_label}"
        qualified_label = Label(qualified_label)

        target = targets[qualified_label]
        match target:
            case RuleTarget():
                targets_to_build.add(qualified_label)
            case OutputFileTarget():
                targets_to_build.add(target.produced_by_target)
            case WorkspaceFileTarget():
                # ignore these requests
                pass

    execroot = workspace / "bazel-out" / "execroot"
    execroot.mkdir(parents=True, exist_ok=True)

    graph = Digraph()
    for action in actions:
        for src in action.srcs:
            target = targets[src]
            match target:
                case RuleTarget():
                    graph.insert(action.target, src)
                case OutputFileTarget():
                    graph.insert(action.target, target.produced_by_target)
                case WorkspaceFileTarget():
                    # a dependency on a workspace file has no bearing on the graph
                    pass

    transitive_targets = graph.walk(targets_to_build)
    subgraph = graph.subgraph(transitive_targets)
    dependees = subgraph.reverse()
    indegrees = dependees.indegrees()
    sources = [label for label, count in indegrees.items() if count == 0]

    runner = ActionRunner(
        execroot=execroot,
        targets=targets,
        cache=Cache(cachedir=execroot / ".cache"),
    )

    ready: queue.Queue[Label] = queue.Queue()
    for label in sources:
        ready.put_nowait(label)

    def worker():
        while True:
            label = ready.get()

            print(f"executing {label.label}")
            runner.run(label_to_action[label])

            # schedule all ready dependees
            for dep in dependees.edges[label]:
                indegrees[dep] -= 1
                if indegrees[dep] == 0:
                    ready.put_nowait(dep)

            ready.task_done()

    for _ in range(jobs):
        threading.Thread(target=worker, daemon=True).start()
    ready.join()

    stats = runner.cache_hit_stats
    if stats.misses == 0:
        print(f"{stats.hits} cache {pluralize('hit', stats.hits)}")
    elif stats.hits == 0:
        print(f"executed {stats.misses} {pluralize('action', stats.misses)}")
    else:
        print(
            f"executed {stats.misses} {pluralize('action', stats.misses)}, {stats.hits} cache {pluralize('hit', stats.hits)}"
        )


def pluralize(word: str, count: int) -> str:
    return word if count == 1 else f"{word}s"


def genrule(
    *,
    name: str,
    cmd: str,
    srcs: list[str] | None = None,
    outs: list[str],
) -> Action:
    assert name is not None, "missing name"
    assert cmd is not None, "missing cmd"
    assert len(outs) > 0, "genrule must have at least one output files"

    srcs = srcs if srcs is not None else []
    src_labels = [Label(f"//{src}") for src in srcs]
    out_labels = [Label(f"//:{out}") for out in outs]

    cmd_lines = ["set -euo pipefail"]
    if len(outs) == 1:
        cmd_lines.append(f"out() {{ echo {outs[0]}; }}")
    cmd_lines.append(cmd)
    args = ["bash", "-c", "\n".join(cmd_lines)]

    return Action(
        target=Label(f"//:{name}"),
        args=args,
        outs=out_labels,
        srcs=src_labels,
    )


class Digraph:
    edges: collections.defaultdict[Label, set[Label]]

    def __init__(self) -> None:
        self.edges = collections.defaultdict(set)

    def insert(self, frm: Label, to: Label):
        self.edges[frm].add(to)

    def walk(self, entrypoints: Iterable[Label]) -> set[Label]:
        seen: set[Label] = set()
        queue = collections.deque(entrypoints)
        while len(queue) > 0:
            label = queue.popleft()
            if label in seen:
                continue
            seen.add(label)
            for dep in self.edges[label]:
                queue.append(dep)
        return seen

    def subgraph(self, keep_labels: set[Label]) -> "Digraph":
        subgraph = Digraph()
        for label, deps in self.edges.items():
            if label not in keep_labels:
                continue
            for dep_label in deps:
                if dep_label in keep_labels:
                    subgraph.insert(label, dep_label)
        for label in keep_labels:
            if label not in subgraph.edges:
                subgraph.edges[label] = set()
        return subgraph

    def indegrees(self) -> dict[Label, int]:
        indegrees = collections.defaultdict(int)
        for label, deps in self.edges.items():
            for dep in deps:
                indegrees[dep] += 1
            if label not in indegrees:
                indegrees[label] = 0
        return indegrees

    def reverse(self) -> "Digraph":
        reverse = Digraph()
        for label, deps in self.edges.items():
            reverse.edges[label] # ensure that nodes with no dependees are retained
            for dep in deps:
                reverse.insert(dep, label)
        return reverse


class Cache:
    def __init__(self, cachedir: pathlib.Path) -> None:
        self.cachedir = cachedir
        cachedir.mkdir(parents=True, exist_ok=True)

    def get_action_result(self, key: str) -> ActionResult | None:
        p = self.cachedir / key
        if not p.exists():
            return None
        return ActionResult.from_json(p.read_text("utf-8"))

    def update_action_result(self, key: str, result: ActionResult):
        (self.cachedir / key).write_bytes(result.as_json().encode("utf-8"))


@dataclass
class CacheHitStats:
    hits: int = 0
    misses: int = 0


class ActionRunner:
    _execroot: pathlib.Path
    _targets: dict[Label, Target]
    _cache: Cache
    _already_linked_paths: set[str]
    _next_sandbox_id: int
    cache_hit_stats: CacheHitStats

    def __init__(
        self,
        execroot: pathlib.Path,
        targets: dict[Label, Target],
        cache: Cache,
    ) -> None:
        self._execroot = execroot
        self._targets = targets
        self._cache = cache
        self._already_linked_paths = set()
        self._next_sandbox_id = 0
        self.cache_hit_stats = CacheHitStats()

    def run(self, action: Action) -> ActionResult:
        # link all referenced workspace files into the execroot
        for src in action.srcs:
            target = self._targets[src]
            if not isinstance(target, WorkspaceFileTarget):
                continue

            src_path = src.path()
            if src_path in self._already_linked_paths:
                continue
            dest = self._execroot / src_path
            dest.unlink(missing_ok=True)
            dest.hardlink_to(workspace / src_path)
            self._already_linked_paths.add(src_path)

        action_key = self._hash_action(action, self._execroot)

        result = self._cache.get_action_result(action_key)
        if result is None:
            self.cache_hit_stats.misses += 1
            result = self._spawn_action(action=action)
            if result.exit_code == 0:
                self._cache.update_action_result(action_key, result)
        else:
            self.cache_hit_stats.hits += 1
            for file, contents in result.outputs.items():
                (self._execroot / file).write_text(contents, encoding="utf-8")

        return result

    def _hash_action(self, action: Action, execroot: pathlib.Path) -> str:
        hasher = hashlib.sha256()
        hasher.update(" ".join(action.args).encode())
        hasher.update(" ".join(out.path() for out in action.outs).encode())

        for src in action.srcs:
            content = execroot.joinpath(src.path()).read_bytes()
            hasher.update(content)

        return hasher.hexdigest()

    def _spawn_action(self, action: Action) -> ActionResult:
        sandbox_dir = self._get_next_sandbox_dir()

        for src in action.srcs:
            target = self._targets[src]
            match target:
                case RuleTarget():
                    # a dependency on a rule target means you implicitly depend on all of its outputs
                    for out in target.outs:
                        (sandbox_dir / out.path()).hardlink_to(
                            self._execroot / out.path()
                        )
                case WorkspaceFileTarget():
                    (sandbox_dir / src.path()).hardlink_to(self._execroot / src.path())
                case OutputFileTarget():
                    (sandbox_dir / src.path()).hardlink_to(self._execroot / src.path())

        result = subprocess.run(
            action.args,
            cwd=sandbox_dir,
            check=False,
            capture_output=True,
        )

        outputs: dict[str, str] = dict()
        if result.returncode == 0:
            for out in action.outs:
                sandbox_out = sandbox_dir / out.path()
                assert sandbox_out.exists(), "action did not produce expected output"
                outputs[out.path()] = sandbox_out.read_text("utf-8")
                sandbox_out.rename(self._execroot / out.path())

        shutil.rmtree(sandbox_dir)

        return ActionResult(
            exit_code=result.returncode,
            stdout=result.stdout,
            stderr=result.stderr,
            outputs=outputs,
        )

    def _get_next_sandbox_dir(self):
        sandbox_dir = self._execroot / "sandbox" / f"{self._next_sandbox_id}"
        self._next_sandbox_id += 1
        assert not sandbox_dir.exists(), f"sandbox dir {sandbox_dir} already exists"
        sandbox_dir.mkdir(parents=True, exist_ok=False)
        return sandbox_dir


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="bazel", description="a simple build tool")
    parser.add_argument("mode", help="build or clean", choices=["build", "clean"])
    parser.add_argument("labels", nargs="*", help="labels for the targets to build")
    parser.add_argument("--workspace", default=".", help="workspace directory")
    parser.add_argument("--jobs", default=8, help="workspace directory", type=int)
    args = parser.parse_args()

    if args.workspace.startswith("/"):
        workspace = args.workspace
    else:
        workspace = os.path.abspath(args.workspace)
    workspace = pathlib.Path(workspace)

    match args.mode:
        case "build":
            build(workspace, args.labels, args.jobs)
        case "clean":
            clean(workspace)
