# url-checker
Check the status code of a given url, the response will be returned as a JSON object which contains the status code, status message and headers as an array, directly from the response. Built to learn and understand [Zeit Now](https://zeit.co/now), and it is not guaranteed to be stable.

## Request
A simple GET request with a `url` parameter works.
```http
GET https://url-checker.now.sh?url=https://github.com
```

## Response
```json
{
    "success": true,
    "statusCode": 200,
    "statusMessage": "OK",
    "headers": {
        "server": "GitHub.com",
        "date": "Fri, 06 Apr 2018 15:02:48 GMT",
        "content-type": "text/html; charset=utf-8",
        "transfer-encoding": "chunked",
        "connection": "close",
        "status": "200 OK",
        "x-frame-options": "deny",
        "x-xss-protection": "1; mode=block",
        "x-content-type-options": "nosniff",
        "cache-control": "no-cache",
        "vary": "X-PJAX",
        "set-cookie": [
            "logged_in=no; domain=.github.com; path=/; expires=Tue, 06 Apr 2038 15:02:48 -0000; secure; HttpOnly",
            "_gh_sess=dTE1Vm5XUi9aS0IzbTRiaXpmVUtvSUZ6bnRwMTJPSENEN24zQWxlR3NaNlM4dlcyZmVFdlcxUHliZDcyU21qRXdLZm05YzVjZDZ6WGJSOVdkRjltSXJ0d2JVYjJwNUhqVkJqVCtxbHl6M3JIaEh3WDlQNHFTR3dEanU3b2VJVHE2V2VCQVY5OGIveWVVZU9Ta3p0Z09LQndqZWpkdGdJbWw5dUNRWkdiTFJZZnR4amhiWHJIOG9GTVA3YlBsWGU2RkJzWjNYeFc3b2FZNUMwdUh0MjV5dz09LS1pQ0hzdTdpcFZMeFVCY3IwQ24wWUd3PT0%3D--3a753deca95fe178725ca0ee5f866f635c3b4a75; path=/; secure; HttpOnly"
        ],
        "x-request-id": "92864b61-21ff-4630-8023-77fe9f700613",
        "x-runtime": "0.041493",
        "strict-transport-security": "max-age=31536000; includeSubdomains; preload",
        "referrer-policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
        "expect-ct": "max-age=2592000, report-uri=\"https://api.github.com/_private/browser/errors\"",
        "content-security-policy": "default-src 'none'; base-uri 'self'; block-all-mixed-content; child-src render.githubusercontent.com; connect-src 'self' uploads.github.com status.github.com collector.githubapp.com api.github.com www.google-analytics.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com wss://live.github.com; font-src assets-cdn.github.com; form-action 'self' github.com gist.github.com; frame-ancestors 'none'; img-src 'self' data: assets-cdn.github.com identicons.github.com collector.githubapp.com github-cloud.s3.amazonaws.com *.githubusercontent.com; manifest-src 'self'; media-src 'none'; script-src assets-cdn.github.com; style-src 'unsafe-inline' assets-cdn.github.com; worker-src 'self'",
        "x-runtime-rack": "0.048352",
        "x-github-request-id": "95A2:5AF4:1129ED4:1FF760A:5AC78C18"
    },
    "host": "github.com",
    "actualUrl": "https://github.com"
}
```

## License
The project is under MIT License.
