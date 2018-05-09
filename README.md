# url-checker
A simple microservice to parse HackerNews page to JSON.


## Request
A simple GET request with a `url` parameter works.
```http
GET https://hn-api.now.sh
```

## Response
```json
[
	{
		"title": "Google Duplex: An AI System for Accomplishing Real World Tasks Over the Phone",
		"link": "https://ai.googleblog.com/2018/05/duplex-ai-system-for-natural-conversation.html",
		"siteString": "googleblog.com",
		"score": "1298 points",
		"user": {
			"name": "ivank",
			"link": "user?id=ivank"
		},
		"age": "13 hours ago",
		"commentCount": "529 comments",
		"threadLink": "item?id=17022963"
	},
	{
		"title": "A Short Introduction to the Art of Programming (1971) [pdf]",
		"link": "https://www.cs.utexas.edu/users/EWD/ewd03xx/EWD316.PDF",
		"siteString": "utexas.edu",
		"score": "140 points",
		"user": {
			"name": "Rescis",
			"link": "user?id=Rescis"
		},
		"age": "6 hours ago",
		"commentCount": "13 comments",
		"threadLink": "item?id=17026822"
	}
]
```

## License
The project is under MIT License.
