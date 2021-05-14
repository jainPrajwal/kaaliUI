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

/*if (parseInt(window.innerWidth) <= 768) {
  document.querySelector(".navbar-ul").style.display = "none";
  document.querySelector(".close-menu").style.display = "none";
  document.querySelector(".fa-bars").style.display = "block";
} else {
  document.querySelector(".navbar-ul").style.display = "flex";
  document.querySelector(".fa-bars").style.display = "none";
  document.querySelector(".close-menu").style.display = "none";
}
document.querySelector(".fa-bars").addEventListener("click", () => {
  console.log("clicked yahs");
  if (document.querySelector(".navbar-ul").style.display === "none") {
    document.querySelector(".navbar-ul").style.display = "block";
    document.querySelector(".navbar-ul").classList.add("slide-in-top");

    // Hide hamburger
    document.querySelector(".fa-bars").style.display = "none";

    // Show Close Button
    document.querySelector(".close-menu").style.display = "block";
  } else {
    document.querySelector(".close-menu").style.display = "none";
  }
});

document.querySelector(".close-menu").addEventListener("click", () => {
  if (document.querySelector(".close-menu").style.display == "none") {
    document.querySelector(".close-menu").style.display = "block";
  } else {
    document.querySelector(".navbar-ul").style.display = "none";

    // Hide Close Menu
    document.querySelector(".close-menu").style.display = "none";

    // Show Bars
    document.querySelector(".fa-bars").style.display = "block";
  }
});
*/
// ---------------------------------------------------------------------------------------------

//load alert.html for mobile
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

// load alert.html for desktop
$(window).load(function () {
  $(function () {
    $("#alertlink").click(function () {
      $("#main").load("./components/alert/alert.html");
    });
  });
});
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
// ---------------------------------------------------------------------------------------------

// Avatar

//load avatar.html for mobile
$(window).load(function () {
  $(function () {
    $("#component-avatar").click(function () {
      displayProcedure();
      $("#main").load("./components/avatar/avatar.html");
    });
  });
});
//load alert.html for desktop
$(window).load(function () {
  $(function () {
    $("#avatarlink").click(function () {
      $("#main").load("./components/avatar/avatar.html");
    });
  });
});

// ---------------------------------------------------------------------------------------------

// Card
$(window).load(function () {
  $(function () {
    $("#component-card").click(function () {
      displayProcedure();
      $("#main").load("./components/card/card.html");
    });
  });
});
$(window).load(function () {
  $(function () {
    $("#cardlink").click(function () {
      $("#main").load("./components/card/card.html");
    });
  });
});

// ---------------------------------------------------------------------------------------------

// tooltip
$(window).load(function () {
  $(function () {
    $("#component-tooltip").click(function () {
      displayProcedure();
      $("#main").load("./components/tooltip/tooltip.html");
    });
  });
});

$(window).load(function () {
  $(function () {
    $("#tooltiplink").click(function () {
      $("#main").load("./components/tooltip/tooltip.html");
    });
  });
});

// ---------------------------------------------------------------------------------------------

// button
$(window).load(function () {
  $(function () {
    $("#component-button").click(function () {
      displayProcedure();
      $("#main").load("./components/button/button.html");
    });
  });
});

$(window).load(function () {
  $(function () {
    $("#buttonlink").click(function () {
      $("#main").load("./components/button/button.html");
    });
  });
});

// ---------------------------------------------------------------------------------------------

// toast
$(window).load(function () {
  $(function () {
    $("#component-toast").click(function () {
      displayProcedure();
      $("#main").load("./components/toast/toast.html");
    });
  });
});

$(window).load(function () {
  $(function () {
    $("#toastlink").click(function () {
      $("#main").load("./components/toast/toast.html");
    });
  });
});

// ---------------------------------------------------------------------------------------------

// Badge
$(window).load(function () {
  $(function () {
    $("#component-badge").click(function () {
      displayProcedure();
      $("#main").load("./components/badge/badge.html");
    });
  });
});

$(window).load(function () {
  $(function () {
    $("#badgelink").click(function () {
      $("#main").load("./components/badge/badge.html");
    });
  });
});
// ---------------------------------------------------------------------------------------------

// Modal
$(window).load(function () {
  $(function () {
    $("#component-modal").click(function () {
      displayProcedure();
      $("#main").load("./components/modal/modal.html");
    });
  });
});

$(window).load(function () {
  $(function () {
    $("#modallink").click(function () {
      $("#main").load("./components/modal/modal.html");
    });
  });
});
// ---------------------------------------------------------------------------------------------
// typography
$(window).load(function () {
  $(function () {
    $("#component-typo").click(function () {
      displayProcedure();
      $("#main").load("./components/typography/typography.html");
    });
  });
});

$(window).load(function () {
  $(function () {
    $("#typolink").click(function () {
      $("#main").load("./components/typography/typography.html");
    });
  });
});
// ---------------------------------------------------------------------------------------------
// inputs
$(window).load(function () {
  $(function () {
    $("#component-input").click(function () {
      displayProcedure();
      $("#main").load("./components/input/input.html");
    });
  });
});

$(window).load(function () {
  $(function () {
    $("#inputlink").click(function () {
      $("#main").load("./components/input/input.html");
    });
  });
});

// ---------------------------------------------------------------------------------------------
// This is for navbar's component links
$(window).load(function () {
  $(function () {
    $("#componentslink").click(function () {
      console.log("clickedddddd");
      $("#main").load("./components/alert/alert.html");
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

content = document.querySelector("#clip-toast");
if (content != null) {
  console.log(content);
  content.addEventListener("click", () => {
    console.log("called");
    navigator.clipboard.writeText(
      '<div class="toast toast-center toast-primary">' +
        "\n" +
        '\t<p class="toast-content">' +
        "\n" +
        '\t\t<i class="fas fa-info-circle">information </i>' +
        "\n" +
        "\t</p>" +
        "\n" +
        "</div>" +
        "\n" +
        '<div class="toast toast-center toast-primary">' +
        "\n" +
        '\t<p class="toast-content">' +
        "\n" +
        '\t\t<i class="fas fa-info-circle">success </i>' +
        "\n" +
        "\t</p>" +
        "\n" +
        "</div>" +
        '<div class="toast toast-center toast-danger">' +
        "\n" +
        '\t<p class="toast-content">' +
        "\n" +
        '\t\t<i class="fas fa-info-circle">error! </i>' +
        "\n" +
        "\t</p>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#toast-tooltip");
    console.log(tooltip, "ye toast tooltip");
    tooltip.innerHTML = "Copied";
  });
  content.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#toast-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
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
let modalclip = document.querySelector("#clip-modal");
if (modalclip != null) {
  modalclip.addEventListener("click", () => {
    console.log("modal clip called");
    navigator.clipboard.writeText(
      '<div class="modal">' +
        "\n" +
        '\t<div class="modal-container">' +
        "\n" +
        '\t<div class="modal-header">' +
        "\n" +
        '\t\t<div class="header header-tertiary" style="margin-bottom: 0">Save item to' +
        "\n" +
        "\t\t</div>" +
        "\n" +
        '\t\t<span id="btn-modal-close">×</span>' +
        "\n" +
        "\t</div>" +
        "\n" +
        '\t<hr class="modal-hr"/>' +
        "\n" +
        '\t<div class="modal-body">' +
        "\n" +
        '\t\t<div class="row">' +
        "\n" +
        '\t\t<a href="#" class="collection create-new-collection">' +
        "\n" +
        '\t\t\t<div class="modal-save-item-to-icon create-symbol">+</div>' +
        "\n" +
        '\t\t\t\t<div class="create-text heading">create a new collection</div>' +
        "\n" +
        "\t\t</a>" +
        "\n" +
        "\t</div>" +
        "\n" +
        '\t\t<div class="row row-saved-collection">' +
        "\n" +
        '\t\t\t<a href="#" class="collection saved-collection">' +
        "\n" +
        '\t\t\t\t<div class="modal-save-item-to-icon save-symbol">' +
        "\n" +
        '\t\t\t\t<img src="/assets/images/heart.png" alt="add to cart" class="image image-heart"/>' +
        "\n" +
        "\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t<div class="create-text">' +
        "\n" +
        '\t\t\t\t\t<span class="heading">my wishlist </span>' +
        "\n" +
        '\t\t\t\t\t<span class="secondary-text">Private: 9 items </span>' +
        "\n" +
        "\t\t\t\t</div>" +
        "\t\t\t\t</a>" +
        "\n" +
        '\t\t\t<input type="checkbox" class="checkbox checkbox-mywishlist" id="username" checked />' +
        "\n" +
        "\t\t\t</div>" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        '\t\t\t <div class="modal-footer">' +
        "\n" +
        '\t\t\t<button class="btn btn-primary"id="collection-btn-done">Done</button>' +
        "\n" +
        "\t\t\t</div>" +
        "\n" +
        "\t</div>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#modal-tooltip");
    console.log(tooltip, "ye modal-tooltip");
    tooltip.innerHTML = "Copied";
  });
  modalclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#modal-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}
// _________________________________________________________________________________________________________________

// Typography

// _________________________________________________________________________________________________________________

// Badge

// Copy Content for Badge
let badgeclip = document.querySelector("#clip-badge");
if (badgeclip != null) {
  badgeclip.addEventListener("click", () => {
    console.log("badge clip called");
    navigator.clipboard.writeText(
      '<div class="badge-container">' +
        "\n" +
        '\t<div class="badge badge-notification">' +
        "\n" +
        '\t\t<i class="fas fa-bell">' +
        "\n" +
        '\t\t\t<span class="notification-count">99+</span>' +
        "\n" +
        "\t\t</i>" +
        "\n" +
        "\t</div>" +
        "\n" +
        '\t<div class="badge badge-cart">' +
        "\n" +
        '\t\t<i class="fas fa-bell">' +
        "\n" +
        '\t\t\t<span class="cart-count">3</span>' +
        "\n" +
        "\t\t</i>" +
        "\n" +
        "\t</div>" +
        "\n" +
        '\t<div class="badge badge-notification">' +
        "\n" +
        '\t<span class="rating">4.3</span>' +
        "\n" +
        '\t\t<i class="fas fa-star"></i>' +
        "\n" +
        "\t</div>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#badge-tooltip");
    console.log(tooltip, "ye badge tooltip");
    tooltip.innerHTML = "Copied";
  });
  badgeclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#badge-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}
// ____________________________________________________________________________________________________________
// Button

let buttonclip = document.querySelector("#clip-button");
if (buttonclip != null) {
  buttonclip.addEventListener("click", () => {
    console.log("button clip called");
    navigator.clipboard.writeText(
      '<div class="btn-container">' +
        "\n" +
        '\t<button class="btn btn-primary">primary button</button>' +
        "\n" +
        '\t<button class="btn btn-secondary">secondary button</button>' +
        "\n" +
        '\t<button class="btn btn-success">success button</button>' +
        "\n" +
        '\t<button class="btn btn-danger">danger button</button>' +
        "\n" +
        '\t<button class="btn btn-warning">warning button</button>' +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#button-tooltip");
    console.log(tooltip, "ye button tooltip");
    tooltip.innerHTML = "Copied";
  });
  buttonclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#button-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}

// ____________________________________________________________________________________________________________
// Input
let inputclip = document.querySelector("#clip-input");
if (inputclip != null) {
  inputclip.addEventListener("click", () => {
    console.log("input clip called");
    navigator.clipboard.writeText(
      '<form action="#" class="form">' +
        "\n" +
        '\t<div class="form-container">' +
        "\n" +
        '\t\t<div class="form-title header header-secondary text-center">' +
        "\n" +
        "\t\t\tsign up" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        '\t\t<div class="form-row">' +
        "\n" +
        '\t\t\t<input type="text" class="input input-email" id="username" required />' +
        "\n" +
        '\t\t\t<label for="username"class="label-name">' +
        "\n" +
        '\t\t\t<span class="content-name">username </span>' +
        "\n" +
        "\t\t\t</label>" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        '\t\t<div class="form-row">' +
        "\n" +
        '\t\t\t <input type="password" class="input input-password" id="password" required />' +
        "\n" +
        '\t\t\t <label for="password"class="label-name">' +
        "\n" +
        '\t\t\t <span class="content-name">password </span>' +
        "\n" +
        "\t\t\t</label>" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        "\t</div>" +
        "\n" +
        "</form>"
    );

    let tooltip = document.querySelector("#input-tooltip");
    console.log(tooltip, "ye input tooltip");
    tooltip.innerHTML = "Copied";
  });
  inputclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#input-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}
// _________________________________________________________________________________________________________________
// Card

let cardclip = document.querySelector("#clip-card");
if (cardclip != null) {
  cardclip.addEventListener("click", () => {
    console.log("card clip called");
    navigator.clipboard.writeText(
      '<div class="card">' +
        "\n" +
        '\t<div class="card-container">' +
        "\n" +
        '\t\t<div class="card-body">' +
        "\n" +
        '\t\t\t<div class="card-item">' +
        "\n" +
        '\t\t\t\t<a href="#">' +
        "\n" +
        '\t\t\t\t\t<div class="card-image-container">' +
        "\n" +
        '\t\t\t\t\t\t<img src="https://i.scdn.co/image/ab67616d00001e02fd2df008046f04c32d9c0c2e" alt="card-image" class="card-image">' +
        "\n" +
        "\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t<div class="card-content">' +
        "\n" +
        '\t\t\t\t\t\t<div class="card-title">Believer</div>' +
        "\n" +
        '\t\t\t\t\t\t<div class="card-subtitle">Imagine Dragons</div>' +
        "\n" +
        "\t\t\t\t\t</div>" +
        "\n" +
        "\t\t\t\t</a>" +
        "\n" +
        "\t\t\t</div>" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        "\t</div>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#card-tooltip");
    console.log(tooltip, "ye card-tooltip");
    tooltip.innerHTML = "Copied";
  });
  cardclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#card-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}

// ecommerce card
let cardecommerceclip = document.querySelector("#clip-card-ecommerce");
if (cardecommerceclip != null) {
  cardecommerceclip.addEventListener("click", () => {
    console.log("card ecommerce called");
    navigator.clipboard.writeText(
      '<div class="card card-ecommerce">' +
        "\n" +
        '\t<div class="card-ecommerce-container">' +
        "\n" +
        '\t\t<div class="card-ecommerce-body">' +
        "\n" +
        '\t\t\t<div class="card-ecommerce-item">' +
        "\n" +
        '\t\t\t\t<a href="#">' +
        "\n" +
        '\t\t\t\t\t<div class="card-ecommerce-image-container">' +
        "\n" +
        '\t\t\t\t\t\t<img src="https://rukminim1.flixcart.com/image/312/312/kfvfwy80/mobile/j/h/t/poco-c3-mzb07riin-original-imafw8qbg63kvngr.jpeg?q=70" alt="card-image" class="card-ecommerce-image">' +
        "\n" +
        "\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t<div class="card-ecommerce-content">' +
        "\n" +
        '\t\t\t\t\t\t<div class="product-details">' +
        "\n" +
        '\t\t\t\t\t\t\t<a href="#">' +
        "\n" +
        '\t\t\t\t\t\t<span class="product-name">poco c3</span>(' +
        "\n" +
        '\t\t\t\t\t\t<span class="product-model-name">Arctic Blue</span>' +
        "\n" +
        '<span class="product-model-variant">32 gb)</span>' +
        "\n" +
        "\t\t\t\t\t\t\t</a>" +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t\t<div class="rating-details">' +
        "\n" +
        '\t\t\t\t\t\t<div class="badge badge-rating">' +
        "\n" +
        '\t\t\t\t\t\t\t<span class="rating">4.3</span>' +
        "\n" +
        '\t\t\t\t\t\t\t<i class="fas fa-star"></i>' +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t\t<div class="product-price-details">' +
        "\n" +
        '\t\t\t\t\t\t\t<span class="discounted-price">₹7,499</span>' +
        "\n" +
        '\t\t\t\t\t\t<span class="original-price">₹9,999</span>' +
        "\n" +
        '\t\t\t\t\t\t<span class="discount-price">25% off</span>' +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        "\t\t\t\t\t</div>" +
        "\n" +
        "\t\t\t\t</a>" +
        "\n" +
        "\t\t\t</div>" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        "\t</div>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#card-ecommerce-tooltip");
    console.log(tooltip, "ye cardecommerceclip-tooltip");
    tooltip.innerHTML = "Copied";
  });
  cardecommerceclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#card-ecommerce-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}

// horizontal card
let cardhorizontalclip = document.querySelector("#clip-card-horizontal");
if (cardhorizontalclip != null) {
  cardhorizontalclip.addEventListener("click", () => {
    console.log("card ecommerce called");
    navigator.clipboard.writeText(
      '<div class="card card-horizontal">' +
        "\n" +
        '\t<div class="card-horizontal-container">' +
        "\n" +
        '\t<a class="card-horizontal-body">' +
        "\n" +
        '\t\t<div class="card-horizontal-image-container">' +
        "\n" +
        '\t\t\t<img src="https://t.scdn.co/images/7ef1d6445a684e30bdd78f09507d688c.jpeg" alt="" class="card-horizontal-image" />' +
        "\n" +
        "\t\t\t</div>" +
        "\n" +
        '\t\t<div class="card-horizontal-content">' +
        "\n" +
        '\t\t\t<div class="card-horizontal-title">Lagaan</div>' +
        "\n" +
        '\t\t\t<div class="card-horizontal-subtitle">Motion Picture</div>' +
        "\n" +
        "\t\t\t</div>" +
        "\n" +
        '\t\t<div class="play-button"><i class="fas fa-play"></i>' +
        "\n" +
        "\t</div>" +
        "\n" +
        "</a>"
    );

    let tooltip = document.querySelector("#card-tooltip-horizontal");
    console.log(tooltip, "ye cardecommerceclip-tooltip");
    tooltip.innerHTML = "Copied";
  });
  cardecommerceclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#card-tooltip-horizontal");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}

// plain card
let cardplainclip = document.querySelector("#clip-card-plain");
if (cardplainclip != null) {
  cardplainclip.addEventListener("click", () => {
    console.log("card ecommerce called");
    navigator.clipboard.writeText(
      '<div class="card card-ecommerce">' +
        "\n" +
        '\t<div class="card-ecommerce-container">' +
        "\n" +
        '\t\t<div class="card-ecommerce-body">' +
        "\n" +
        '\t\t\t<div class="card-ecommerce-item">' +
        "\n" +
        '\t\t\t\t<a href="#">' +
        "\n" +
        '\t\t\t\t\t<div class="card-ecommerce-image-container">' +
        "\n" +
        '\t\t\t\t\t\t<img src="https://rukminim1.flixcart.com/image/312/312/kfvfwy80/mobile/j/h/t/poco-c3-mzb07riin-original-imafw8qbg63kvngr.jpeg?q=70" alt="card-image" class="card-ecommerce-image">' +
        "\n" +
        "\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t<div class="card-ecommerce-content">' +
        "\n" +
        '\t\t\t\t\t\t<div class="product-details">' +
        "\n" +
        '\t\t\t\t\t\t\t<a href="#">' +
        "\n" +
        '\t\t\t\t\t\t<span class="product-name">poco c3</span>(' +
        "\n" +
        '\t\t\t\t\t\t<span class="product-model-name">Arctic Blue</span>' +
        "\n" +
        '<span class="product-model-variant">32 gb)</span>' +
        "\n" +
        "\t\t\t\t\t\t\t</a>" +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t\t<div class="rating-details">' +
        "\n" +
        '\t\t\t\t\t\t<div class="badge badge-rating">' +
        "\n" +
        '\t\t\t\t\t\t\t<span class="rating">4.3</span>' +
        "\n" +
        '\t\t\t\t\t\t\t<i class="fas fa-star"></i>' +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t\t<div class="product-price-details">' +
        "\n" +
        '\t\t\t\t\t\t\t<span class="discounted-price">₹7,499</span>' +
        "\n" +
        '\t\t\t\t\t\t<span class="original-price">₹9,999</span>' +
        "\n" +
        '\t\t\t\t\t\t<span class="discount-price">25% off</span>' +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        "\t\t\t\t\t</div>" +
        "\n" +
        "\t\t\t\t</a>" +
        "\n" +
        "\t\t\t</div>" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        "\t</div>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#card-tooltip-plain");
    console.log(tooltip, "ye cardecommerceclip-tooltip");
    tooltip.innerHTML = "Copied";
  });
  cardplainclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#card-tooltip-plain");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}

// fallback card
let cardfallbackclip = document.querySelector("#clip-card-fallback");
if (cardfallbackclip != null) {
  cardfallbackclip.addEventListener("click", () => {
    console.log("card ecommerce called");
    navigator.clipboard.writeText(
      '<div class="card card-ecommerce">' +
        "\n" +
        '\t<div class="card-ecommerce-container">' +
        "\n" +
        '\t\t<div class="card-ecommerce-body">' +
        "\n" +
        '\t\t\t<div class="card-ecommerce-item">' +
        "\n" +
        '\t\t\t\t<a href="#">' +
        "\n" +
        '\t\t\t\t\t<div class="card-ecommerce-image-container">' +
        "\n" +
        '\t\t\t\t\t\t<img src="https://rukminim1.flixcart.com/image/312/312/kfvfwy80/mobile/j/h/t/poco-c3-mzb07riin-original-imafw8qbg63kvngr.jpeg?q=70" alt="card-image" class="card-ecommerce-image">' +
        "\n" +
        "\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t<div class="card-ecommerce-content">' +
        "\n" +
        '\t\t\t\t\t\t<div class="product-details">' +
        "\n" +
        '\t\t\t\t\t\t\t<a href="#">' +
        "\n" +
        '\t\t\t\t\t\t<span class="product-name">poco c3</span>(' +
        "\n" +
        '\t\t\t\t\t\t<span class="product-model-name">Arctic Blue</span>' +
        "\n" +
        '<span class="product-model-variant">32 gb)</span>' +
        "\n" +
        "\t\t\t\t\t\t\t</a>" +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t\t<div class="rating-details">' +
        "\n" +
        '\t\t\t\t\t\t<div class="badge badge-rating">' +
        "\n" +
        '\t\t\t\t\t\t\t<span class="rating">4.3</span>' +
        "\n" +
        '\t\t\t\t\t\t\t<i class="fas fa-star"></i>' +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        '\t\t\t\t\t\t<div class="product-price-details">' +
        "\n" +
        '\t\t\t\t\t\t\t<span class="discounted-price">₹7,499</span>' +
        "\n" +
        '\t\t\t\t\t\t<span class="original-price">₹9,999</span>' +
        "\n" +
        '\t\t\t\t\t\t<span class="discount-price">25% off</span>' +
        "\n" +
        "\t\t\t\t\t\t</div>" +
        "\n" +
        "\t\t\t\t\t</div>" +
        "\n" +
        "\t\t\t\t</a>" +
        "\n" +
        "\t\t\t</div>" +
        "\n" +
        "\t\t</div>" +
        "\n" +
        "\t</div>" +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#card-tooltip-fallback");
    console.log(tooltip, "ye cardecommerceclip-tooltip");
    tooltip.innerHTML = "Copied";
  });
  cardfallbackclip.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#card-tooltip-fallback");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}
