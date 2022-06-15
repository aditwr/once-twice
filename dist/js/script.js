
// Ketika melakukan scrolling, ubah style navbar
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');
window.onscroll = function () {
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add('navbar-scroll');
        for (let index = 0; index < navLink.length; index++) {
            navLink[index].classList.add("text-slate-600", "hover:text-pink-500");
        }
    }
    else {
        navbar.classList.remove('navbar-scroll');
        for (let index = 0; index < navLink.length; index++) {
            navLink[index].classList.remove("text-slate-600", "hover:text-pink-500");
        }
    }
};