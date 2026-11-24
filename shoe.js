/ /LALITO SHOES SHOPPING CART

// Get saved products from browser storage
let cart = JSON.parse(localStorage.getItem("lalitoCart")) || [];


// ADD PRODUCT TO CART

function addToCart(name, price, size) {

    let product = {
        name: name,
        price: Number(price),
        size: size
    };

    cart.push(product);

    // Save cart information
    localStorage.setItem("lalitoCart", JSON.stringify(cart));

    alert(name + " added to your cart!");

    displayCart();
}


// DISPLAY CART PRODUCTS

function displayCart() {

    let cartDisplay = document.getElementById("cart-items");

    // Only display products on the cart page
    if (!cartDisplay) return;

    cartDisplay.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        c…

