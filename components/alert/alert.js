// ALert Danger

let alertbox = document.querySelector(".alert-danger");

let closeButton = document.querySelector("#btn-danger-close");

closeButton.addEventListener("click", () => {
  console.log("lal bhadak");
  alertbox.classList.add("fade-out-top");
  // alertbox.style.display = "none";
});

// Copy content for Danger Alert
let content = document.querySelector("#clip-alert-danger");
console.log(content);
content.addEventListener("click", () => {
  console.log("called");
  navigator.clipboard.writeText(
    '<div class="alert-content alert-danger">' +
      "\n\t" +
      " This is a danger alert with dismissal button." +
      "\n" +
      "</div>"
  );

  let tooltip = document.querySelector("#danger-tooltip");
  console.log(tooltip, "ye apna tooltip");
  tooltip.innerHTML = "Copied";
});
content.addEventListener("mouseout", () => {
  let tooltip = document.querySelector("#danger-tooltip");
  tooltip.innerHTML = "Copy to Clipboard";
});

// ----------------------------------------------------------------
// Success Alert

// Close Success Alert
document.querySelector("#btn-success-close").addEventListener("click", () => {
  document.querySelector(".alert-success").classList.add("fade-out-top");
});

// Copy Content of Success Alert
document.querySelector("#clip-alert-success").addEventListener("click", () => {
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
content.addEventListener("mouseout", () => {
  let tooltip = document.querySelector("#success-tooltip");
  tooltip.innerHTML = "Copy to Clipboard";
});

// -------------------------------------------------------------------------
// Success Alert
