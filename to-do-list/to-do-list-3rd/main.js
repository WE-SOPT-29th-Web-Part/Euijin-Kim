"use strict";
// 엄격 모드

// 1. add 버튼을 눌렀을 때, list가 추가되도록 (완료)
// 2. enter 키보드 키를 눌렀을 때 list 가 추가되도록
// 3. 쓰레기통을 누르면 지워지도록.
// 4. 오늘만보기,내일만보기,함께보기 필터링 적용

// 우리가 조작해야할 html tag.
// .todos__input , todos__add , .todos__items

// 1. add 버튼을 눌렀을 때, list가 추가되도록 (완료)
// a. add 버튼을 눌렀을때, input의 value를 가져오기
// b. 가져온 value를 바탕으로, list 만들기

// DOM 요소를 가지고 오는 방법
const inputs = document.querySelectorAll(".todos__input");
const addBtns = document.querySelectorAll(".todos__add");
const allItems = document.querySelectorAll(".todos__items");

addBtns.forEach(
  (
    btn,
    index // btn1, btn2에 각각 addEventListener를 붙여준다
  ) =>
    btn.addEventListener("click", () => {
      onAdd(index);
    })
);
// 2개의 인수로 필요합니다. 처음은 이벤트명, 두번쨰는 이벤트가 감지되었을 때 실행할 (콜백)함수

// 2. enter 키보드 키를 눌렀을 때 list 가 추가되도록 -> addBtn을 누르는 과정 과 같다.
// 다양한 이벤트가 존재한다. click, keyup,keypress, scroll

inputs.forEach((input, index) =>
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      onAdd(index);
    }
  })
);

const onAdd = (index) => {
  if (!inputs[index].value) return;
  const li = document.createElement("li");
  //   <li></li>
  const span = document.createElement("span");
  //   <span></span>
  const deleteBtn = document.createElement("button");
  //   <button></button>
  //   태그를 만드는 과정

  li.setAttribute("class", "todos__item");
  //   <li class="todos__item" ></li>
  span.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");
  //   class 이름을 주는 과정.

  deleteBtn.innerText = "X";
  //   X. 어떤 분은 img 태그를 썼을 수도 있고, 어떤 분은 div에 background-image
  span.innerText = inputs[index].value;
  //   <span>input.value</span>

  allItems[index].appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  inputs[index].value = "";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};

// querySelectorAll을 통해서, 2개 요소를 다 가지고 와서,
// .forEach같은 반복문을 통해 제어한다

// 3. 필터링기능
// 체크된 요소의 width를 100%로 만들고
// 체크되지 않은 요소의 width를 0px로 만든다.
// 체크 유무는 open이라는 클래스 이름이 있는가로 판단한다.

// 가져와야할 DOM요소는 - .options, todos__today, todos__tomorrow (All)

const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");

nav.addEventListener("click", (event) => {
  if (event.target.className.includes("options__today")) {
    todos[0].classList.add("open");
    todos[1].classList.remove("open");
  } else if (event.target.className.includes("options__tomorrow")) {
    todos[0].classList.remove("open");
    todos[1].classList.add("open");
  } else if (event.target.className.includes("options__both")) {
    todos[1].classList.add("open");
    todos[0].classList.add("open");
  }
});

// .open 인 녀석에게 스타일링을 줘볼게요.

// 오늘,내일,둘다 이벤트를 따로 등록할 수도 있다.
// 이 3 버튼을 포함한 nav 버튼에 이벤트리스너를 등록하고 있다. -> 이벤트 위임
