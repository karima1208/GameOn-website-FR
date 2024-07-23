
function editNav() {     // Fonction pour le menu responsive
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); 
const modalBtn = document.querySelectorAll(".modal-btn"); 
const closeBtn = document.querySelector(".close"); 

// Événement & Fonction pour ouvrir la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block"; // Affiche la modal en changeant le display à block
}

// Événement & Fonction pour fermer la modal en cliquant sur le bouton de fermeture
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none"; // Masque la modal en changeant le display à none
}
