export const $ = (qu: string): HTMLElement => {
  const $el = document.querySelector(qu);

  // HTMLElement로 제어
  if (!($el instanceof HTMLElement)) {
    throw new Error(`${qu} is not HTMLElement.`);
  }

  // 제네릭은 컴파일 -> 타입을 동적으로 검사할 수 없다. 오류 검출이 안됨. / 타입체크는 런타임 -> 타입가드 함수를 만들자.
  return $el;
};

const navPeriod = $(".nav__period");
const navDropdown = $(".nav__dropdown");
const navPeriodText = $(".nav__period-text");
const cardContainer = $(".cards");

// const navPeriod = document.querySelector(".nav__period") as HTMLElement;

// const navPeriod = document.querySelector(".nav__period");
// // 1. null 막기 2. Element가 아니라 HTMLElement로 선언하기
// // type 가드, 내로잉
// if (navPeriod === null) throw new Error(); // null을 막고
// if (!(navPeriod instanceof HTMLElement)) throw new Error();
// 클래스 버전 마스터

// navPeriod 클릭 시, navDropdown이 toggle 되도록.
navPeriod.addEventListener("click", () => {
  navDropdown.classList.toggle("visible");
  //   navDropdown.classList.contains("visible")
  //     ? navDropdown.classList.remove("visible")
  //     : navDropdown.classList.add("visible");
});

// navDropdown 클릭 시, navPeriodText 글자가 바뀌도록.

export const isHTMLElement = (el: unknown): el is HTMLElement => {
  //  unknown - 모든 타입의 조상이이다. 모든 것을 대입할 수 있다. 제네럴하게 쓰기위해.
  return el instanceof HTMLElement;
};

navDropdown.addEventListener("click", (e) => {
  // if (!(e.target instanceof HTMLElement)) return;

  // 왜 eventtarget을 주는가? -> 캡쳐링 버블링 때문에 뭐가 잡힐지 모른다. 그래서 베이스인
  // if (!(e.target instanceof HTMLElement)) return;
  if (!isHTMLElement(e.target)) return;
  // 타입가드

  navPeriodText.innerText = e.target.innerText;

  if (e.target.parentNode === null) return;

  Array.from(e.target.parentNode.children).forEach((el) =>
    el.classList.remove("active")
  );
  //   htmlelement to array 코드
  e.target.classList.add("active");
  //   클릭되는 list에 대해 색상을 추가하는 코드
});

// 카드 클릭 시, 모달 띄우는 코드
cardContainer.addEventListener("click", (e) => {
  if (!isHTMLElement(e.target)) return;

  const el = e.target.closest(".card");
  if (!isHTMLElement(el)) return;

  // while (e.target.classList && !e.target.classList.contains("card")) {
  //   if (e.target.parentNode === null) return; // 맞나?
  //   el = .parentNode as HTMLElement; // 맞나?
  // }
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

const darkModeCheckBox = $(".checkbox");
// 기본값은 light
document.documentElement.setAttribute("color-theme", "light");

darkModeCheckBox.addEventListener("change", switchTheme);

function switchTheme(e: Event) {
  // const target = e.target as HTMLInputElement;
  // input 이어야 한다.
  if (!(e.target instanceof HTMLInputElement)) return;

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
    if (!(darkModeCheckBox instanceof HTMLInputElement)) throw new Error();
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

const arrowRight = $(".slider__arrow-right");
const arrowLeft = $(".slider__arrow-left");
const sliderBox = $(".slider-box");

// 가장 왼쪽에 있는 card의 index
let index = 0;

arrowRight.addEventListener("click", () => {
  // 눌렀을때 지나온 slider의 넓이 + 현재 sliderBox의 넓이가 전체 cardContainer의 넓이보다 크다면 제일마지막카드가 제일 오른쪽에 위치하고 더이상 움직이지 않도록 한다.
  if (
    (index + 1) * (sliderWidth + sliderMargin) +
      Number(window.getComputedStyle(sliderBox).width.slice(0, -2)) >
    Number(cardContainer.style.width.slice(0, -2))
  ) {
    cardContainer.style.transform = `translateX(-${
      Number(cardContainer.style.width.slice(0, -2)) -
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
