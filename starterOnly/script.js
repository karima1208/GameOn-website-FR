const form = document.querySelector("#formulaire")
form.addEventListener("submit", validate)

function validate(event) {
  event.preventDefault();
  const prenom = document.querySelector("#first")
  console.log(prenom.value)
}