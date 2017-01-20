var inputNumber = parseInt(prompt("Please enter a whole number"));

for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
	alert(currentNumber);
}

$(document).ready(function() {
  $("form#pingpongnumber").click(function(event) {
    event.preventDefault();
  })
})
