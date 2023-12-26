const overlay = document.getElementById("overlay");
const nameModal = document.getElementById("modal");
let playerName = "";
let outputDisplay_game = document.getElementById("outputDisplay_game");
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let playerScore=0;
let robotScoreDisplay = document.getElementById("robotScoreDisplay");
let robotScore=0;
let sparScoreDisplay = document.getElementById("sparScoreDisplay");
let sparScore=0;
let roundsPlayedDisplay = document.getElementById("roundsPlayedDisplay");
let roundsPlayed=0;

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
    outputDisplay_game.innerHTML = `<span>Robot</span> a joué cailloux commme <em>${playerName}</em>, <strong>égalité</strong> !`;
    sparScore++;
    sparScoreDisplay.innerHTML = `Égalité = ${sparScore}`;
    roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
    case "petal":
      outputDisplay_game.innerHTML = `<span>Robot</span> a joué pétal, <em>${playerName}</em> a <strong>perdu</strong> !`;
      robotScore++; 
      robotScoreDisplay.innerHTML = `Le score de <span>Robot</span> est de <span>${robotScore}</span>`;
      roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
    case "pique":
      outputDisplay_game.innerHTML = `<span>Robot</span> a joué pique à glace, <em>${playerName}</em> a <strong>gagné</strong> !`;
      playerScore++; 
      playerScoreDisplay.innerHTML = `Votre score est de <em>${playerScore}</em>`;
      roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
  }
});

petal.addEventListener("click", () => {
  const robotPossibleOutput = ["cailloux", "petal", "pique"];
  const randomOutput = Math.floor(Math.random() * robotPossibleOutput.length);

  switch (robotPossibleOutput[randomOutput]) {
    case "cailloux":
      outputDisplay_game.innerHTML = `<span>Robot</span> a joué cailloux, <em>${playerName}</em> a <strong>gagné</strong> !`;
      playerScore++; 
      playerScoreDisplay.innerHTML = `Votre score est de <em>${playerScore}</em>`;
      roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
    case "petal":
      outputDisplay_game.innerHTML = `<span>Robot</span> a joué pétal commme <em>${playerName}</em>, <strong>égalité</strong> !`;
      sparScore++;
      sparScoreDisplay.innerHTML = `Égalité = ${sparScore}`;
      roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
    case "pique":
      outputDisplay_game.innerHTML = `<span>Robot</span> a joué pique à glace, <em>${playerName}</em> a <strong>perdu</strong> !`;
      robotScore++; 
      robotScoreDisplay.innerHTML = `Le score de <span>Robot</span> est de <span>${robotScore}</span>`;
      roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
  }
});

pique.addEventListener("click", () => {
  const robotPossibleOutput = ["cailloux", "petal", "pique"];
  const randomOutput = Math.floor(Math.random() * robotPossibleOutput.length);

  switch (robotPossibleOutput[randomOutput]) {
    case "cailloux":
      outputDisplay_game.innerHTML = `<span>Robot</span> a joué cailloux, <em>${playerName}</em> a <strong>perdu</strong> !`;
      robotScore++; 
      robotScoreDisplay.innerHTML = `Le score de <span>Robot</span> est de <span>${robotScore}</span>`;
      roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
    case "petal":
      outputDisplay_game.innerHTML = `<span>Robot</span> a joué pétal, <em>${playerName}</em> a <strong>gagné</strong> !`;
      playerScore++; 
      playerScoreDisplay.innerHTML = `Votre score est de <em>${playerScore}</em>`;
      roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
    case "pique":
      outputDisplay_game.innerHTML = `<span>Robot</span> a joué pique à glace commme <em>${playerName}</em>, <strong>égalité</strong> !`;
      sparScore++;
      sparScoreDisplay.innerHTML = `Égalité = ${sparScore}`;
      roundsPlayed++;
    roundsPlayedDisplay.innerHTML = `Parties jouées = ${roundsPlayed}`;
      break;
  }
});
