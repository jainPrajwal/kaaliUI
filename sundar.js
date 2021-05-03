// Copy Script Link
var content = document.querySelector("#script-link");
console.log(content);
content.addEventListener("click", () => {
  console.log("called");
  navigator.clipboard.writeText(
    '<script src="https://grab-ui.netlify.app/components/get_started"></script>'
  );

  var tooltip = document.querySelector("#scripttooltip");
  console.log(tooltip, "ye script tooltip");
  tooltip.innerHTML = "Copied";
});
content.addEventListener("mouseout", () => {
  var tooltip = document.querySelector("#scripttooltip");
  tooltip.innerHTML = "Copy to Clipboard";
});

// Copy css link
content = document.querySelector("#css-link");
console.log(content);
content.addEventListener("click", () => {
  console.log("called");
  navigator.clipboard.writeText(
    '<link rel="stylesheet" href="https://grab-ui.netlify.app/components/get_started">'
  );
  let tooltip = document.querySelector("#mytooltip");
  console.log(tooltip, "ye css tooltip");
  tooltip.innerHTML = "Copied";
});

content.addEventListener("mouseout", () => {
  let tooltip = document.querySelector("#mytooltip");
  tooltip.innerHTML = "Copy to Clipboard";
});

$(window).load(function () {
  $(function () {
    $("#alertlink").click(function () {
      $("#main").load("./components/alert/alert.html");
    });
  });
});

if (parseInt(window.innerWidth) <= 768) {
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
// } else {
//   document.querySelector(".navbar-ul").style.display = "flex";
//   document.querySelector(".fa-bars").style.display = "none";
//   document.querySelector(".close-menu").style.display = "none";
// }

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
      document.querySelector(".close-menu").style.display = "block";
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
  // } else {
  //   document.querySelector(".navbar-ul").style.display = "flex";
  //   document.querySelector(".fa-bars").style.display = "none";
  //   document.querySelector(".close-menu").style.display = "none";
  // }
});
