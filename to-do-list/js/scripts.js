//business logic
function Task(first) {
  this.firstTask = first;
  this.time = new Date().getSeconds();
}

// user interface logic
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedFirstTask = $("input#firstTask").val();

    var newTask = new Task(inputtedFirstTask);

    $("ul#taskList").append("<li id=\""+ newTask.time +"\" class='task'>" + newTask.firstTask + "</li>");

    $("input#firstTask").val("");
    $("ul#taskList").show();
    //$("ul#taskList").children("li").click(function() { //Remove task on click
      //$(this).remove();
    //});
    $("ul#taskList li#"+ newTask.time + "").click(function(){
      $(this).toggleClass("done");
    })
  });
});
