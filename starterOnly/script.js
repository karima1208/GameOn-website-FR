const form = document.querySelector("#formulaire")
form.addEventListener("submit", validate)

function validate(event) {
  event.preventDefault();
  // Variables
  const prenom = document.querySelector("#first"); 
  const nom = document.querySelector("#last");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector("#birthdate");
  const quantity = document.querySelector("#quantity");
  const location = document.querySelector('input[name="location"]:checked');
  const terms = document.querySelector("#checkbox1");

  // Afficher les valeurs des champs dans la console
  console.log("Prénom:", prenom.value);
  console.log("Nom:", nom.value);
  console.log("Email:", email.value);
  console.log("Date de naissance:", birthdate.value);
  console.log("Quantité:", quantity.value);
  console.log("Location:", location ? location.value : "Aucune sélectionnée");
  console.log("Terms:", terms.checked);

  // Validation
  let isValid = true;

  // Prénom validation
  if (prenom.value.trim().length < 2) {
    prenom.parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    prenom.parentNode.setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    prenom.parentNode.setAttribute("data-error-visible", "false");
  }

  // Nom validation
  if (nom.value.trim().length < 2) {
    nom.parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    nom.parentNode.setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    nom.parentNode.setAttribute("data-error-visible", "false");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.parentNode.setAttribute("data-error", "Veuillez entrer une adresse email valide.");
    email.parentNode.setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    email.parentNode.setAttribute("data-error-visible", "false");
  }

  // Date de naissance validation
  if (!birthdate.value) {
    birthdate.parentNode.setAttribute("data-error", "Vous devez entrer une date de naissance valide.");
    birthdate.parentNode.setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    birthdate.parentNode.setAttribute("data-error-visible", "false");
  }

  // Quantité validation
  if (quantity.value === "" || quantity.value < 0 || quantity.value > 99) {
    quantity.parentNode.setAttribute("data-error", "Veuillez entrer une quantité entre 0 et 99.");
    quantity.parentNode.setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    quantity.parentNode.setAttribute("data-error-visible", "false");
  }

  // Location validation
  console.log(location)
  if (location == null) {
    document.querySelector(".errorlocation").setAttribute("data-error", "Vous devez choisir une option.");
    document.querySelector(".errorlocation").setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    document.querySelector(".errorlocation").setAttribute("data-error-visible", "false");
  }

  // Terms validation
  if (!terms.checked) {
    terms.parentNode.setAttribute("data-error", "Vous devez accepter les conditions d'utilisation.");
    terms.parentNode.setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    terms.parentNode.setAttribute("data-error-visible", "false");
  }

 // Si le formulaire est valide, affiche le message de confirmation
 if (isValid) {
  const modalBody = document.querySelector(".modal-body");

  // Vide le contenu existant de la modale
  modalBody.innerHTML = "";

  // Crée un élément pour le message de confirmation
  const confirmationMessage = document.createElement("h2");
  confirmationMessage.innerHTML = "Merci ! Votre réservation a été reçue.";
  confirmationMessage.style.textAlign = "center";
  confirmationMessage.style.marginTop = "280px"; // Ajoute une marge en haut

  // Crée un bouton "Fermer"
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "Fermer";
  closeButton.style.marginTop = "20px";
  closeButton.style.padding = "10px 20px";
  closeButton.style.backgroundColor = "#fe142f"; // couleur du bouton
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.cursor = "pointer";
  closeButton.style.borderRadius = "5px";

  // Fonction pour fermer la modale au clic sur le bouton "Fermer"
  closeButton.addEventListener("click", function(){window.location.reload()});


     // Ajuste la taille du message pour qu'il prenne tout l'espace
     modalBody.style.display = "flex";
     modalBody.style.flexDirection = "column";
     modalBody.style.justifyContent = "center";
     modalBody.style.alignItems = "center";
     modalBody.style.height = "700px";
     modalBody.style.width = "100%";
 
     // Ajoute le message de confirmation et le bouton à la modale
     modalBody.appendChild(confirmationMessage);
     modalBody.appendChild(closeButton);
   }
   
}