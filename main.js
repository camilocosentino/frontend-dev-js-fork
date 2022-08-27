const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileHamburger = document.querySelector(".menu");

const asideMenu = document.querySelector(".product-detail");
const cartIcon = document.querySelector(".navbar-shopping-cart");

const cardsContainer = document.querySelector(".cards-container");

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

const productsList = [];

productsList.push({
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    productName: "Bike",
    price: 120,
});

productsList.push({
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    productName: "Mouse",
    price: 120,
});

productsList.push({
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    productName: "Monitor Led",
    price: 400,
});
productsList.push({
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    productName: "KewBoard",
    price: 120,
});

function listProducts(productsList) {
    for (const product of productsList) {
    

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const Info = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.productName;
    
        Info.appendChild(productPrice);
        Info.appendChild(productName);
    
        const productFigure = document.createElement("figure");
    
        const productFigureImg = document.createElement("img");
        productFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productFigure.appendChild(productFigureImg)
    
        productInfo.appendChild(Info);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

listProducts(productsList);

