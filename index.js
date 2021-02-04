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
const launchDropdown = document.querySelector(".launch-dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

launchDropdown.addEventListener("mouseover", visibleDropdown);
launchDropdown.addEventListener("mouseleave", inVisibleDropdown);
dropdownContent.addEventListener("mouseover", visibleDropdown);
dropdownContent.addEventListener("mouseleave", inVisibleDropdown);

function visibleDropdown() {
  dropdownContent.classList.remove("invisible");
  dropdownContent.classList.add("visible");
}
function inVisibleDropdown() {
  dropdownContent.classList.remove("visible");
  dropdownContent.classList.add("invisible");
}
