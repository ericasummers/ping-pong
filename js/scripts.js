var numarray = [];

var pingpong = function(inputNumber) {
  for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
    if ((currentNumber % 3) === 0) {
      numarray.push("ping");
    } else if ((currentNumber % 5) === 0) {
      numarray.push("pong");
    } else if ((currentNumber % 15) === 0) {
      numarray.push("ping-pong");
    } else {
      numarray.push(currentNumber);
    }
  }
  return numarray;
}
var displaynumber = function() {
  for (var i = 0; i < numarray.length; i++) {
    return "<li>" + numarray[i] + "</li>";
  }
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

    $("#result").append(result);

  });
});
