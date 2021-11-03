"use strict";

const input = document.querySelector(".input") as HTMLInputElement;

input.addEventListener("keypress", addTag);

const tagArr: string[] = [];

function addTag(e: KeyboardEvent) {
  const target = e.target as HTMLInputElement;
  if (e.key === "Enter") {
    //   기존 태그와 중복된다면 그냥 return
    if (tagArr.includes(target.value)) {
      target.value = "";
      return;
    }
    const span = document.createElement("span") as HTMLElement;
    span.setAttribute("class", "tag");
    span.innerText = target.value;
    document.body.insertBefore(span, input);

    tagArr.push(target.value);
    target.value = "";

    span.addEventListener("click", () => {
      span.remove();
    });
  }
}
