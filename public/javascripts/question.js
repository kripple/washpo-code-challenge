function displayQuestions(questions) {
	var l = questions.length;

	for ( var i = 0 ; i < l ; i++ ) {
		$("#results").append(questionHTML(questions[i]));
	};
};

function questionHTML(question) {
	var id = question.question_id;
  var title = question.title;
  var link = question.link;

	var text = '';
	text += "<div id='" + id + "'class='question-container'>";
	text += "<h1><a id='question-id-" + id + "' class='question-link' href='"+ link + "'>" + title + "</a></h1>";
	text += "</div>";
	return text;
};