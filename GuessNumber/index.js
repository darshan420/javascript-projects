const userInput = document.querySelector("#input-number");
const toaster = document.querySelector(".toaster");
const lastGuessedNumber = document.querySelector(".last-guessed");
const guessButton = document.querySelector(".button");
const resetBtn = document.querySelector(".reset-btn");
const form = document.querySelector("form");

let chances = 10;
let guessNumber;
let randomNumber = Math.floor(Math.random() * 100) + 1;

function resetGame() {
  userInput.value = "";
  chances = 10;
  toaster.innerHTML = "";
  lastGuessedNumber.innerHTML = "";
  resetBtn.style.display = "none";
  userInput.disabled = false;
  guessButton.disabled = false;

  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}
function gameOver() {
  userInput.value = "";
  userInput.disabled = true;
  guessButton.disabled = true;
}

function updateToaster(toasterValue, value) {
  toaster.classList.remove("wrong", "right");
  if (toasterValue === "wrong") {
    toaster.classList.add("wrong");
    if (value === 1) {
      toaster.innerHTML = `Wrong, Your Guess is too high, chances left ${chances}`;
    } else {
      toaster.innerHTML = `Wrong, Your Guess is too low, chances left ${chances}`;
    }
  } else {
    toaster.classList.add("right");
    toaster.innerHTML = "Congratulations, Your Guess is right";
  }
}

function updateLastGuessedPara(lastGuess) {
  if (chances === 9) {
    lastGuessedNumber.textContent = "Previous Guess: ";
  }
  lastGuessedNumber.textContent += lastGuess + " ";
}

function checkGuess() {
  if (userInput.value === " ") {
    toaster.innerHTML = "PLzz enter something";
    return;
  }
  guessNumber = Number(userInput.value);

  if (chances === 1) {
    updateLastGuessedPara(guessNumber);
    toaster.textContent = `Game Over!!!! `;
    resetBtn.style.display = "block";
    gameOver();
  } else {
    if (guessNumber === randomNumber) {
      updateLastGuessedPara(guessNumber);
      updateToaster("right");
      resetBtn.style.display = "block";
      gameOver();
    } else if (guessNumber > randomNumber) {
      chances -= 1;
      updateLastGuessedPara(guessNumber);
      updateToaster("wrong", 1);
    } else if (guessNumber < randomNumber) {
      chances -= 1;
      updateLastGuessedPara(guessNumber);
      updateToaster("wrong", 0);
    }
  }
  userInput.value = " ";
}
guessButton.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);
