let SECRET_NUMBER = randomNumber(1, 100);

let userInput = prompt("Guess a number");
let validNumber;
let count = 0;

while (validNumber !== SECRET_NUMBER) {
  count++;

  Number(userInput) > 0 || Number(userInput) < 0
    ? (validNumber = Number(userInput))
    : alert(`${userInput} is not a number.`);

  if (validNumber > SECRET_NUMBER) {
    userInput = prompt(`${validNumber}? wrong.\nGuess Lower.`);
  } else if (validNumber < SECRET_NUMBER) {
    userInput = prompt(`${validNumber}? wrong.\nGuess Higher.`);
  } else {
    alert(`Correct! ${validNumber}.\n Attempts: ${count}`);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

debugger;
