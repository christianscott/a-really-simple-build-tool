import abc
import hashlib
import json
import pickle

from dataclasses import dataclass
from typing import Protocol


class Serde(abc.ABC):
    def serialize(self) -> bytes:
        return pickle.dumps(self)

    @classmethod
    def deserialize(cls, raw: bytes):
        obj = pickle.loads(raw)
        assert isinstance(obj, cls)
        return obj


@dataclass
class ActionInput:
    filename: str
    digest: str


@dataclass
class Action:
    args: list[str]
    # note: bazel uses a merkle tree but a list of digests & filenames is good enough for a toy build system
    ins: list[ActionInput]
    outs: list[str]

    def hash(self) -> str:
        as_bytes = json.dumps({
            "args": self.args,
            "ins": [{ "filename": i.filename, "digest": i.digest } for i in self.ins],
            "outs": self.outs
        }).encode()
        hasher = hashlib.sha256()
        hasher.update(as_bytes)
        return hasher.hexdigest()


@dataclass
class ActionResult(Serde):
    exit_code: int
    stdout: bytes
    stderr: bytes
    outputs: dict[str, str]


class CAS(Protocol):
    def find_missing_blobs(self, keys: list[str]) -> list[str]: ...
    def upload_blobs(self, blobs: list[tuple[str, bytes]]): ...
    def read_blobs(self, keys: list[str]) -> list[bytes]: ...


class ActionCache(Protocol):
    def get_action_result(self, key: str) -> ActionResult | None: ...
    def update_action_result(self, key: str, result: ActionResult): ...


class ActionExecutor(Protocol):
    def execute(self, action: Action) -> ActionResult: ...
