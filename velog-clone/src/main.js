"use strict";

const navPeriod = document.querySelector(".nav__period");
const navDropdown = document.querySelector(".nav__dropdown");
const navPeriodText = document.querySelector(".nav__period-text");

// navPeriod 클릭 시, navDropdown이 toggle 되도록.
navPeriod.addEventListener("click", () => {
  navDropdown.classList.toggle("visible");
  //   navDropdown.classList.contains("visible")
  //     ? navDropdown.classList.remove("visible")
  //     : navDropdown.classList.add("visible");
});

// navDropdown 클릭 시, navPeriodText 글자가 바뀌도록.
navDropdown.addEventListener("click", (e) => {
  navPeriodText.innerText = e.target.innerText;
  Array.from(e.target.parentNode.children).forEach((el) =>
    el.classList.remove("active")
  );
  //   htmlelement to array 코드
  e.target.classList.add("active");
  //   클릭되는 list에 대해 색상을 추가하는 코드
});

const cardContainer = document.querySelector(".cards");
// 카드 클릭 시, 모달 띄우는 코드
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

const darkModeCheckBox = document.querySelector(".checkbox");
// 기본값은 light
document.documentElement.setAttribute("color-theme", "light");

darkModeCheckBox.addEventListener("change", switchTheme);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("color-theme", "dark");

    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");

    localStorage.setItem("theme", "light");
  }
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("color-theme", currentTheme);
  if (currentTheme === "dark") {
    darkModeCheckBox.checked = true;
  }
}
