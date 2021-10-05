"use strict";

const navPeriod = document.querySelector(".nav__period");
const navDropdown = document.querySelector(".nav__dropdown");
const navPeriodText = document.querySelector(".nav__period-text");
const navDropdownItems = document.querySelectorAll(".nav__dropdown > div");
navPeriod.addEventListener("click", () => handleDropdown(navDropdown));

function handleDropdown(element) {
  element.classList.toggle("visible");
  //   element.classList.contains("visible")
  //     ? element.classList.remove("visible")
  //     : element.classList.add("visible");
}

navDropdownItems.forEach((item) =>
  item.addEventListener("click", () => {
    navPeriodText.innerText = item.innerText;
  })
);

const cardContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");

cardContainer.addEventListener("click", (e) => {
  let el = e.target;
  // walk up the tree until we find a LI item
  while (el && !el.classList.contains("card")) {
    el = el.parentNode;
  }
  if (el.classList.contains("card__modal")) return;
  const modalBg = document.createElement("div");
  const modalCard = document.createElement("article");
  modalBg.appendChild(modalCard);
  modalBg.setAttribute("class", "card__modal-bg");
  cardContainer.appendChild(modalBg);
  modalCard.innerHTML = el.innerHTML;
  modalCard.setAttribute("class", "card card__modal");

  const modalCloseBtn = document.createElement("button");
  modalCloseBtn.innerText = "X";
  modalCloseBtn.setAttribute("class", "card__modal-close-btn");
  modalCard.appendChild(modalCloseBtn);
  document.body.style.overflow = "hidden";

  modalCloseBtn.addEventListener("click", () => {
    modalBg.remove();
    document.body.style.overflow = "visible";
  });
});
