$(document).ready(function () {
  console.log(
    "Top: " + $("#sleepyDoge").position().top + " Left: " + $("#sleepyDoge").position().left);

  $("#sleepyDoge").draggable({
    drag: function () {
      let dogeLeft = $(this).offset().left;

      if (dogeLeft > 750) {
        console.log("we above 1000");
        $("#congratsDoge").show();
        $("#winningText").show();
        $("#winningText").text("Much Rest!!");
        $("img").attr("src", "https://i.pinimg.com/originals/2d/1e/78/2d1e786cfc7a9bd90ee4f65fa374add7.jpg");
        $("#startingText").hide();
      } 
      else {
        $("#congratsDoge").hide();
        $("#startingText").text("Such Sleepy :(");
        $("#winningText").hide();
        $("#sleepyDoge").attr("src", "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/12/19/1387462292398/c447b512-ea0b-423e-b5f4-7f66b0db44bb-620x372.jpeg?width=445&dpr=1&s=none");
        $("#startingText").show();
        console.log("we NOT above 1000");
      }
    }
  });
  
    $( "#sleepyDoge" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $('#resetButton').click(function() {
      // Reload the page
      location.reload();
    });
  
});