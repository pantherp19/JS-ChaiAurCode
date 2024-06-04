const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let random = parseInt(Math.random() * 100 + 1);
let btn = document.createElement("button");
let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter valid number");
  } else if (guess < 1) {
    alert("Please enter a number higher than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    preGuess.push(guess);
    if (numGuess == 10) {
      displayMessage(`Game Over. Correct number was ${random}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess < random) {
    displayMessage(`Guess number is very low`);
  } else if (guess > random) {
    displayMessage(`Guess number is very high`);
  } else if (guess === random) {
    displayMessage(`Congrats!!! You guessed a correct number.`);
    endGame();
  }
}

function displayMessage(message) {
  userInput.value = "";
  guessSlot.innerHTML = preGuess;
  lowHigh.innerHTML = `${message}`;
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function endGame() {
  userInput.disabled = true;
  btn.classList.add("subtn");
  btn.innerHTML = "Start A New Game";
  startOver.appendChild(btn);
  playGame = false;
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    newGame();
  });
}

function newGame() {
  userInput.disabled = false;
  random = parseInt(Math.random() * 100 + 1);
  preGuess = [];
  numGuess = 1;
  userInput.value = "";
  guessSlot.innerHTML = preGuess;
  lowHigh.innerHTML = ``;
  startOver.remove(btn);
  remaining.innerHTML = `10`;
  playGame = true;
}
