from flask import Flask, request, jsonify, Response, abort
import argparse
import pathlib
import os

class Store:
    def __init__(self, root_dir: pathlib.Path, subdir: str):
        self.store_dir = root_dir / subdir
        self.store_dir.mkdir(parents=True, exist_ok=True)

    def get_path(self, key: str) -> pathlib.Path:
        return self.store_dir / key[:2] / key[2:]

    def exists(self, key: str) -> bool:
        return self.get_path(key).exists()

    def write(self, key: str, data: bytes):
        path = self.get_path(key)
        path.parent.mkdir(parents=True, exist_ok=True)
        temp_path = path.with_suffix('.tmp')
        temp_path.write_bytes(data)
        os.replace(temp_path, path)

    def read(self, key: str) -> bytes:
        path = self.get_path(key)
        if not path.exists():
            raise FileNotFoundError(key)
        return path.read_bytes()

def create_app(root_dir: pathlib.Path) -> Flask:
    app = Flask(__name__)
    
    blob_store = Store(root_dir, "cas")
    action_store = Store(root_dir, "ac")

    @app.route('/find-missing-blobs', methods=['POST'])
    def find_missing_blobs():
        data = request.get_json()
        if not data or 'digests' not in data:
            return jsonify({'error': 'Missing digests parameter'}), 400
        
        digests = data['digests']
        missing = [d for d in digests if not blob_store.exists(d)]
        return jsonify({'missing': missing})

    @app.route('/blob/<digest>', methods=['PUT'])
    def write_blob(digest):
        blob_store.write(digest, request.get_data())
        return jsonify({'status': 'ok'})

    @app.route('/blob/<digest>', methods=['GET'])
    def get_blob(digest):
        try:
            data = blob_store.read(digest)
            return Response(data, mimetype='application/octet-stream')
        except FileNotFoundError:
            abort(404)

    @app.route('/action/<key>', methods=['GET'])
    def get_action(key):
        try:
            data = action_store.read(key)
            return Response(data, mimetype='application/octet-stream')
        except FileNotFoundError:
            abort(404)

    @app.route('/action/<key>', methods=['PUT'])
    def update_action(key):
        action_store.write(key, request.get_data())
        return jsonify({'status': 'ok'})

    return app

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--root-dir', type=pathlib.Path, required=True,
                       help='Root directory for storage')
    parser.add_argument('--port', type=int, default=5000,
                       help='Port to listen on (default: 5000)')
    args = parser.parse_args()

    app = create_app(args.root_dir)
    app.run(port=args.port)

if __name__ == '__main__':
    main()