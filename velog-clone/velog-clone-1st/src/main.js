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
  while (el.classList && !el.classList.contains("card")) {
    el = el.parentNode;
  }
  // e.target이 card일때까지 탐색
  if (!el.classList || el.classList.contains("card__modal")) return;
  //  el이 card 외부가 눌러졌거나, / 띄어진 modal의 card를 클릭했을 때는 반응하지 않도록

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

const sliderLen = cardContainer.children.length;
// slider 요소의 개수
cardContainer.style.width = "100000px";
// cardContainer의 크기가 제한되어 있어, card의 width가 css에서 조정되지 않는 문제.
// 그러므로 먼저 박스의 크기를 넓혀두고, css style을 적용한 다음에, 그 style을 js로 가져온다.
// 이를 기반으로 계산을 한 다음에 다시 cardContainer의 넓이를 줄여준다.
// 컨테이너의 넓이를 줄여주는 이유는, 카드 크기의 합과 동일한 크기를 유지하게 함으로써 왼쪽 정렬되도록 만들기 위함이다.
let sliderWidth = Number(
  window.getComputedStyle(cardContainer.children[0]).width.slice(0, -2)
);
const sliderMargin = 32;
cardContainer.style.width = (sliderWidth + sliderMargin) * sliderLen + "px";

// 화면이 resize될 때마다, card의 크기가 변하므로, 다시 cardContainer의 크기도 산정해준다. (반응형)
window.addEventListener("resize", () => {
  cardContainer.style.width = "100000px";
  sliderWidth = Number(
    window.getComputedStyle(cardContainer.children[0]).width.slice(0, -2)
  );
  cardContainer.style.width = (sliderWidth + sliderMargin) * sliderLen + "px";
});

const arrowRight = document.querySelector(".slider__arrow-right");
const arrowLeft = document.querySelector(".slider__arrow-left");
const sliderBox = document.querySelector(".slider-box");

// 가장 왼쪽에 있는 card의 index
let index = 0;

arrowRight.addEventListener("click", () => {
  // 눌렀을때 지나온 slider의 넓이 + 현재 sliderBox의 넓이가 전체 cardContainer의 넓이보다 크다면 제일마지막카드가 제일 오른쪽에 위치하고 더이상 움직이지 않도록 한다.
  if (
    (index + 1) * (sliderWidth + sliderMargin) +
      Number(window.getComputedStyle(sliderBox).width.slice(0, -2)) >
    cardContainer.style.width.slice(0, -2)
  ) {
    cardContainer.style.transform = `translateX(-${
      cardContainer.style.width.slice(0, -2) -
      Number(window.getComputedStyle(sliderBox).width.slice(0, -2))
    }px)`;
    return;
  }
  // 하나의 카드를 움직인다.
  index++;
  // 하나의 카드 넓이 + margin만큼 이동시킨다.
  cardContainer.style.transform = `translateX(-${
    (sliderWidth + sliderMargin) * index
  }px)`;
});

arrowLeft.addEventListener("click", () => {
  // 하나의 카드를 움직인다.
  index--;
  // 하나의 카드 넓이 + margin 만큼 이동시킨다.
  cardContainer.style.transform = `translateX(-${
    (sliderWidth + sliderMargin) * index
  }px)`;
});
