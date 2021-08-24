var navMain = document.querySelector(".header-nav__menu");
var navToggle = document.querySelector(".header-nav__open-svg");
var navClosed = document.querySelector(".header-nav__close-svg");
var menu = document.querySelector(".header-nav__open-svg");
var active = document.querySelector(".header-active");

menu.classList.remove("header-nav__open--none");
navMain.classList.remove("header-nav__opened");
navClosed.classList.remove("header-nav__opened");
active.classList.remove("header-active__opened");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header-nav__none")) {
    navMain.classList.remove("header-nav__none");
    navMain.classList.add("header-nav__opened");
    active.classList.remove("header-active__none");
    active.classList.add("header-active__opened");
    navClosed.classList.add("header-nav__opened");
    navToggle.classList.add("header-nav__none");
  }
});

navClosed.addEventListener("click", function () {
  if (navMain.classList.contains("header-nav__opened")) {
    navMain.classList.remove("header-nav__opened");
    navMain.classList.add("header-nav__none");
    active.classList.remove("header-active__opened");
    active.classList.add("header-active__none");
    navClosed.classList.remove("header-nav__opened");
    navClosed.classList.add("header-nav__none");
    navToggle.classList.add("header-nav__opened");
  }
});