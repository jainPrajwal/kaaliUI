let iframe = document.getElementById("iframe");
console.log(iframe);
let content = iframe.contentWindow || iframe.contentDocument;
if (content.document) content = content.document;
content.body.style.overflow = "hidden";
