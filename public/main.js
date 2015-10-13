$(document).ready(function() {
	$.ajax("http://www.stackoverflow.com/answers").done(function(data) {
		debugger
	}).fail(function() {
		console.log("Failed to retreive data");
	})

	
});