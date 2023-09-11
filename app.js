let SECRET_NUMBER = 11;
let userInput = prompt("Guess a number");
let validNumber;
let count = 0;

while (validNumber !== SECRET_NUMBER) {
  count++;

  Number(userInput) > 0 || Number(userInput) < 0
    ? (validNumber = Number(userInput))
    : alert(`${userInput} is not a number.`);

  if (validNumber > SECRET_NUMBER) {
    userInput = prompt("Guess Lower.");
  } else if (validNumber < SECRET_NUMBER) {
    userInput = prompt("Guess Higher.");
  } else {
    alert(`Correct!\n Attempts: ${count}`);
  }
}

debugger;