var pingpong = function(inputNumber) {
var numarray = [];
  for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
  	numarray.push(currentNumber);
  }
  return numarray;
}



$(document).ready(function() {
  $("button#clicksubmit").click(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#enternumber").val());
    var result = pingpong(inputNumber);

    var threepattern = /multiplethree/ig;
    var fivepattern = /multiplefive/ig;
    var fifteenpattern = /multiplefifteen/ig;


    if (!inputNumber) {
    alert("Please enter a number!");
    } else if (inputNumber === NaN) {
    alert("Please enter a number!");
    }

    $("#result").append("<li>" + result + "</li>");

  });
});
