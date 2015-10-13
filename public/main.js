$(document).ready(function() {

	// $.ajax({
	//   url: "https://api.stackexchange.com/docs/answers",
	//   method: "GET",
	//   dataType: "json",
	//   data: {
	//   	"client_id": "5764",
	//   	"key": "09ncANZfLNMiLRnTfaN*cg(("
	//   },
	//   success: function( data, status, jqxhr ){
	//     console.log( "Request received:", data );
	//   },
	//   error: function( jqxhr, status, error ){
	//     console.log( "Something went wrong!" );
	//   }
	// });

	// $.ajax({
	//   url: "https://api.stackexchange.com/docs/answers&callback=?",
	//   jsonp: "$jsonp",
	//   dataType: "jsonp",
	//   jsonpCallback: 'jsonCallback',
	//   data: {
	//   	"client_id": "5764",
	//   	"key": "09ncANZfLNMiLRnTfaN*cg(("
	//   },
	// }).done(function(data) {
	//   console.log("Request received: " + data);
	// });

	// $.ajax({
 //    url: "https://api.stackexchange.com/docs/questions?callback=jsonp_callback&site=stackoverflow",
 //    dataType: 'JSONP',
 //    jsonpCallback: 'callback',
 //    type: 'GET',
 //    data: {
	//   	"client_id": "5764",
	//   	"key": "09ncANZfLNMiLRnTfaN*cg(("
	//   },
 //    success: function (data) {
 //        console.log(data);
 //    }
	// });

	$.getJSON({
    url: "https://api.stackexchange.com/docs/questions&site=stackoverflow",
    data: {
	  	"client_id": "5764",
	  	"key": "09ncANZfLNMiLRnTfaN*cg(("
	  }
	  }).done(function(data) {
		  console.log("Request received: " + data);
		}).fail(function(data) {
		  console.log("Something went wrong!");
		});

});






