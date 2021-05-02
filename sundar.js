// Copy Script Link
let content = document.querySelector("#script-link");
console.log(content);
content.addEventListener("click", () => {
  console.log("called");
  navigator.clipboard.writeText(
    '<script src="https://grab-ui.netlify.app/components/get_started"></script>'
  );
});

// Copy css link
content = document.querySelector("#css-link");
console.log(content);
content.addEventListener("click", () => {
  console.log("called");
  navigator.clipboard.writeText(
    '<link rel="stylesheet" href="https://grab-ui.netlify.app/components/get_started">'
  );
});
