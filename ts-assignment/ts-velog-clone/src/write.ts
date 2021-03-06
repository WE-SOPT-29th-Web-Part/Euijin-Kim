"use strict";

import { $, isHTMLElement } from "react-dom/ts-velog-clone/src/main";

const input = $(".input");

input.addEventListener("keypress", addTag);

const tagArr: string[] = [];

function addTag(e: KeyboardEvent) {
  if (!(e.target instanceof HTMLInputElement)) return;
  if (e.key === "Enter") {
    //   기존 태그와 중복된다면 그냥 return
    if (tagArr.includes(e.target.value)) {
      e.target.value = "";
      return;
    }
    const span = document.createElement("span");
    span.setAttribute("class", "tag");
    span.innerText = e.target.value;
    document.body.insertBefore(span, input);

    tagArr.push(e.target.value);
    e.target.value = "";

    span.addEventListener("click", () => {
      span.remove();
    });
  }
}
