"use strict";

// 1. + 버튼을 눌렀을때 list 하나가 추가되도록
// 2. enter를 눌렀을 때 list 하나가 추가되도록
// 3. 쓰레기통을 눌렀을 때 list가 삭제되도록
// 4. 오늘만보기, 내일만보기, 함꼐보기 필터링

// 1. + 버튼을 눌렀을때 list 하나가 추가되도록
// 1.1. 바튼을 눌렀을 때, input의 값을 가져온다
// 1.2. 가져온 input을 바탕으로 list를 만든다.
// 1.3. list를 items 안에 붙인다.
// 1.4. input 창을 비운다.

// 2개의 영역이 존재합니다. -> 하나를 먼저 해보고, 일반화 시켜보겠습니다.

const addBtns = document.querySelectorAll(".todos__btn");
// 똑같은 것이 2개라면, 위에 있는 코드의 것을 가지고 온다.
const inputs = document.querySelectorAll(".todos__input");
const allTodoItems = document.querySelectorAll(".todos__items");

// 1.1.
addBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    // click 되었을때, 콜백함수 : 다른 함수의 parameter로 들어와서, 다른 함수가 실행되는 시점에 실행되는 함수.
    onAdd(index);
  })
);

inputs.forEach((input, index) =>
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      onAdd(index);
    }
  })
);

function onAdd(index) {
  const value = inputs[index].value;
  if (!value) return;
  const li = document.createElement("li");
  const div = document.createElement("div");
  const deleteBtn = document.createElement("button");

  li.setAttribute("class", "todos__item");
  div.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");

  div.innerText = value;

  li.appendChild(div);
  li.appendChild(deleteBtn);

  allTodoItems[index].appendChild(li);
  inputs[index].value = "";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
}

// 이벤트 위임

// 각각 버튼을 클릭할 때, open이라는 클래스 네임을 더해주고,
const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");
nav.addEventListener("click", (e) => {
  // nav의 빈 공간을 눌렀을 때는 아무 일이 발생하지 않도록 한다.
  if (e.target.tagName !== "BUTTON") return;
  // 3가지 버튼의 클릭 결과를 하나의 함수에 넣기 위해 switch 함수를 사용한다.
  switch (e.target.className) {
    case "options__today":
      todos[0].classList.add("open");
      todos[1].classList.remove("open");
      break;
    case "options__tomorrow":
      todos[0].classList.remove("open");
      todos[1].classList.add("open");
      break;
    case "options__both":
      todos[0].classList.add("open");
      todos[1].classList.add("open");
      break;
  }
});
