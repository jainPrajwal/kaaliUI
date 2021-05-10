if (document.querySelector(".btn-primary") != null) {
  document.querySelector(".btn-primary").addEventListener("click", () => {
    console.log("helo");
    document.querySelector(".toast-primary").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector(".toast-primary").classList.add("fade-out-bottom");
    }, 1000);
    resetPrimary();
  });
}

function resetPrimary() {
  document.querySelector(".toast-primary").classList.remove("fade-out-bottom");
}

if (document.querySelector(".btn-success") != null) {
  document.querySelector(".btn-success").addEventListener("click", () => {
    console.log("helo");
    document.querySelector(".toast-success").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector(".toast-success").classList.add("fade-out-bottom");
    }, 1000);
    resetSuccess();
  });
}

function resetSuccess() {
  document.querySelector(".toast-success").classList.remove("fade-out-bottom");
}
if (document.querySelector(".btn-danger") != null) {
  document.querySelector(".btn-danger").addEventListener("click", () => {
    console.log("danger");
    document.querySelector(".toast-failure").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector(".toast-failure").classList.add("fade-out-bottom");
    }, 1000);
    resetFailure();
  });
}

function resetFailure() {
  document.querySelector(".toast-failure").classList.remove("fade-out-bottom");
}
