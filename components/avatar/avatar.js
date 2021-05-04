content = document.querySelector("#clip-avatar-letter-shade-green");
console.log(content);
content.addEventListener("click", () => {
  console.log("called");
  navigator.clipboard.writeText(
    '<div class="avatar-container">' +
      '\t<div class="image-container">' +
      "\n" +
      '\t\t<div class="avatar-letter avatar-sm" id="shade-green">' +
      "\t\t\tRR" +
      "\n" +
      "\t\t</div>" +
      "\n" +
      "\t</div>" +
      "\n" +
      "</div>"
  );

  let tooltip = document.querySelector("#avatar-letter-green-tooltip");
  console.log(tooltip, "ye apna tooltip");
  tooltip.innerHTML = "Copied";
});
content.addEventListener("mouseout", () => {
  let tooltip = document.querySelector("#avatar-letter-green-tooltip");
  tooltip.innerHTML = "Copy to Clipboard";
});
