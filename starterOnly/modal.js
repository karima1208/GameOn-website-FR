// Fonction pour le menu responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Sélectionne l'élément de fond de la modal
const modalBtn = document.querySelectorAll(".modal-btn"); // Sélectionne tous les boutons pour ouvrir la modal
const closeBtn = document.querySelector(".close"); // Sélectionne le bouton de fermeture de la modal

// Événement pour ouvrir la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour ouvrir la modal
function launchModal() {
  modalbg.style.display = "block"; // Affiche la modal en changeant le display à block
}

// Événement pour fermer la modal en cliquant sur le bouton de fermeture
closeBtn.addEventListener("click", closeModal);

// Fonction pour fermer la modal
function closeModal() {
  modalbg.style.display = "none"; // Masque la modal en changeant le display à none
}
