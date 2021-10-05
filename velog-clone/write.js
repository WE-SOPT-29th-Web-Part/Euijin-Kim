"use strict";

const tags = document.querySelector(".tags");
const input = document.querySelector(".input");

input.addEventListener("keydown", addTag);

function addTag(e) {
  console.log(`e.key`, e.key);
  if (e.key === "Enter") {
    const span = document.createElement("span");
    span.setAttribute("class", "tag");
    span.innerText = e.target.value;
    e.tarvet.value = "";
    tags.appendChild(span);
  }
}
