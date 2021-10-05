"use strict";

const navPeriod = document.querySelector(".nav__period");
const navDropdown = document.querySelector(".nav__dropdown");
const navPeriodText = document.querySelector(".nav__period-text");
navPeriod.addEventListener("click", () => {
  navDropdown.classList.toggle("visible");
  //   navDropdown.classList.contains("visible")
  //     ? navDropdown.classList.remove("visible")
  //     : navDropdown.classList.add("visible");
});

navDropdown.addEventListener("click", (e) => {
  navPeriodText.innerText = e.target.innerText;
});

const cardContainer = document.querySelector(".cards");

cardContainer.addEventListener("click", (e) => {
  let el = e.target;
  while (el && !el.classList.contains("card")) {
    el = el.parentNode;
  }
  // e.target이 card일때까지 탐색
  if (el.classList.contains("card__modal")) return;
  //   띄어진 modal의 card를 클릭했을 때는 반응하지 않도록
  const modalBg = document.createElement("div");
  const modalCard = document.createElement("article");
  const modalCloseBtn = document.createElement("button");

  modalBg.setAttribute("class", "card__modal-bg");

  modalCard.innerHTML = el.innerHTML;
  modalCard.setAttribute("class", "card card__modal");

  modalCloseBtn.innerText = "X";
  modalCloseBtn.setAttribute("class", "card__modal-close-btn");

  modalBg.appendChild(modalCard);
  cardContainer.appendChild(modalBg);
  modalCard.appendChild(modalCloseBtn);

  document.body.style.overflow = "hidden";
  //   modal 띄어졌을 때는 화면이 스크롤 되지 않도록
  modalCloseBtn.addEventListener("click", () => {
    modalBg.remove();
    document.body.style.overflow = "visible";
    // modal 이 사라지고, 스크롤 되도록 만들기.
  });
});
