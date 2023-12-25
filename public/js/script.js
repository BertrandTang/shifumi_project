const overlay = document.getElementById("overlay");
const nameModal = document.getElementById("modal");
let playerName = "";
let outputDisplay_game = document.getElementById("outputDisplay_game");

function closeModal() {
  overlay.style.display = "none";
  modal.style.display = "none";
}

const playerName_form = document.getElementById("playerName_form");

playerName_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerName_input = document.getElementById("playerName");
  playerName = playerName_input.value;
  closeModal();
});

const cailloux = document.getElementById("cailloux");
const petal = document.getElementById("petal");
const pique = document.getElementById("pique");

cailloux.addEventListener("click", () => {
  const robotPossibleOutput = ["cailloux", "petal", "pique"];
  const randomOutput = Math.floor(Math.random() * robotPossibleOutput.length);

  switch (robotPossibleOutput[randomOutput]) {
    case "cailloux":
      console.log(`Robot a joué cailloux commme ${playerName}, égalité !`);
      break;
    case "petal":
      console.log(`Robot a joué pétal, ${playerName} a perdu !`);
      break;
    case "pique":
      console.log(`Robot a joué pique à glace, ${playerName} a gagné !`);
      break;
  }
});

petal.addEventListener("click", () => {
  const robotPossibleOutput = ["cailloux", "petal", "pique"];
  const randomOutput = Math.floor(Math.random() * robotPossibleOutput.length);

  switch (robotPossibleOutput[randomOutput]) {
    case "cailloux":
      console.log(`Robot a joué cailloux, ${playerName} a gagné !`);
      break;
    case "petal":
      console.log(`Robot a joué pétal commme ${playerName}, égalité !`);
      break;
    case "pique":
      console.log(`Robot a joué pique à glace, ${playerName} a perdu !`);
      break;
  }
});

pique.addEventListener("click", () => {
  const robotPossibleOutput = ["cailloux", "petal", "pique"];
  const randomOutput = Math.floor(Math.random() * robotPossibleOutput.length);

  switch (robotPossibleOutput[randomOutput]) {
    case "cailloux":
      console.log(`Robot a joué cailloux, ${playerName} a perdu !`);
      break;
    case "petal":
      console.log(`Robot a joué pétal, ${playerName} a gagné !`);
      break;
    case "pique":
      console.log(`Robot a joué pique à glace comme ${playerName}, égalité !`);
      break;
  }
});
