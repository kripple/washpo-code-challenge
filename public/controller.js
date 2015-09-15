function Controller(view) {
  this.view = view;
};

Controller.prototype.search = function(title) {
  var url = "http://www.omdbapi.com/?t=" + title
  $.ajax(url)
  .done(function(response) {
      if(response.Response === "False") {
        this.view.displayNotFound();
      } else {
        var movie = new Movie(response);
        this.view.displayMovie(movie);
      };
    }.bind(this));
};
