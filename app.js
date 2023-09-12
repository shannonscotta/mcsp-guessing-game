let userData = {};

function playGame() {
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
    } else if (validNumber < SECRET_NUMBER) {
      userGuess = prompt(`Sorry ${userName}, Guess Higher.`);
    } else {
      if (userData.hasOwnProperty(userName)) {
        if (userData[userName] > guessArr.length) {
          alert(`Correct!\n ${userName}, you beat your previous score!`);
        }
      } else {
        alert(`Correct! \nYour previous guesses were ${guessArr}!`);
        userData[userName] = guessArr.length;
      }

      playAgain = confirm(`Click "OK" to play again!`);
      if (playAgain) {
        return playGame();
      }
    }
  }
}

playGame();

function randomNumber(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

debugger;
