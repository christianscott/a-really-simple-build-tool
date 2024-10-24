from protocol import Action, ActionResult, CAS


class RemoteCAS(CAS):
    _blobs: dict[str, bytes]

    def __init__(self) -> None:
        self._blobs = dict()       

    def find_missing_blobs(self, keys: list[str]) -> list[str]:
        return [key for key in keys if key not in self._blobs]

    def upload_blobs(self, blobs: list[tuple[str, bytes]]):
        for (key, blob) in blobs:
            self._blobs[key] = blob

    def read_blobs(self, keys: list[str]) -> list[bytes]:
        return [self._blobs[key] for key in keys]


class RemoteActionCache:
    pass


class RemoteActionExecutor:
    pass
