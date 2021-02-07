// Menu items
const m0 = document.querySelector(".m0");
const m1 = document.querySelector(".m1");
const m2 = document.querySelector(".m2");
const m3 = document.querySelector(".m3");

const menuArr = ["Deshpar", "Ikxmöhe", "Uhlekoen", "Prataggana"];
m0.textContent = menuArr[0];
m1.textContent = menuArr[1];
m2.textContent = menuArr[2];
m3.textContent = menuArr[3];



// HIDE / SHOW MENU
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY >= nav.offsetHeight) {
    nav.classList.add("roll-up");
  } else {
    nav.classList.remove("roll-up");
  }
});

// Click button > action
const explore = document.querySelector(".explore");

explore.addEventListener("click", () => {
  window.location.href = "./buttons.html";
});

// launch dropdown menu, remove when mouse leaves dropdown, and remove when mouse leaves menu item too
const dropdownTrigger = document.querySelector(".dropdown-trigger");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownTrigger.addEventListener("mouseover", visibleDropdown);
dropdownTrigger.addEventListener("mouseleave", inVisibleDropdown);
dropdownContent.addEventListener("mouseover", visibleDropdown);
dropdownContent.addEventListener("mouseleave", inVisibleDropdown);

function visibleDropdown() {
  dropdownContent.classList.remove("dropdown-init");
  dropdownContent.classList.remove("dropdown-invisible");
  dropdownContent.classList.add("dropdown-visible");
}
function inVisibleDropdown() { 
  dropdownContent.classList.remove("dropdown-visible");
  dropdownContent.classList.add("dropdown-invisible");
}
