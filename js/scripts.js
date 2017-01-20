var pingpong = function(inputNumber) {
  for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
  	alert(currentNumber);
  }
}



$(document).ready(function() {
  $("button#clicksubmit").click(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#enternumber").val());
    var result = pingpong(inputNumber);
    $("#result").text("currentNumber");

    if (!inputNumber) {
      alert("Please enter a number!");
    }
  })
})
