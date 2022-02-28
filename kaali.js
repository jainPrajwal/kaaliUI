function copyText(id, text, tooltipId) {
  const element = document.querySelector(`#${id}`);
  if (element != null) {
    element.addEventListener("click", () => {
      navigator.clipboard.writeText(text);
      const tooltip = document.querySelector(`#${tooltipId}`);

      tooltip.innerHTML = "Copied";

      element.addEventListener("mouseout", () => {
        tooltip.innerHTML = "Copy to Clipboard";
      });
    });
  }
}
// Copy Script Link
let id = "script-link";
let text = '<script src="https://kaaliui.netlify.app/kaali.js"><script/>';

let tooltipId = "scripttooltip";
copyText(id, text, tooltipId);
// ---------------------------------------------------------------------------------------------
id = "css-link";
text = '<link rel="stylesheet" href="https://kaaliui.netlify.app/kaali.css">';
tooltipId = "mytooltip";
copyText(id, text, tooltipId);
// ---------------------------------------------------------------------------------------------
function removeActiveClass() {
  let activeclass = document.querySelector(".active");

  if (activeclass != null) {
    activeclass.classList.remove("active");
  }
}
// Making navbar responsive STEP 1

const hamburgericon = document.querySelector(".hamburger-kaali");
const navLinks = document.querySelector(".navbar-ul-kaali");
const links = document.querySelectorAll(".component-link-item-mobile");
const sidebarlinks = document.querySelectorAll(".sidebar-list-items");
sidebarlinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveClass();
    link.classList.add("active");
  });
});
if (hamburgericon != null) {
  hamburgericon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.add("fade");
      link.addEventListener("click", () => {
        removeActiveClass();
      
        link.classList.add("active");
        navLinks.classList.remove("open");
        hamburgericon.classList.remove("toggle");
      });
    });

    //Hamburger Animation
    hamburgericon.classList.toggle("toggle");
  });
}

//_______________________________________________________________________________________________________________

// Alert.js
// Close danger alert
if (document.querySelector("#btn-danger-close") != null) {
  document.querySelector("#btn-danger-close").addEventListener("click", () => {
    let alertbox = document.querySelector(".alert-content.alert-danger-dark");

    alertbox.classList.add("fade-out-top");
    setTimeout(() => {
      if (alertbox.classList.contains("fade-out-top")) {
        document.querySelector(
          ".alert-content.alert-danger-dark"
        ).style.display = "none";
      }
    }, 1000);
    setTimeout(() => {
      resetDangerAlert();
      document.querySelector(".alert-content.alert-danger-dark").style.display =
        "flex";
    }, 5000);

    // resetDangerAlert();
  });
}

// Close Success Alert
if (document.querySelector("#btn-success-close") != null) {
  document.querySelector("#btn-success-close").addEventListener("click", () => {
    resetSuccessAlert();
    document
      .querySelector(".alert-content.alert-success-dark")
      .classList.add("fade-out-top");
    setTimeout(() => {
      // resetSuccessAlert();
      if (
        document
          .querySelector(".alert-content.alert-success-dark")
          .classList.contains("fade-out-top")
      ) {
        document.querySelector(
          ".alert-content.alert-success-dark"
        ).style.display = "none";
      }
    }, 1000);

    setTimeout(() => {
      resetSuccessAlert();
      document.querySelector(
        ".alert-content.alert-success-dark"
      ).style.display = "flex";
    }, 5000);
  });
}
// Close info alert
if (document.querySelector("#btn-info-close") != null) {
  document.querySelector("#btn-info-close").addEventListener("click", () => {
    document
      .querySelector(".alert-content.alert-info-dark")
      .classList.add("fade-out-top");
    setTimeout(() => {
      if (
        document
          .querySelector(".alert-content.alert-info-dark")
          .classList.contains("fade-out-top")
      ) {
        document.querySelector(".alert-content.alert-info-dark").style.display =
          "none";
      }
    }, 1000);

    setTimeout(() => {
      resetInfoALert();
      document.querySelector(".alert-content.alert-info-dark").style.display =
        "flex";
    }, 5000);
  });
}

// Close warning alert
if (document.querySelector("#btn-warning-close") != null) {
  document.querySelector("#btn-warning-close").addEventListener("click", () => {
    document
      .querySelector(".alert-content.alert-warning-dark")
      .classList.add("fade-out-top");
    setTimeout(() => {
      if (
        document
          .querySelector(".alert-content.alert-warning-dark")
          .classList.contains("fade-out-top")
      ) {
        document.querySelector(
          ".alert-content.alert-warning-dark"
        ).style.display = "none";
      }
    }, 1000);

    setTimeout(() => {
      resetWarningAlert();
      document.querySelector(
        ".alert-content.alert-warning-dark"
      ).style.display = "flex";
    }, 5000);
  });
}
function resetAlert(className) {
  let alertbox = document.querySelector(`.${className}`);
  alertbox.classList.remove("fade-out-top");
}

function resetDangerAlert() {
  resetAlert("alert-danger-dark");
}

function resetSuccessAlert() {
  resetAlert("alert-success-dark");
}

function resetInfoALert() {
  resetAlert("alert-info-dark");
}

function resetWarningAlert() {
  resetAlert("alert-warning-dark");
}
// Copy content for Danger Alert
id = "clip-alert-danger";
text =
  '<div class="alert-content alert-danger">' +
  "\n\t" +
  " This is a danger alert with dismissal button." +
  "\n" +
  '\t<span class="btn-dismiss" id="btn-danger-close">&times;</span>' +
  "\n" +
  "</div>";
tooltipId = "danger-tooltip";
copyText(id, text, tooltipId);

// ----------------------------------------------------------------
// Success Alert
id = "clip-alert-success";
text =
  '<div class="alert-content alert-success">' +
  "\n\t" +
  " This is a success alert with dismissal button." +
  "\n" +
  '\t<span class="btn-dismiss" id="btn-success-close">&times;</span>' +
  "\n" +
  "</div>";
tooltipId = "success-tooltip";
copyText(id, text, tooltipId);
// Copy Content of Success Alert

// ----------------------------------------------------------------
// Info Alert
id = "clip-alert-info";
text =
  '<div class="alert-content alert-info">' +
  "\n\t" +
  " This is a info alert with dismissal button." +
  "\n" +
  '\t<span class="btn-dismiss" id="btn-info-close">&times;</span>' +
  "\n" +
  "</div>";
tooltipId = "info-tooltip";
copyText(id, text, tooltipId);
// Copy Content of info Alert

// ----------------------------------------------------------------
// warning Alert
id = "clip-alert-warning";
text =
  '<div class="alert-content alert-warning">' +
  "\n\t" +
  " This is a warning alert with dismissal button." +
  "\n" +
  '\t<span class="btn-dismiss" id="btn-warning-close">&times;</span>' +
  "\n" +
  "</div>";
tooltipId = "warning-tooltip";
copyText(id, text, tooltipId);
// Copy Content of warning Alert

//_______________________________________________________________________________________________________________

// Avatar.js
id = "clip-avatar-letter";
text =
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
  '\t\t<span class="status status-available "></span>' +
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
  '\t\t<span class="status status-do-not-disturb "></span>' +
  "\n" +
  "\t</div>" +
  "\n" +
  "</div>";
tooltipId = "avatar-letter-tooltip";
copyText(id, text, tooltipId);

// For image avatar with status
id = "clip-avatar-image-status";
text =
  '<div class="avatar-container">' +
  "\n" +
  '\t<div class="image-container">' +
  "\n" +
  '\t\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-sm"/>' +
  "\n" +
  '\t\t<span class="status status-available"></span>' +
  "\n" +
  "\t</div>" +
  "\n" +
  '\t<div class="image-container">' +
  "\n" +
  '\t\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-sm"/>' +
  "\n" +
  '\t\t<span class="status status-do-not-disturb"></span>' +
  "\n" +
  "\t</div>" +
  "\n" +
  "</div>";
tooltipId = "avatar-image-status-tooltip";
content = document.querySelector("#clip-avatar-image-status");
copyText(id, text, tooltipId);

// For regular avatars
id = "clip-avatar-regular";
text =
  '<div class="avatar-container">' +
  "\n" +
  '\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-sm"/>' +
  "\n" +
  '\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-md"/>' +
  "\n" +
  '\t<img src="/assets/images/avatar_1.jpg" alt="avatar"class="avatar avatar-lg"/>' +
  "\n" +
  "</div>";

tooltipId = "avatar-image-regular-tooltip";
content = document.querySelector("#clip-avatar-regular");
copyText(id, text, tooltipId);
//_______________________________________________________________________________________________________________

// toast.js
function resetToast(className) {
  let element = document.querySelector(`.${className}`);
  element.style.visibility = "visible";
  setTimeout(() => {
    document.querySelector(`.${className}`).classList.add("fade-out-bottom");
  }, 1000);
  element.classList.remove("fade-out-bottom");
}
if (document.querySelector(".btn-primary.btn-toast") != null) {
  document
    .querySelector(".btn-primary.btn-toast")
    .addEventListener("click", () => {
      resetToast("toast-primary");
    });
  let target = document.querySelector(".btn-primary.btn-toast");
  removeEventListeners(target, "click");
}

function removeEventListeners(target, event) {
  target.removeEventListener(event, () => {
   
  });
}

if (document.querySelector(".btn-success.btn-toast") != null) {
  document
    .querySelector(".btn-success.btn-toast")
    .addEventListener("click", () => {
      resetToast("toast-success");
    });
}

if (document.querySelector(".btn-danger.btn-toast") != null) {
  document
    .querySelector(".btn-danger.btn-toast")
    .addEventListener("click", () => {
      resetToast("toast-failure");
    });
}

id = "clip-toast";
text =
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
  "</div>";
tooltipId = "toast-tooltip";
copyText(id, text, tooltipId);
// _______________________________________________________________________________________________________________

// Modal.js
modalIsOpen = false;
if (document.querySelector(".btn.btn-like") != null) {
  document.querySelector(".btn.btn-like").addEventListener("click", () => {
    removeFadeOutFromModal();
    removeFadeInFromModal();
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal-bg").classList.add("modal-bg-active");
    modalIsOpen = true;

    if (modalIsOpen == true) {
      window.onclick = function (e) {
        let alertbox = document.querySelector(".modal");

        if (e.target == document.querySelector(".outer-modal-container")) {
          alertbox.style.display = "none";
          // document.querySelector(".container").style.backgroundColor =
          //   "#2F3136";
        }
      };
    }
  });
}
//

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
    document.querySelector(".modal-bg").classList.remove("modal-bg-active");

    let alertbox = document.querySelector(".modal");
    if (alertbox != null) {
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
      document.querySelector(".modal-bg").classList.remove("modal-bg-active");
      if (alertbox != null) {
        document.querySelector(".modal").classList.add("fade-out-top");
        setTimeout(() => {
          if (alertbox.classList.contains("fade-out-top")) {
            document.querySelector(".modal").style.display = "none";
          }
        }, 1500);
      }
      document.querySelector(".container").style.backgroundColor = "#2F3136";
    });
}

id = "clip-modal";
text =
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
  '\t\t\t<div class="modal-footer">' +
  "\n" +
  '\t\t\t<button class="btn btn-primary"id="collection-btn-done">Done</button>' +
  "\n" +
  "\t\t\t</div>" +
  "\n" +
  "\t</div>" +
  "\n" +
  "</div>";
tooltipId = "modal-tooltip";
copyText(id, text, tooltipId);
// _________________________________________________________________________________________________________________

// Typography.js
id = "clip-typo";
text =
  '<div class="header header-primary">primary header</div>' +
  "\n" +
  '<div class="header header-secondary">secondary header</div>' +
  "\n" +
  '<div class="header header-tertiary">tertiary header</div>' +
  "\n" +
  '<div class="text text-primary">primary text</div>' +
  "\n" +
  "\n" +
  '<div class="text text-regular">regular text</div>' +
  "\n" +
  '<div class="text text-small">small text</div>' +
  "\n" +
  '<div class="text text-small text-gray">small gray text</div>' +
  "\n" +
  '<div class="text text-center">centered text</div>';
tooltipId = "typo-tooltip";
copyText(id, text, tooltipId);

//_______________________________________________________________________________________________________________

// Badge.js
id = "clip-badge";
text =
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
  "</div>";
tooltipId = "badge-tooltip";
copyText(id, text, tooltipId);
// Copy Content for Badge

// ____________________________________________________________________________________________________________
// Button.js
id = "clip-button";
text =
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
  "</div>";
tooltipId = "button-tooltip";
copyText(id, text, tooltipId);
// ____________________________________________________________________________________________________________
// Input.js
id = "clip-input";
text =
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
  "</form>";

tooltipId = "input-tooltip";
copyText(id, text, tooltipId);
// _________________________________________________________________________________________________________________
// Card.js
id = "clip-card";
text =
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
  "</div>";
tooltipId = "card-tooltip";
copyText(id, text, tooltipId);
// ecommerce card

id = "clip-card-ecommerce";
text =
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
  "</div>";
tooltipId = "card-ecommerce-tooltip";
copyText(id, text, tooltipId);

// horizontal card
id = "clip-card-horizontal";
text =
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
  "</a>";
tooltipId = "card-tooltip-horizontal";
copyText(id, text, tooltipId);
// plain card
id = "clip-card-plain";
text =
  '<div class="card">' +
  "\n" +
  '\t<div class="plain-card-container">' +
  "\n" +
  '\t\t<a class="plain-card-fallback-body chakde" href="">' +
  "\n" +
  '\t\t\t<img src="https://t.scdn.co/images/7ef1d6445a684e30bdd78f09507d688c.jpeg" alt="image" class="plain-card-fallback-image"/>' +
  "\n" +
  '\t\t\t<h3 class="plain-card-title">Podcasts</h3>' +
  "\n" +
  "\t\t</a>" +
  "\n" +
  "\t</div>" +
  "\n" +
  "</div>";
tooltipId = "card-tooltip-plain";
copyText(id, text, tooltipId);

// fallback card
id = "clip-card-fallback";
text =
  '<div class="card">' +
  "\n" +
  '\t<div class="plain-card-container">' +
  "\n" +
  '\t\t<a class="plain-card-fallback-body chakde" href="">' +
  "\n" +
  '\t\t\t<div class="plain-card-fallback-image"></div>' +
  "\n" +
  '\t\t\t<h3 class="plain-card-title">Podcasts</h3>' +
  "\n" +
  "\t\t</a>" +
  "\n" +
  "\t</div>" +
  "\n" +
  "</div>";
tooltipId = "card-tooltip-fallback";
copyText(id, text, tooltipId);
// _______________________________________________________________________________________________________________
// tooltip.js
id = "clip-tooltip";
text =
  '<div class="btn-container">' +
  "\n" +
  '\t<button class="btn-demo">top<span class="tooltip tooltip-top">top</span>' +
  "\n" +
  '\t<button class="btn-demo btn-demo-left">left<span class="tooltip tooltip-left">left</span>' +
  "\n" +
  '\t<button class="btn btn-success">success button</button>' +
  "\n" +
  '\t<button class="btn-demo btn-demo-bottom">bottom<span class="tooltip tooltip-bottom">bottom</span>' +
  "\n" +
  '\t<button class="btn-demo btn-demo-right">right<span class="tooltip tooltip-right">right</span>' +
  "\n" +
  "</div>";
tooltipId = "tooltip-tooltip";
copyText(id, text, tooltipId);
// _______________________________________________________________________________________________________________
// checkbox.js
id = "clip-checkbox";
text =
  '<label class="checkbox-label">One' +
  "\n" +
  '\t<input type="checkbox"> checked="checked">' +
  "\n" +
  '\t<span class="checkmark"> </span>' +
  "\n" +
  '\t<button class="btn btn-success">success button</button>' +
  "\n" +
  "</label>";
tooltipId = "checkbox-tooltip";
copyText(id, text, tooltipId);

// card ecommerce
const cardImage = document.querySelector(".card-image-ecommerce");
const concatLikeClassToHeartIcon = (heartIcon) => {
  heartIcon.classList.add("like");
};
const getHeartIcon = () => {
  const heartIcon = document.querySelector(".icon");
  return heartIcon;
};
const getWishList = () => {
  const wishList = document.querySelector(".fa-heart");
  return wishList;
};

const removeLikeClass = (heartIcon) => {
  heartIcon.classList.remove("like");
};

const wishList = getWishList();

cardImage?.addEventListener("dblclick", () => {
  const heartIcon = getHeartIcon();
  concatLikeClassToHeartIcon(heartIcon);
  wishList?.classList.toggle("red");
  setTimeout(() => {
    removeLikeClass(heartIcon);
  }, 1200);
});

wishList?.addEventListener("click", () => {
  if (!wishList.classList.contains("red")) {
    const heartIcon = document.querySelector(".icon");
    heartIcon.classList.add("like");
    setTimeout(() => {
      removeLikeClass(heartIcon);
    }, 1200);
  }
  wishList.classList.toggle("red");
});
// _____________________________________________________________________________________________________________
// floating Button

const floatingButton = document.querySelector(".floating-btn");

const mainBody = document.querySelector(".main-body-kaali");

if (mainBody !== null && floatingButton) {
  const scrollFunction = () => {
    if (mainBody.scrollTop > 300) {
      floatingButton.style.display = "flex";
    } else {
      floatingButton.style.display = "none";
    }
  };
  mainBody.addEventListener("scroll", () => {
    scrollFunction();
  });

  const scrollToTop = () => {
    mainBody.scrollTop = 0;
    setTimeout(() => {
      mainBody.removeEventListener("scroll", scrollFunction);
    }, 1000);
  };

  floatingButton?.addEventListener("click", () => scrollToTop());
}

// --------------------------------------------------------
// Carousel

const track = document.querySelector(".carousel-track");

const slides = Array.from(track?.children || []);

const nextButton = document.querySelector(".carousel-button-right");
const prevButton = document.querySelector(".carousel-button-left");

const dotsNav = document.querySelector(".carousel-nav");

const dots = Array.from(dotsNav?.children || []);

const slideSize = slides[0]?.getBoundingClientRect();

const slideWidth = slideSize?.width;


const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  const amountToMove = targetSlide.style.left;
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const toggleArrows = (targetIndex, prevButton, nextButton, slides) => {
  if (targetIndex === 0) {
    prevButton.classList.add("hide");
    nextButton.classList.remove("hide");
  } else if (targetIndex === slides.length - 1) {
    nextButton.classList.add("hide");
    prevButton.classList.remove("hide");
  } else {
    nextButton.classList.remove("hide");
    prevButton.classList.remove("hide");
  }
};

nextButton?.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide !== null) {
    moveToSlide(track, currentSlide, nextSlide);
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    updateDots(currentDot, nextDot);
    const targetIndex = dots.findIndex((dot) => nextDot === dot);
    toggleArrows(targetIndex, prevButton, nextButton, slides);
  }
});

prevButton?.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  if (prevSlide !== null) {
    moveToSlide(track, currentSlide, prevSlide);
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    updateDots(currentDot, prevDot);

    const targetIndex = dots.findIndex((dot) => prevDot === dot);
    toggleArrows(targetIndex, prevButton, nextButton, slides);
  }
});

dotsNav?.addEventListener("click", (event) => {
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetDot = event.target.closest("button");
  //on complete dotsNav wherever I click except buttons(specific dots) it will return null.

  const targetIndex = dots.findIndex((dot) => dot === targetDot);

  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  updateDots(currentDot, targetDot);

  toggleArrows(targetIndex, prevButton, nextButton, slides);
});
