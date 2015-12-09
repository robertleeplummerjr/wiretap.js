# wiretap.js
Put a wiretap on javascript element events

Use before adding events using jQuery or pure javascript.

Usage:
```javascript
new Tap({
	add: function() {
		//fire when an event is bound to element
	},
	before: function() {
		//fire just before an event executes, arguments are automatic
	},
	after: function() {
		//fire just after an event executes, arguments are automatic
	}
});
```

