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
  if (!location) {
    document.querySelector(".formData p").setAttribute("data-error", "Vous devez choisir une option.");
    document.querySelector(".formData p").setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    document.querySelector(".formData p").setAttribute("data-error-visible", "false");
  }

  // Terms validation
  if (!terms.checked) {
    terms.parentNode.setAttribute("data-error", "Vous devez accepter les conditions d'utilisation.");
    terms.parentNode.setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    terms.parentNode.setAttribute("data-error-visible", "false");
  }

  // Submit if valid
  if (isValid) {
    alert("Merci ! Votre réservation a été reçue.");
    form.submit();
  }
}