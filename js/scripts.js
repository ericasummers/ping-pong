var pingpong = function(inputNumber) {
  var numarray = [];
  for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
    if ((currentNumber % 15) === 0) {
      numarray.push("ping-pong");
    } else if ((currentNumber % 5) === 0) {
      numarray.push("pong");
    } else if ((currentNumber % 3) === 0) {
      numarray.push("ping");
    } else {
      numarray.push(currentNumber);
    }
  }
  return numarray;
}




$(document).ready(function() {
  $("button#clicksubmit").click(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#enternumber").val());
    var result = pingpong(inputNumber);


    if (!inputNumber) {
      alert("Please enter a number!");
    } else if (inputNumber === NaN) {
      alert("Please enter a number!");
    } else {
      for (var i in result) {
      $("#result").append("<li>" + result[i] + "</li>");
      }
    }

  });
});
