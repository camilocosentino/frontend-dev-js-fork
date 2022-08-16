const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileHamburger = document.querySelector(".menu");

navbarEmail.addEventListener("click", toggleDesktopMenu);

mobileHamburger.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("hide")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("hide")
}