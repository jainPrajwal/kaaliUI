let alertbox = document.querySelector(".alert-container");

let closeButton = document.querySelector("#btn-primary-close");

closeButton.addEventListener("click", () => {
  console.log("ha bhai");
  alertbox.style.display = "none";
});
