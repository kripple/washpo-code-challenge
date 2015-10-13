$(document).ready(function() {

	$.ajax({
	  url: "https://api.stackexchange.com/docs/answers",
	  method: "GET",
	  dataType: "json",
	  data: {
	  	"client_id": "5764",
	  	"key": "09ncANZfLNMiLRnTfaN*cg(("
	  },
	  success: function( data, status, jqxhr ){
	    console.log( "Request received:", data );
	  },
	  error: function( jqxhr, status, error ){
	    console.log( "Something went wrong!" );
	  }
	});

	
});