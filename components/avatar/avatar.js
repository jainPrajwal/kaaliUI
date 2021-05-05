content = document.querySelector("#clip-avatar-letter");
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

// For image avatar with status
content = document.querySelector("#clip-avatar-image-status");
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

// For regular avatars
content = document.querySelector("#clip-avatar-regular");
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
