let SECRET_NUMBER = randomNumber(1, 5);

let playAgain = false;
let userName = prompt("What is your name?");
let userGuess = prompt(`Hello ${userName}, guess a number.`);
let validNumber;
let guessArr = [];

while (validNumber !== SECRET_NUMBER) {
  guessArr.push(userGuess);

  Number(userGuess) > 0 || Number(userGuess) < 0
    ? (validNumber = Number(userGuess))
    : (userGuess = prompt(`${userGuess} is not a number, enter a NUMBER.`));

  if (validNumber > SECRET_NUMBER) {
    userGuess = prompt(`Sorry ${userName}, Guess Lower.`);
  }

  if (validNumber < SECRET_NUMBER) {
    userGuess = prompt(`Sorry ${userName}, Guess Higher.`);
  }

  if (validNumber === SECRET_NUMBER) {
    alert(`Correct! \nYour previous guesses were ${guessArr}!`);
    playAgain = confirm(`Click "OK" to play again!`);
  }
}

if (playAgain){
  location.reload()
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

debugger;
