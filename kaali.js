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
