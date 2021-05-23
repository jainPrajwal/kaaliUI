// Copy Script Link
content = document.querySelector("#script-link");
if (content != null) {
  console.log(content);
  content.addEventListener("click", () => {
    console.log("called");
    navigator.clipboard.writeText(
      '<script src="https://kaaliui.netlify.app/kaali.js"></>'
    );

    var tooltip = document.querySelector("#scripttooltip");
    console.log(tooltip, "ye script tooltip");
    tooltip.innerHTML = "Copied";
  });
  content.addEventListener("mouseout", () => {
    var tooltip = document.querySelector("#scripttooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}
// ---------------------------------------------------------------------------------------------

// Copy css link
content = document.querySelector("#css-link");
if (content != null) {
  console.log(content);
  content.addEventListener("click", () => {
    console.log("called");
    navigator.clipboard.writeText(
      '<link rel="stylesheet" href="https://kaaliui.netlify.app/kaali.css">'
    );
    let tooltip = document.querySelector("#mytooltip");
    console.log(tooltip, "ye css tooltip");
    tooltip.innerHTML = "Copied";
  });

  content.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#mytooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}
// ---------------------------------------------------------------------------------------------

// Making navbar responsive STEP 1
if (
  document.querySelector(".fas.fa-bars") != null &&
  document.querySelector(".fas.fa-bars").style.display != "none"
) {
  console.log("bars visible");
  document.querySelector(".fa-bars").addEventListener("click", () => {
    console.log("clicked yahs");
    document.querySelector(".navbar-ul").style.display = "flex";
    document.querySelector(".fas.fa-bars").style.display = "none";
    document.querySelector(".close-menu").style.display = "block";
  });
}

if (
  document.querySelector(".close-menu") != null &&
  document.querySelector(".close-menu").style.display != "none"
) {
  document.querySelector(".close-menu").addEventListener("click", () => {
    console.log("close button dikh raha hai");
    document.querySelector(".navbar-ul").style.display = "none";
    document.querySelector(".fas.fa-bars").style.display = "block";
    document.querySelector(".close-menu").style.display = "none";
  });
}

// ---------------------------------------------------------------------------------------------

// Common Procedure to load components on mobile
function displayProcedure() {
  document.querySelector(".navbar-ul").style.display = "none";
  document.querySelector(".close-menu").style.display = "none";
  document.querySelector(".fas.fa-bars").style.display = "block";
}
// ---------------------------------------------------------------------------------------------
// Making navbar responsive STEP 2
$(window).resize((e) => {
  if (parseInt(window.innerWidth) <= 768) {
    document.querySelector(".navbar-ul").style.display = "none";
    document.querySelector(".close-menu").style.display = "none";
    document.querySelector(".fa-bars").style.display = "block";
  } else {
    document.querySelector(".navbar-ul").style.display = "flex";
    document.querySelector(".fa-bars").style.display = "none";
    document.querySelector(".close-menu").style.display = "none";
  }
  console.log("gadbad yaha hai", window.innerWidth);

  document.querySelector(".fa-bars").addEventListener("click", () => {
    console.log(
      "clicked yahs",
      document.querySelector(".navbar-ul").style.display.value
    );

    if (document.querySelector(".navbar-ul").style.display === "none") {
      document.querySelector(".navbar-ul").style.display = "block";
      document.querySelector(".navbar-ul").classList.add("slide-in-top");

      // Hide hamburger
      document.querySelector(".fa-bars").style.display = "none";

      // Show Close Button
      document.querySelector(".close-menu").style.display = "block";
    }
  });

  document.querySelector(".close-menu").addEventListener("click", () => {
    if (document.querySelector(".close-menu").style.display == "none") {
      // document.querySelector(".close-menu").style.display = "block";
    } else {
      document.querySelector(".navbar-ul").classList.add("slide-out-top");
      document.querySelector(".close-menu").style.display = "none";
      document.querySelector(".fa-bars").style.display = "block";

      document.querySelector(".navbar-ul").style.display = "none";
    }
  });

  $(window).load(function () {
    $(function () {
      $("#component-alert").click(function () {
        document.querySelector(".navbar-ul").style.display = "none";
        document.querySelector(".close-menu").style.display = "none";
        document.querySelector(".fa-bars").style.display = "block";
        $("#main").load("./components/alert/alert.html");
      });
    });
  });
});

//_______________________________________________________________________________________________________________

// Alert.js
// Close danger alert
if (document.querySelector("#btn-danger-close") != null) {
  document.querySelector("#btn-danger-close").addEventListener("click", () => {
    let alertbox = document.querySelector(".alert-content.alert-danger");

    console.log("lal bhadak");
    alertbox.classList.add("fade-out-top");
    setTimeout(() => {
      if (alertbox.classList.contains("fade-out-top")) {
        document.querySelector(".alert-content.alert-danger").style.display =
          "none";
      }
    }, 1000);

    // resetDangerAlert();
    // alertbox.style.display = "none";
  });
}

// Close Success Alert
if (document.querySelector("#btn-success-close") != null) {
  document.querySelector("#btn-success-close").addEventListener("click", () => {
    console.log("green alert close");
    document
      .querySelector(".alert-content.alert-success")
      .classList.add("fade-out-top");
    setTimeout(() => {
      if (
        document
          .querySelector(".alert-content.alert-success")
          .classList.contains("fade-out-top")
      ) {
        document.querySelector(".alert-content.alert-success").style.display =
          "none";
      }
    }, 1000);

    // resetSuccessAlert();
  });
}

// Close info alert
if (document.querySelector("#btn-info-close") != null) {
  document.querySelector("#btn-info-close").addEventListener("click", () => {
    console.log("blue called");
    document
      .querySelector(".alert-content.alert-info")
      .classList.add("fade-out-top");
    setTimeout(() => {
      if (
        document
          .querySelector(".alert-content.alert-info")
          .classList.contains("fade-out-top")
      ) {
        document.querySelector(".alert-content.alert-info").style.display =
          "none";
      }
    }, 1000);

    // resetInfoALert();
  });
}

// Close warning alert
if (document.querySelector("#btn-warning-close") != null) {
  document.querySelector("#btn-warning-close").addEventListener("click", () => {
    document
      .querySelector(".alert-content.alert-warning")
      .classList.add("fade-out-top");
    setTimeout(() => {
      if (
        document
          .querySelector(".alert-content.alert-warning")
          .classList.contains("fade-out-top")
      ) {
        document.querySelector(".alert-content.alert-warning").style.display =
          "none";
      }
    }, 1000);

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

//_______________________________________________________________________________________________________________

// Avatar.js
content = document.querySelector("#clip-avatar-letter");
if (content != null) {
  console.log(content);
  content.addEventListener("click", () => {
    console.log("called");
    navigator.clipboard.writeText(
      '<div class="avatar-container">' +
        "\n" +
        '\t<div class="image-container">' +
        "\n" +
        '\t\t<div class="avatar-letter avatar-sm" id="shade-green">' +
        "\n" +
        "\t\t\tRR" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        "\t</div>" +
        "\n" +
        '\t<div class="image-container">' +
        "\n" +
        '\t\t<div class="avatar-letter avatar-sm" id="shade-pink">' +
        "\n" +
        "\t\t\tPJ" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        '\t\t<span class="status status-available "> </span>' +
        "\n" +
        "\t</div>" +
        '\t<div class="image-container">' +
        "\n" +
        '\t\t<div class="avatar-letter avatar-sm" id="shade-blue">' +
        "\n" +
        "\t\t\tDR" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        '\t\t<span class="status status-do-not-disturb "> </span>' +
        "\n" +
        "\t</div>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#avatar-letter-tooltip");
    console.log(tooltip, "ye apna tooltip");
    tooltip.innerHTML = "Copied";
  });
  content.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#avatar-letter-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}

// For image avatar with status
content = document.querySelector("#clip-avatar-image-status");
if (content != null) {
  console.log(content);
  content.addEventListener("click", () => {
    console.log("called");
    navigator.clipboard.writeText(
      '<div class="avatar-container">' +
        "\n" +
        '\t<div class="image-container">' +
        "\n" +
        '\t\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-sm"/>' +
        "\n" +
        '\t\t<span class="status status-available"> </span>' +
        "\n" +
        "\t</div>" +
        "\n" +
        '\t<div class="image-container">' +
        "\n" +
        '\t\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-sm"/>' +
        "\n" +
        '\t\t<span class="status status-do-not-disturb"> </span>' +
        "\n" +
        "\t</div>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#avatar-image-status-tooltip");
    console.log(tooltip, "ye apna tooltip");
    tooltip.innerHTML = "Copied";
  });
  content.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#avatar-image-status-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}

// For regular avatars
content = document.querySelector("#clip-avatar-regular");
if (content != null) {
  console.log(content);
  content.addEventListener("click", () => {
    console.log("called");
    navigator.clipboard.writeText(
      '<div class="avatar-container">' +
        "\n" +
        '\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-sm"/>' +
        "\n" +
        '\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-md"/>' +
        "\n" +
        '\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-lg"/>' +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#avatar-image-regular-tooltip");
    console.log(tooltip, "ye apna tooltip");
    tooltip.innerHTML = "Copied";
  });
  content.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#avatar-image-regular-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}
//_______________________________________________________________________________________________________________

// toast.js

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

// _______________________________________________________________________________________________________________

// Modal.js
modalIsOpen = false;
if (document.querySelector(".btn.btn-like") != null) {
  document.querySelector(".btn.btn-like").addEventListener("click", () => {
    console.log("like clicked");
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal").classList.add("fade-in");
    modalIsOpen = true;

    if (modalIsOpen == true) {
      window.onclick = function (e) {
        console.log("window clicked");
        let alertbox = document.querySelector(".modal");
        console.log("alertox", alertbox);
        console.log(e.target, "ye target hai");
        // if (
        //   e.target !== alertbox &&
        //   e.target !== document.querySelector(".image.image-heart")
        // ) {
        //   console.log("alertox", alertbox);
        //   alertbox.style.display = "none";
        // }
        if (e.target == document.querySelector(".outer-modal-container")) {
          alertbox.style.display = "none";
          document.querySelector(
            ".outer-modal-container"
          ).style.backgroundColor = "#2F3136";
        }
      };
    }

    document.querySelector(".outer-modal-container").style.backgroundColor =
      "#f5f5f538";
  });
}
// console.log(modalIsOpen, "kya modla open hai");

function removeFadeInFromModal() {
  document.querySelector(".modal").classList.remove("fade-in");
}

function removeFadeOutFromModal() {
  document.querySelector(".modal").classList.remove("fade-out-top");
}
// Close Modal
if (document.querySelector("#btn-modal-close") != null) {
  document.querySelector("#btn-modal-close").addEventListener("click", () => {
    removeFadeInFromModal();
    document.querySelector(".outer-modal-container").style.backgroundColor =
      "#2F3136";
    let alertbox = document.querySelector(".modal");
    if (alertbox != null) {
      console.log("modal close clicked", alertbox);

      document.querySelector(".modal").classList.add("fade-out-top");
      setTimeout(() => {
        if (alertbox.classList.contains("fade-out-top")) {
          document.querySelector(".modal").style.display = "none";
        }
      }, 1500);
      // document.querySelector(".modal").style.display = "none";
    }
  });

  document
    .querySelector("#collection-btn-done")
    .addEventListener("click", () => {
      removeFadeOutFromModal();
      removeFadeInFromModal();
      let alertbox = document.querySelector(".modal");
      if (alertbox != null) {
        console.log("modal close clicked", alertbox);

        document.querySelector(".modal").classList.add("fade-out-top");
        setTimeout(() => {
          if (alertbox.classList.contains("fade-out-top")) {
            document.querySelector(".modal").style.display = "none";
          }
        }, 1500);
      }
      document.querySelector(".outer-modal-container").style.backgroundColor =
        "#2F3136";
    });
}

// _________________________________________________________________________________________________________________________

// Typography
