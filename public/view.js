function View() {
  this.page = $(document);
};

View.prototype.handleSubmit = function() {
  var self = this;
  $('#title-input').keyup(function(e) {
    e.preventDefault();
    var title = $("#title-input").val();
    self.ctrl.search(title);
  });
};

View.prototype.displayMovie = function(movie) {
  var html = "<p>Title: " + movie.title + "</p>";
  html += "<p>Year: " + movie.year + "</p>";
  html += "<img src="+movie.imgSrc+"/>";
  $("#results").html(html);
};

View.prototype.displayNotFound = function() {
  var html = "<p>Movie not found!</p>";
  $("#results").html(html);
};
