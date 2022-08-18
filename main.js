const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileHamburger = document.querySelector(".menu");

const asideMenu = document.querySelector(".product-detail");
const cartIcon = document.querySelector(".navbar-shopping-cart");

navbarEmail.addEventListener("click", toggleDesktopMenu);

mobileHamburger.addEventListener("click", toggleMobileMenu);

cartIcon.addEventListener("click", toggleAside);



function toggleDesktopMenu() {
    const isAsideMenuClosed = asideMenu.classList.contains("hide");

    if (isAsideMenuClosed) {
        desktopMenu.classList.toggle("hide");
    } else {
        desktopMenu.classList.toggle("hide");
        asideMenu.classList.toggle("hide");
        
    }
}

function toggleMobileMenu() {
    const isAsideMenuClosed = asideMenu.classList.contains("hide");

    if (isAsideMenuClosed) {
        mobileMenu.classList.toggle("hide");
    } else {
        mobileMenu.classList.toggle("hide");
        asideMenu.classList.toggle("hide");
        
    }
    
}

function toggleAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("hide");
    const isDesktopMenuClosed = desktopMenu.classList.contains("hide");

    if (isMobileMenuClosed && isDesktopMenuClosed) {
        asideMenu.classList.toggle("hide");
    } else {
        if (!isMobileMenuClosed) {
            mobileMenu.classList.toggle("hide");
            asideMenu.classList.toggle("hide");
        }
        if (!isDesktopMenuClosed) {
            desktopMenu.classList.toggle("hide");
            asideMenu.classList.toggle("hide");
        }      
    }

   
        // desktopMenu.classList.toggle("hide");
        // asideMenu.classList.toggle("hide");
        
    
}