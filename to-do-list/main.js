"use strict";
// 1. +버튼 클릭 시 아이템 추가 ㅇ
// 2. enter 시 아이템 추가
// 3. trash btn 클릭시 아이템 제거 ㅇ
// 4. 오늘 할 일, 내일 할 일 필터링
var inputs = Array.from(document.querySelectorAll("input"));
var plusBtns = Array.from(document.querySelectorAll(".plusBtn"));
var items = Array.from(document.querySelectorAll(".todo__items"));
var nav = document.querySelector("nav");
var navBtn = Array.from(document.querySelectorAll("nav > button"));
var todos = Array.from(document.querySelectorAll(".todo"));
nav.addEventListener("click", function (e) {
  var target = e.target;
  if (target.tagName !== "BUTTON") return;
  // nav의 빈 공간을 눌렀을 때는 아무 일이 발생하지 않도록 한다.
  // 3가지 버튼의 클릭 결과를 하나의 함수에 넣기 위해 switch 함수를 사용한다.
  switch (target.className) {
    case "nav__today":
      todos[0].classList.add("open");
      todos[1].classList.remove("open");
      break;
    case "nav__tomorrow":
      todos[0].classList.remove("open");
      todos[1].classList.add("open");
      break;
    case "nav__together":
      todos[0].classList.add("open");
      todos[1].classList.add("open");
      break;
  }
});
// plusBtn 버튼을 눌렀을 때 onAdd 함수 실행
plusBtns.forEach(function (btn, index) {
  return btn.addEventListener("click", function () {
    return onAdd(index);
  });
});
// enter를 눌렀을 때 onAdd 함수 실행
inputs.forEach(function (input, index) {
  return input.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      onAdd(index);
    }
  });
});
// 새로운 to-do-item을 추가하는 함수이다.
function createItem(text, index) {
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.innerText = text;
  var icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-trash-alt trashBtn");
  li.appendChild(span);
  li.appendChild(icon);
  icon.addEventListener("click", function () {
    items[index].removeChild(li);
  });
  // tranBtn을 눌렀을 때는 해당 li를 삭제한다.
  return li;
}
function onAdd(index) {
  var text = inputs[index].value;
  if (!text) return;
  // text가 없을 때는 추가하지 않는다.
  var item = createItem(text, index);
  items[index].appendChild(item);
  inputs[index].value = "";
  inputs[index].focus();
  // 입력이 완료 된 후, input에 다시 focus가 가도록 한다.
  // 아래를 일반화한 코드가 위 코드이다.
  //   if (btn == plusBtns[0]) {
  //     console.log(`inputs[0].innerText`, inputs[0].value);
  //     inputs[0].value = "";
  //   } else {
  //     console.log(`inputs[1].innerText`, inputs[1].value);
  //     inputs[0].value = "";
  //   }
}
