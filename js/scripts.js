var pingPong = function(inputNumber) {
  var numArray = [];
  for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
    if ((currentNumber % 15) === 0) {
      numArray.push("ping-pong");
    } else if ((currentNumber % 5) === 0) {
      numArray.push("pong");
    } else if ((currentNumber % 3) === 0) {
      numArray.push("ping");
    } else {
      numArray.push(currentNumber);
    }
  }
  return numArray;
}


$(document).ready(function() {
  $("button#clicksubmit").click(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#enternumber").val());
    var result = pingPong(inputNumber);

    for (var i in result) {
    $("#result").append("<li>" + result[i] + "</li>");
    }

    if (!inputNumber) {
      alert("Please enter a number!");
    } else if (inputNumber === NaN) {
      alert("Please enter a number!");
    }

  });
});
