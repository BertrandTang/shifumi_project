const overlay = document.getElementById("overlay");
const nameModal = document.getElementById("modal");
let playerName = "";

  function closeModal() {
    overlay.style.display = "none";
    modal.style.display = "none";
  }

  const playerName_form = document.getElementById("playerName_form");

  playerName_form.addEventListener("submit", (event) => {
    event.preventDefault()
    const playerName_input = document.getElementById("playerName");
    playerName = playerName_input.value;
    closeModal();
  });
  

