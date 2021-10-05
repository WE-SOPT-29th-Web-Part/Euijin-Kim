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
