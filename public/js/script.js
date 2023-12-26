const overlay = document.getElementById("overlay");
const nameModal = document.getElementById("modal");
let playerName = "";
let outputDisplay_game = document.getElementById("outputDisplay_game");
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let playerScore=0;
let robotScoreDisplay = document.getElementById("robotScoreDisplay");
let robotScore=0;

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
    outputDisplay_game.innerText = `Robot a joué cailloux commme ${playerName}, égalité !`;
      break;
    case "petal":
      outputDisplay_game.innerText = `Robot a joué pétal, ${playerName} a perdu !`;
      robotScore++; 
      robotScoreDisplay.innerText = `Le score de Robot est de ${robotScore}`;
      break;
    case "pique":
      outputDisplay_game.innerText = `Robot a joué pique à glace, ${playerName} a gagné !`;
      playerScore++; 
      playerScoreDisplay.innerText = `Votre score est de ${playerScore}`;
      break;
  }
});

petal.addEventListener("click", () => {
  const robotPossibleOutput = ["cailloux", "petal", "pique"];
  const randomOutput = Math.floor(Math.random() * robotPossibleOutput.length);

  switch (robotPossibleOutput[randomOutput]) {
    case "cailloux":
      outputDisplay_game.innerText = `Robot a joué cailloux, ${playerName} a gagné !`;
      playerScore++; 
      playerScoreDisplay.innerText = `Votre score est de ${playerScore}`;
      break;
    case "petal":
      outputDisplay_game.innerText = `Robot a joué pétal commme ${playerName}, égalité !`;
      break;
    case "pique":
      outputDisplay_game.innerText = `Robot a joué pique à glace, ${playerName} a perdu !`;
      robotScore++; 
      robotScoreDisplay.innerText = `Le score de Robot est de ${robotScore}`;
      break;
  }
});

pique.addEventListener("click", () => {
  const robotPossibleOutput = ["cailloux", "petal", "pique"];
  const randomOutput = Math.floor(Math.random() * robotPossibleOutput.length);

  switch (robotPossibleOutput[randomOutput]) {
    case "cailloux":
      outputDisplay_game.innerText = `Robot a joué cailloux, ${playerName} a perdu !`;
      robotScore++; 
      robotScoreDisplay.innerText = `Le score de Robot est de ${robotScore}`;
      break;
    case "petal":
      outputDisplay_game.innerText = `Robot a joué pétal, ${playerName} a gagné !`;
      playerScore++; 
      playerScoreDisplay.innerText = `Votre score est de ${playerScore}`;
      break;
    case "pique":
      outputDisplay_game.innerText = `Robot a joué pique à glace commme ${playerName}, égalité !`;
      break;
  }
});
