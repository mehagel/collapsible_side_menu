$(document).ready(function (){
  $("#sesame").click(function(evt) {
    evt.preventDefault();
    $("nav").toggleClass('close');
    $("#sesame").toggleClass('close');
    if ($("#sesame").text() == "Close Sesame") {
      $("#sesame").text("Open Sesame");
    } else {
      $("#sesame").text("Close Sesame");
    }
  });
});