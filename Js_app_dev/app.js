

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".closee-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartOverlay = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
// cart

let cart = []

//getting products
class Products{
getProducts(){
    fetch('products.json')
}
}
//display products
class UI{

}

//local storage
class Storage{

}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new Products();
})