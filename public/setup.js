$(document).ready( function() {
  $.ajax('http://www.omdbapi.com/?')
    .done( function(response) {
      console.log(response)
    });
});
