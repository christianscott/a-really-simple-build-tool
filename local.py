import pathlib
import shutil
import subprocess

from protocol import Action, ActionResult, ActionExecutor, CAS

class LocalCAS(CAS):
    def __init__(self, cachedir: pathlib.Path) -> None:
        self.cachedir = cachedir / "cas"
        self.cachedir.mkdir(parents=True, exist_ok=True)

    def find_missing_blobs(self, keys: list[str]) -> list[str]:
        missing = []
        for key in keys:
            p = self.cachedir / key
            if p.exists():
                continue
            missing.append(key)
        return missing

    def upload_blobs(self, blobs: list[tuple[str, bytes]]):
        for key, blob in blobs:
            p = self.cachedir / key
            if p.exists():
                continue
            p.write_bytes(blob)

    def link_entry_to(self, key: str, dest: pathlib.Path) -> None:
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.hardlink_to(self.cachedir / key)

class LocalActionCache:
    def __init__(self, cachedir: pathlib.Path) -> None:
        self.cachedir = cachedir / "ac"
        self.cachedir.mkdir(parents=True, exist_ok=True)

    def get_action_result(self, key: str) -> ActionResult | None:
        p = self.cachedir / key
        if not p.exists():
            return None
        return ActionResult.deserialize(p.read_bytes())

    def update_action_result(self, key: str, result: ActionResult):
        (self.cachedir / key).write_bytes(result.serialize())


class SandboxedActionExecutor(ActionExecutor):
    _next_sandbox_id: int
    _cas: CAS
    _execroot: pathlib.Path

    def __init__(self, cas: CAS, execroot: pathlib.Path) -> None:
        self._next_sandbox_id = 0
        self._cas = cas
        self._execroot = execroot

    def execute(self, action: Action) -> ActionResult:
        sandbox_dir = self._get_next_sandbox_dir()

        if isinstance(self._cas, LocalCAS):
            for input in action.ins:
                dest = sandbox_dir / input.filename
                self._cas.link_entry_to(input.digest, dest)
        else:
            blobs = self._cas.read_blobs([input.digest for input in action.ins])
            for input, blob in zip(action.ins, blobs):
                dest = sandbox_dir / input.filename
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(blob)

        for out in action.outs:
            sandbox_dir.joinpath(out).parent.mkdir(parents=True, exist_ok=True)

        result = subprocess.run(
            action.args,
            cwd=sandbox_dir,
            check=False,
            capture_output=True,
        )

        outputs: dict[str, str] = dict()
        if result.returncode == 0:
            for out in action.outs:
                sandbox_out = sandbox_dir / out
                assert sandbox_out.exists(), f"action did not produce expected output: {sandbox_out}"
                outputs[out] = sandbox_out.read_text("utf-8")
                target = self._execroot / out
                target.parent.mkdir(parents=True, exist_ok=True)
                sandbox_out.rename(target)
                # TODO: move to CAS

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
