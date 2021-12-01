const hPlayerOne = document.querySelector("#playerOne");
const hPlayerTwo = document.querySelector("#playerTwo");
const selectMaxScore = document.querySelector("select");

const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnReset = document.querySelector("#btnReset");

let selectedOption;
let playerOneCounter = null;
let playerTwoCounter = null;

changeButtonsEnability(false);
selectMaxScore.value = 0;

selectMaxScore.addEventListener("input", (e) => {
  selectedOption = document.querySelector("option:checked");
  //it could also be: parseInt(this.value)
  changeButtonsEnability(true);
});

btnOne.addEventListener("click", (e) => {
  incrementCounter(hPlayerOne, e, "one");
});

btnTwo.addEventListener("click", (e) => {
  incrementCounter(hPlayerTwo, e, "two");
});

btnReset.addEventListener("click", () => {
  restart();
});

function incrementCounter(h, e, player) {
  e.stopPropagation();
  let counter = 0;
  if (player === "one") {
    playerOneCounter++;
    counter = playerOneCounter;
  } else {
    playerTwoCounter++;
    counter = playerTwoCounter;
  }

  h.innerText = counter;
  //game over
  if (selectedOption.value == counter) {
    hPlayerOne == h
      ? (hPlayerTwo.style.color = "red")
      : (hPlayerOne.style.color = "red");
    h.style.color = "green";
    changeButtonsEnability(false);
  }
}

function restart() {
  hPlayerOne.innerText = "0";
  hPlayerTwo.innerText = "0";
  playerOneCounter = 0;
  playerTwoCounter = 0;
  selectMaxScore.value = 0;
  hPlayerOne.style.color = "black";
  hPlayerTwo.style.color = "black";
  changeButtonsEnability(false);
}

function changeButtonsEnability(status) {
  btnOne.disabled = !status;
  btnTwo.disabled = !status;
}
