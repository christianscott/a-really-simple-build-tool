from http import HTTPStatus
import http.server
import sys


class HTTPRequestHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-type", "text")
        bs = bytes("hello!", "utf-8")
        self.send_header("Content-Length", len(bs))
        self.wfile.write(bs)

if __name__ == "__main__":
    http.server.BaseHTTPRequestHandler.default_request_version = "http/1.1"
    with http.server.ThreadingHTTPServer(
        ("localhost", 8080),
        HTTPRequestHandler,
        bind_and_activate=True,
    ) as httpd:
        host, port = httpd.socket.getsockname()[:2]
        url_host = f'[{host}]' if ':' in host else host
        print(
            f"Serving HTTP on {host} port {port} "
            f"(http://{url_host}:{port}/) ..."
        )
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nKeyboard interrupt received, exiting.")
            sys.exit(0)