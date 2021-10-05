"use strict";

const navPeriod = document.querySelector(".nav__period");
const navDropdown = document.querySelector(".nav__dropdown");

navPeriod.addEventListener("click", handleDropdown);

function handleDropdown(e) {
  //   if (navDropdown.classList.contains("visible")) {
  //     navDropdown.classList.remove("visible");
  //   } else {
  //     navDropdown.classList.add("visible");
  //   }

  navDropdown.classList.contains("visible")
    ? navDropdown.classList.remove("visible")
    : navDropdown.classList.add("visible");
}
