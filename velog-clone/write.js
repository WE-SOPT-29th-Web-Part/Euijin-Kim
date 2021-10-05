"use strict";

const input = document.querySelector(".input");

input.addEventListener("keydown", addTag);

function addTag(e) {
  console.log(`e.key`, e.key);
  if (e.key === "Enter") {
    const span = document.createElement("span");
    span.setAttribute("class", "tag");
    span.innerText = e.target.value;
    e.target.value = "";
    document.body.insertBefore(span, input);
  }
}
