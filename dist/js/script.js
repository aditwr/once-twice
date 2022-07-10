// Animasi Page Load
const bgPL = document.querySelector(".bg-page-load");
const frontPL = document.querySelector(".front-page-load");
const lightPL = document.querySelector(".light-page-load");
setTimeout(() => {
  bgPL.classList.add("hidden");
  frontPL.classList.add("hidden");
  lightPL.classList.remove("hidden");
  lightPL.classList.add("animate-downOpacity");
  setTimeout(() => {
    lightPL.classList.add("hidden");
  }, 500);
}, 3200);

// Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-nav");
hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-active");
  mobileNav.classList.toggle("hidden");
});

// Ketika melakukan scrolling, ubah style navbar
const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");
const scrollSign = document.querySelector(".scroll");
window.onscroll = function () {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-scroll");
    for (let index = 0; index < navLink.length; index++) {
      navLink[index].classList.add("text-slate-600", "hover:text-pink-500");
    }
    scrollSign.classList.add("hidden");
  } else {
    navbar.classList.remove("navbar-scroll");
    for (let index = 0; index < navLink.length; index++) {
      navLink[index].classList.remove("text-slate-600", "hover:text-pink-500");
    }
    scrollSign.classList.remove("hidden");
  }
};
