var secretNumber = 7;

var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

if(guess === secretNumber) {
  alert("You got it right!");
}

else if(guess < secretNumber) {
  alert("too low! try again!");
}

else  {
  alert("too high! try again");
}
