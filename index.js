// HIDE / SHOW MENU
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY >= nav.offsetHeight) {
    nav.classList.add("roll-up");
  } else {
    nav.classList.remove("roll-up");
  }
});

// Click to go to buttons
const explore = document.querySelector(".explore");

explore.addEventListener("click", ()=> {
    //window.alert("WTF");
    window.location.href = "./buttons.html"
});
