$(document).ready(function () {
  console.log(
    "Top: " + $("#sleepyDoge").position().top + " Left: " + $("#sleepyDoge").position().left);

  $("#sleepyDoge").draggable({
    drag: function () {
      let dogeLeft = $(this).offset().left;

      if (dogeLeft > 1000) {
        console.log("we above 1000");
        $("#congratsDoge").show();
        $("#winningText").show();
        $("#winningText").text("Much Rest!!");
        $("#startingText").hide();
      } else {
        $("#congratsDoge").hide();
        $("#startingText").text("Such Sleepy :(");
        $("#winningText").hide();
        $("#startingText").show();
        console.log("we NOT above 1000");
      }
    }
  });
});