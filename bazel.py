import abc
import argparse
import collections
import dataclasses
import hashlib
import os
import pathlib
import queue
import shutil
import threading

from collections.abc import Iterable
from dataclasses import dataclass

from local import LocalActionCache, LocalCAS, SandboxedActionExecutor
from protocol import Action, ActionCache, ActionExecutor, ActionInput, ActionResult, CAS


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
        assert Label.is_absolute(self.label)
        return self.label.replace("//", "").replace(":", "/").removeprefix("/")

    @staticmethod
    def is_absolute(label: str):
        return label.startswith("//")


@dataclass
class InternalAction:
    target: Label
    args: list[str]
    outs: list[Label]
    srcs: list[Label] = dataclasses.field(default_factory=list)


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
    output_dir = workspace / "bazel-out"
    execroot = output_dir / "execroot"
    execroot.mkdir(parents=True, exist_ok=True)

    actions: list[InternalAction] = []
    for build_file in workspace.rglob("**/BUILD.bazel"):
        if str(build_file).startswith(str(output_dir)):
            continue
        with open(build_file, "r") as file:
            contents = file.read()

        package_path = build_file.parent.relative_to(workspace)
        package = str(package_path)
        if package == ".":
            package = ""

        exec(contents, {}, {
            "genrule": lambda *_args, **kwargs: actions.append(genrule(package=package, **kwargs))
        })

    label_to_action: dict[Label, InternalAction] = {action.target: action for action in actions}

    targets: dict[Label, Target] = dict()
    for root, _, files in os.walk(workspace):
        if root.startswith(str(output_dir)):
            continue

        assert pathlib.Path(root).joinpath("BUILD.bazel").exists(), "each directory must be a package"

        rel_root = os.path.relpath(root, workspace)

        for file in files:
            if file == "BUILD.bazel":
                continue
            file_target_label = f"//{rel_root.removeprefix('./')}:{file}"
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

    cachedir=execroot / ".cache"
    local_cas = LocalCAS(cachedir=cachedir)
    runner = ActionRunner(
        execroot=execroot,
        targets=targets,
        cache=LocalActionCache(cachedir=cachedir),
        executor=SandboxedActionExecutor(execroot=execroot, cas=local_cas),
        cas=local_cas
    )

    ready: queue.Queue[Label] = queue.Queue()
    for label in sources:
        ready.put_nowait(label)

    errors: list[Exception] = []
    def worker():
        while True:
            label = ready.get()

            print(f"executing {label.label}")
            try:
                runner.run(label_to_action[label])
            except Exception as e:
                e.add_note(f"while executing '{label.label}'")
                errors.append(e)

            # schedule all ready dependees
            for dep in dependees.edges[label]:
                indegrees[dep] -= 1
                if indegrees[dep] == 0:
                    ready.put_nowait(dep)

            ready.task_done()

    for _ in range(jobs):
        threading.Thread(target=worker, daemon=True).start()
    ready.join()

    if len(errors) > 0:
        raise errors[0]

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
    package: str,
    name: str,
    cmd: str,
    srcs: list[str] | None = None,
    outs: list[str],
) -> InternalAction:
    assert name is not None, "missing name"
    assert cmd is not None, "missing cmd"
    assert len(outs) > 0, "genrule must have at least one output files"

    srcs = srcs if srcs is not None else []
    src_labels = [
        Label(src) if Label.is_absolute(src) else Label(f"//{package}{src}")
        for src in srcs
    ]
    out_labels = [Label(f"//{package}:{out}") for out in outs]

    cmd_lines = ["set -euo pipefail"]
    if len(outs) == 1:
        only_out_path = out_labels[0].path()
        cmd_lines.append(f"out() {{ echo {only_out_path}; }}")
    if len(srcs) > 0:
        cmd_lines.append("location() {")
        cmd_lines.append("  case \"$1\" in")
        for src in src_labels:
            cmd_lines.append(f"  '{src.label}') echo '{src.path()}' ;;")
        cmd_lines.append("  *)")
        cmd_lines.append("    echo >&2 \"could not locate '$1'\"")
        cmd_lines.append("    exit 1")
        cmd_lines.append("    ;;")
        cmd_lines.append("  esac")
        cmd_lines.append("}")
    cmd_lines.append(cmd)
    args = ["bash", "-c", "\n".join(cmd_lines)]

    return InternalAction(
        target=Label(f"//{package}:{name}"),
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


@dataclass
class CacheHitStats:
    hits: int = 0
    misses: int = 0


class ActionRunner:
    _execroot: pathlib.Path
    _targets: dict[Label, Target]
    _cache: ActionCache
    _executor: ActionExecutor
    _cas: CAS
    cache_hit_stats: CacheHitStats

    def __init__(
        self,
        execroot: pathlib.Path,
        targets: dict[Label, Target],
        cache: ActionCache,
        executor: ActionExecutor,
        cas: CAS,
    ) -> None:
        self._execroot = execroot
        self._targets = targets
        self._cache = cache
        self._already_linked_paths = set()
        self.cache_hit_stats = CacheHitStats()
        self._executor = executor
        self._cas = cas

    def run(self, internal_action: InternalAction) -> ActionResult:
        # link all referenced workspace files into the execroot
        for src in internal_action.srcs:
            target = self._targets[src]
            if not isinstance(target, WorkspaceFileTarget):
                continue

            src_path = src.path()
            if src_path in self._already_linked_paths:
                continue
            dest = self._execroot / src_path
            src = workspace / src_path
            dest.unlink(missing_ok=True)
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.hardlink_to(src)
            self._already_linked_paths.add(src_path)

        action = self._internal_action_to_action(internal_action)
        action_key = action.hash()
        digest_to_filename = { input.digest: input.filename for input in action.ins }

        missing = self._cas.find_missing_blobs([input.digest for input in action.ins])
        if len(missing) > 0:
            blobs: list[tuple[str, bytes]] = []
            for key in missing:
                contents = (self._execroot / digest_to_filename[key]).read_bytes()
                blobs.append((key, contents))
            self._cas.upload_blobs(blobs)

        result = self._cache.get_action_result(action_key)
        if result is None:
            self.cache_hit_stats.misses += 1
            result = self._executor.execute(action=self._internal_action_to_action(internal_action))
            if result.exit_code == 0:
                self._cache.update_action_result(action_key, result)
            else:
                raise Exception(f"failed to execute {action_key}: {str(result.stderr)}")
        else:
            self.cache_hit_stats.hits += 1
            for file, contents in result.outputs.items():
                (self._execroot / file).write_text(contents, encoding="utf-8")

        return result

    def _internal_action_to_action(self, internal_action: InternalAction) -> Action:
        ins: list[ActionInput] = []

        for src in internal_action.srcs:
            src_path = src.path()
            content = self._execroot.joinpath(src_path).read_bytes()
            hasher = hashlib.sha256()
            hasher.update(content)
            ins.append(ActionInput(filename=src_path, digest=hasher.hexdigest()))

        return Action(
            args=internal_action.args,
            outs=[out.path() for out in internal_action.outs],
            ins=ins,
        )


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
