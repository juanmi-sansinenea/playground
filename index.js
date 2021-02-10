// Techniques to hide and show and change the looks of elements:
// 1. Remove class from classList and add new class to classList
// --  dropdownContent.classList.remove("dropdown-invisible");
// --  dropdownContent.classList.add("dropdown-visible");
// 2. Change className: (this is the older way, so forget it)
// 3. Target property in class an change value
// --  modalMenu.style.display = "block";

// Colors (Translated from SCSS, available at _variables,
// needed to be repeated here because SASS runs before JS
const colors = {
  primary: "#ff6b00",
  secondary: "#e233ff",
  middleGrey: "rgb(78, 78, 78)",
  lightGrey: "rgb(228, 228, 228)",
  darkGrey: "#333",
};

// Menu items
// const m0 = document.querySelector(".m0");
// const m1 = document.querySelector(".m1");
// const m2 = document.querySelector(".m2");
// const m3 = document.querySelector(".m3");

// const menuArr = ["Home", "About", "Projects", "Contact"];
// m0.textContent = menuArr[0];
// m1.textContent = menuArr[1];
// m2.textContent = menuArr[2];
// m3.textContent = menuArr[3];

// // Submenu items (incomplete)

// const m2s0 = document.querySelector(".m2s0");
// const m2s1 = document.querySelector(".m2s1");
// const m2s2 = document.querySelector(".m2s2");
// const m2s3 = document.querySelector(".m2s3");
// Submenu needed finishing...

//// MENU Markup injection
const menuMarkup = `
        <ul>
          <li>
            <a class="menu-item" href="#">Home</a>
          </li>
          <li>
            <a class="menu-item" href="#">About</a>
          </li>
          <li>
            <a class="menu-item dropdown-trigger" href="#"
              > Projects &nbsp&nbsp&nbsp<i
                class="fas fa-angle-down"
              ></i
            ></a>
            <!-- Dropdown – It's illegal to nest <a> tags within other <a> tags-->
            <div class="dropdown-content dropdown-init">
              <ul>
                <li><a href="#">Proko Wheeler</a></li>
                <li><a href="#">Truku Mamstead </a></li>
                <li><a href="#">Moshli Läksnthem</a></li>
                <li><a href="#">Stekl Awertorvi</a></li>
                <li><a href="#">Zushtük Halorean</a></li>
              </ul>
            </div>
            <!-- end dropdown -->
          </li>
          <li>
            <a class="menu-item m3" href="#">Contact</a>
          </li>
        </ul>
`;
const modalMenuMarkup = `
<div class="close-x">
  <span class="iconify" 
    data-icon="codicon:close" 
    data-inline="false" 
    style="color: ${colors.darkGrey};" 
    data-width="2rem" 
    data-height="2rem">
  </span>
</div>
${menuMarkup}`;
const normalMenu = document.querySelector(".normal-menu");
const modalMenu = document.querySelector(".modal-menu");
normalMenu.innerHTML = menuMarkup;
modalMenu.innerHTML = modalMenuMarkup;

// HIDE / SHOW MENU on SCROLL interaction
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

// Launch DROPDOWN menu, remove when mouse leaves dropdown, and remove when mouse leaves menu item too
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

// Launch MODAL (mobile)
const modalTrigger = document.querySelector(".fa-bars");
const li = document.querySelectorAll(".modal-menu ul li");

modalTrigger.addEventListener("click", () => {
  modalMenu.style.display = "block";
  for (let i = 0; i < li.length; i++) {
    //li[i].style.display = "block";
  }
});

/// Should make the whole nav into a class and singleton...
