function initSearch() {

	$("#search").on('click', function(){

		$('#results').children().remove();

		var searchTerm = $("#title-input").val();
		var url = "http://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&title="+ searchTerm +"&site=stackoverflow";

		$.ajax(url).done(function(data) {
			displayQuestions(data["items"]);
			initAnswers();

		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(errorThrown); 
		});	

	});

};