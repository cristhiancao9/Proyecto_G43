function logSubmit(event) {
  log.textContent = `hola `;
  event.preventDefault();
}
var a = document.querySelectorAll("a");
const form = document.getElementById("form");
const log = document.getElementById("sp1");
form.addEventListener("submit", logSubmit);

a[0].addEventListener("click", function (event) {
  event.preventDefault(); // prevent default action l.e redirecting
});
