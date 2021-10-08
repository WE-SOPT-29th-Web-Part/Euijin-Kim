"use strict";

// 1. nav__period를 클릭하면, dropdown이 생기도록
// 2. dropdown 버튼 중 하나를 클릭 하면, nav__period속 글자가 바뀌도록
// 3. dropdown 버튼 중 하나를 클릭 하면, 버튼 속 글자 색깔이 바뀌도록

const navPeriod = document.querySelector(".nav__period");
const navDropdown = document.querySelector(".nav__dropdown");
const navActivePeriod = document.querySelector(".nav__period--active");
// 먼저 정적 UI를 만든 다음에 -> 클릭하면 동적으로 생성되도록 하겠다.

navPeriod.addEventListener("click", () => {
  navDropdown.classList.toggle("visible");
});

navDropdown.addEventListener("click", (e) => {
  navActivePeriod.innerText = e.target.innerText;

  //   Array.from(navDropdown.children).forEach((list) =>
  //     list.classList.remove("active")
  //   );

  Array.from(navDropdown.children)
    .filter((list) => list.classList.contains("active"))[0]
    .classList.remove("active");

  e.target.classList.add("active");
});

// 모달
//

const cardContainer = document.querySelector(".cards");
// 카드 클릭 시, 모달 띄우는 코드
cardContainer.addEventListener("click", (e) => {
  let el = e.target;
  while (el && !el.classList.contains("card")) {
    el = el.parentNode;
  }
  // e.target이 card일때까지 탐색
  if (!el.classList || el.classList.contains("card__modal")) return;
  //  card 외부가 눌러졌거나, 띄어진 modal의 card를 클릭했을 때는 반응하지 않도록
  const modalBg = document.createElement("div");
  const modalCard = document.createElement("article");
  const modalCloseBtn = document.createElement("button");

  modalBg.setAttribute("class", "card__modal-bg");

  modalCard.innerHTML = el.innerHTML;
  modalCard.setAttribute("class", "card card__modal");

  modalCloseBtn.innerText = "X";
  modalCloseBtn.setAttribute("class", "card__modal-close-btn");

  modalBg.appendChild(modalCard);
  document.body.appendChild(modalBg);
  modalCard.appendChild(modalCloseBtn);

  document.body.style.overflow = "hidden";
  //   modal 띄어졌을 때는 화면이 스크롤 되지 않도록
  modalCloseBtn.addEventListener("click", () => {
    modalBg.remove();
    document.body.style.overflow = "visible";
    // modal 이 사라지고, 스크롤 되도록 만들기.
  });
});
