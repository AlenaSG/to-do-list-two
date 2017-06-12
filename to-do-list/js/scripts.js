//business logic
function Task(first) {
  this.firstTask = first;
}

// user interface logic
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedFirstTask = $("input#firstTask").val();

    var newTask = new Task(inputtedFirstTask);

    $("ul#taskList").append("<li><span class='task'>" + newTask.firstTask + "</span></li>");

    $("input#firstTask").val("");
    $("ul#taskList").show();
    $("ul#taskList").children("li").click(function() { //Remove task on click
      $(this).remove();
    });
  });
});
