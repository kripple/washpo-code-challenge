$(document).ready(function() {
  var view = new View(document);
  var ctrl = new Controller(view);
  view.ctrl = ctrl;
  view.handleSubmit();
});








