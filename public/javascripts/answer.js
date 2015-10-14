function initAnswers() {
	$(".question-link").on('click', function(e){
		e.preventDefault();

		var idStr = $(this).attr('id');
		var id = getValue("question-id-", idStr);
		var questionContainer = $("#"+id)
		var answers = questionContainer.children('.answer-container');

		if ( answers.length < 1) {
			showQuestion(id, questionContainer);
			
		} else {
			questionContainer.children('.question-body').remove();
			questionContainer.children('.answer-container').remove();
		}

	});
};

function showQuestion(id, container) {
	url = "http://api.stackexchange.com/2.2/questions/" + id + "?order=desc&sort=activity&site=stackoverflow&filter=withbody&key=Z12ThRgZNVxP1Ob7w9Ogng(("

	$.ajax(url).done(function(data) {
		var question = data["items"][0];
		var text = '';
		
		text += "<div class='question-body'>";
		text += question.body;
		text += "</div>";
		container.append(text);
		answerURL = "http://api.stackexchange.com/2.2/questions/" + id + "/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody&key=Z12ThRgZNVxP1Ob7w9Ogng((";
		getAnswers(container,answerURL);

	}).fail(function(jqXHR, textStatus, errorThrown) {
		console.log(textStatus);
		console.log(errorThrown); 
	});
}

function getAnswers(container,url) {

	$.ajax(url).done(function(data) {
		var answers = data["items"];
		var l = answers.length;
		var text = '';
		if ( l < 1 ) {
			text += "<div class='answer-container'>";
			text += "This question doesn't have any answers yet";
			text += "</div>";
			container.append(text);
		} else {
			for ( var i = 0 ; i < l ; i++ ) {
				container.append(answerHTML(answers[i]));	
			};
		};

	}).fail(function(jqXHR, textStatus, errorThrown) {
		console.log(textStatus);
		console.log(errorThrown); 
	});
}


function answerHTML(answer) {
	var text = '';
	if (answer.is_accepted == true) {
		text += "<div class='answer-container accepted-answer'>";
	} else {
		text += "<div class='answer-container'>";
	};	
	text += answer.body;
	text += "</div>";
	return text;
};








