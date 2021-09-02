"use strict";

// 1. +버튼 클릭 시 아이템 추가 ㅇ
// 2. enter 시 아이템 추가
// 3. trash btn 클릭시 아이템 제거 ㅇ
// 4. 오늘 할 일, 내일 할 일 필터링

const inputs = document.querySelectorAll("input");
const plusBtns = document.querySelectorAll(".plusBtn");
const items = document.querySelectorAll(".todo__items");

plusBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => onAdd(index))
);
inputs.forEach((input, index) =>
  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && input.value !== "") {
      onAdd(index);
    }
  })
);

function createItem(text, index) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;

  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-trash-alt trashBtn");

  li.appendChild(span);
  li.appendChild(icon);

  icon.addEventListener("click", () => {
    items[index].removeChild(li);
  });

  return li;
}

function onAdd(index) {
  console.log(`inputs[index].value`, inputs[index].value);
  const item = createItem(inputs[index].value, index);
  items[index].appendChild(item);
  inputs[index].value = "";
  inputs[index].focus();
  //   if (btn == plusBtns[0]) {
  //     console.log(`inputs[0].innerText`, inputs[0].value);
  //     inputs[0].value = "";
  //   } else {
  //     console.log(`inputs[1].innerText`, inputs[1].value);
  //     inputs[0].value = "";
  //   }
}
