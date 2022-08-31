const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileHamburger = document.querySelector(".menu");

// const asideMenu = document.querySelector(".product-detail");
const shoppingCartMenu = document.querySelector("#shopping-cart");
const cartIcon = document.querySelector(".navbar-shopping-cart");

const cardsContainer = document.querySelector(".cards-container");

const productDetailAside = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

navbarEmail.addEventListener("click", toggleDesktopMenu);

mobileHamburger.addEventListener("click", toggleMobileMenu);

cartIcon.addEventListener("click", toggleAside);

productDetailClose.addEventListener("click", CloseProductDetail)


function toggleDesktopMenu() {
    const isshoppingCartMenuClosed = shoppingCartMenu.classList.contains("hide");

    if (isshoppingCartMenuClosed) {
        desktopMenu.classList.toggle("hide");
    } else {
        desktopMenu.classList.toggle("hide");
        shoppingCartMenu.classList.toggle("hide");
        
    }
}

function toggleMobileMenu() {
    const isshoppingCartMenuClosed = shoppingCartMenu.classList.contains("hide");
    const isProductDetailClosed = productDetailAside.classList.contains("hide");

    if (isshoppingCartMenuClosed && isProductDetailClosed) {
        mobileMenu.classList.toggle("hide");
    } else {
        if (!isshoppingCartMenuClosed) {
            shoppingCartMenu.classList.toggle("hide");
        }else{
            productDetailAside.classList.toggle("hide");
        }
        mobileMenu.classList.toggle("hide");
        
        
    }
    
}

function toggleAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("hide");
    const isDesktopMenuClosed = desktopMenu.classList.contains("hide");
    const isProductDetailClosed = productDetailAside.classList.contains("hide");

    if (isMobileMenuClosed && isDesktopMenuClosed && isProductDetailClosed) {
        shoppingCartMenu.classList.toggle("hide");
    } else {
        if (!isMobileMenuClosed) {
            mobileMenu.classList.toggle("hide");
            shoppingCartMenu.classList.toggle("hide");
        }
        if (!isDesktopMenuClosed) {
            desktopMenu.classList.toggle("hide");
            shoppingCartMenu.classList.toggle("hide");
        }  
        if (!isProductDetailClosed) {
            productDetailAside.classList.toggle("hide");
            shoppingCartMenu.classList.toggle("hide");
        }     
    }        
    
}

function OpenProductDetail() {
    shoppingCartMenu.classList.add("hide");
    productDetailAside.classList.remove("hide");
}

function CloseProductDetail() {
    productDetailAside.classList.add("hide");
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
        productFigure.addEventListener("click", OpenProductDetail);
    
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

