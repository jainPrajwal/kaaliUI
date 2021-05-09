// Close danger alert
document.querySelector("#btn-danger-close").addEventListener("click", () => {
  let alertbox = document.querySelector(".alert-content.alert-danger");

  console.log("lal bhadak");
  alertbox.classList.add("fade-out-top");
  // resetDangerAlert();
  // alertbox.style.display = "none";
});
// Close Success Alert
document.querySelector("#btn-success-close").addEventListener("click", () => {
  console.log("green alert close");
  document
    .querySelector(".alert-content.alert-success")
    .classList.add("fade-out-top");
  // resetSuccessAlert();
});

// Close info alert
document.querySelector("#btn-info-close").addEventListener("click", () => {
  console.log("blue called");
  document
    .querySelector(".alert-content.alert-info")
    .classList.add("fade-out-top");
  // resetInfoALert();
});

// Close warning alert
if (document.querySelector("#btn-warning-close") != null) {
  document.querySelector("#btn-warning-close").addEventListener("click", () => {
    document
      .querySelector(".alert-content.alert-warning")
      .classList.add("fade-out-top");
    // resetWarningAlert();
  });
}

function resetDangerAlert() {
  let alertbox = document.querySelector(".alert-danger");
  alertbox.classList.remove("fade-out-top");
}

function resetSuccessAlert() {
  document.querySelector(".alert-success").classList.remove("fade-out-top");
}

function resetInfoALert() {
  document.querySelector(".alert-info").classList.remove("fade-out-top");
}

function resetWarningAlert() {
  document.querySelector(".alert-warning").classList.remove("fade-out-top");
}
// Copy content for Danger Alert

if (document.querySelector("#clip-alert-danger") != null) {
  document.querySelector("#clip-alert-danger").addEventListener("click", () => {
    console.log("called");
    navigator.clipboard.writeText(
      '<div class="alert-content alert-danger">' +
        "\n\t" +
        " This is a danger alert with dismissal button." +
        "\n" +
        '\t <span class="btn-dismiss" id="btn-danger-close">&times;</span>' +
        "\n"
    );

    let tooltip = document.querySelector("#danger-tooltip");
    console.log(tooltip, "ye apna tooltip");
    tooltip.innerHTML = "Copied";
  });
  document
    .querySelector("#clip-alert-danger")
    .addEventListener("mouseout", () => {
      let tooltip = document.querySelector("#danger-tooltip");
      tooltip.innerHTML = "Copy to Clipboard";
    });
}

// ----------------------------------------------------------------
// Success Alert

// Copy Content of Success Alert
if (document.querySelector("#clip-alert-success") != null) {
  document
    .querySelector("#clip-alert-success")
    .addEventListener("click", () => {
      console.log("called");
      navigator.clipboard.writeText(
        '<div class="alert-content alert-success">' +
          "\n\t" +
          " This is a success alert with dismissal button." +
          "\n" +
          "</div>"
      );

      let tooltip = document.querySelector("#success-tooltip");
      console.log(tooltip, "ye apna tooltip");
      tooltip.innerHTML = "Copied";
    });
  document
    .querySelector("#clip-alert-success")
    .addEventListener("mouseout", () => {
      let tooltip = document.querySelector("#success-tooltip");
      tooltip.innerHTML = "Copy to Clipboard";
    });
}

// ----------------------------------------------------------------
// Info Alert

// Copy Content of info Alert
if (document.querySelector("#clip-alert-info") != null) {
  document.querySelector("#clip-alert-info").addEventListener("click", () => {
    navigator.clipboard.writeText(
      '<div class="alert-content alert-info">' +
        "\n\t" +
        " This is a info alert with dismissal button." +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#info-tooltip");
    console.log(tooltip, "ye apna tooltip");
    tooltip.innerHTML = "Copied";
  });
  document
    .querySelector("#clip-alert-info")
    .addEventListener("mouseout", () => {
      let tooltip = document.querySelector("#info-tooltip");
      tooltip.innerHTML = "Copy to Clipboard";
    });
}

// ----------------------------------------------------------------
// warning Alert

// Copy Content of warning Alert
if (document.querySelector("#clip-alert-warning") != null) {
  document
    .querySelector("#clip-alert-warning")
    .addEventListener("click", () => {
      console.log("called");
      navigator.clipboard.writeText(
        '<div class="alert-content alert-warning">' +
          "\n\t" +
          " This is a warning alert with dismissal button." +
          "\n" +
          "</div>"
      );

      let tooltip = document.querySelector("#warning-tooltip");
      console.log(tooltip, "ye apna tooltip");
      tooltip.innerHTML = "Copied";
    });
  document
    .querySelector("#clip-alert-warning")
    .addEventListener("mouseout", () => {
      let tooltip = document.querySelector("#warning-tooltip");
      tooltip.innerHTML = "Copy to Clipboard";
    });
}
