from protocol import ActionCache, ActionResult, CAS
import json
import urllib.request
import urllib.error


class RemoteCAS(CAS):
    def __init__(self, base_url="http://localhost:5000"):
        self.base_url = base_url.rstrip('/')

    def find_missing_blobs(self, digests):
        url = self.base_url + "/find-missing-blobs"
        payload = json.dumps({"digests": digests}).encode('utf-8')
        headers = {"Content-Type": "application/json"}
        req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req) as response:
                resp_data = response.read().decode('utf-8')
                result = json.loads(resp_data)
                return result.get("missing", [])
        except urllib.error.HTTPError as e:
            raise Exception(f"HTTP Error: {e.code} {e.reason}")

    def upload_blobs(self, blobs: list[tuple[str, bytes]]):
        for digest, data in blobs:
            url = f"{self.base_url}/blob/{digest}"
            headers = {"Content-Type": "application/octet-stream"}
            req = urllib.request.Request(url, data=data, headers=headers, method="PUT")
            try:
                with urllib.request.urlopen(req) as response:
                    response.read()  # Read and discard response to ensure request completes
            except urllib.error.HTTPError as e:
                raise Exception(f"HTTP Error: {e.code} {e.reason}")

    def read_blobs(self, keys: list[str]) -> list[bytes]:
        result = []
        for key in keys:
            url = f"{self.base_url}/blob/{key}"
            req = urllib.request.Request(url, method="GET")
            try:
                with urllib.request.urlopen(req) as response:
                    result.append(response.read())
            except urllib.error.HTTPError as e:
                if e.code == 404:
                    raise Exception(f"Blob not found: {key}")
                else:
                    raise Exception(f"HTTP Error: {e.code} {e.reason}")
        return result


class RemoteActionCache(ActionCache):
    def __init__(self, base_url="http://localhost:5000"):
        self.base_url = base_url.rstrip('/')

    def get_action_result(self, key: str) -> ActionResult | None:
        url = f"{self.base_url}/action/{key}"
        req = urllib.request.Request(url, method="GET")
        try:
            with urllib.request.urlopen(req) as response:
                return ActionResult.deserialize(response.read())
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            raise Exception(f"HTTP Error: {e.code} {e.reason}")

    def update_action_result(self, key: str, result: ActionResult):
        url = f"{self.base_url}/action/{key}"
        headers = {"Content-Type": "application/octet-stream"}
        req = urllib.request.Request(url, 
                                   data=result.serialize(),
                                   headers=headers, 
                                   method="PUT")
        try:
            with urllib.request.urlopen(req) as response:
                response.read()  # Read and discard response to ensure request completes
        except urllib.error.HTTPError as e:
            raise Exception(f"HTTP Error: {e.code} {e.reason}")


class RemoteActionExecutor:
    pass
