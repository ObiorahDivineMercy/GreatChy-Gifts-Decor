console.log("Checkout page loaded 🛒");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

let total = 0;
if(cart.length === 0){
    checkoutItems.innerHTML = `
        <p>
            Your cart is empty.
        </p>
        <a href="index.html">
            Continue Shopping
        </a>
    `;
}

else {
    cart.forEach((product) => {
        total += product.price * (product.quantity || 1);
        checkoutItems.innerHTML += `
        <div class="checkout-product">
            <img src="${product.image}" 
            alt="${product.name}">
            <div>
                <h4>
                    ${product.name}
                </h4>
                <p>
                    Quantity:
                    ${product.quantity || 1}
                </p>
                <p>
                    ₦${(product.price * (product.quantity || 1)).toLocaleString()}
                </p>
            </div>
        </div>
        `;
    });
}

checkoutTotal.textContent =
"₦" + total.toLocaleString();
const checkoutForm = document.getElementById("checkout-form");
checkoutForm.addEventListener("submit", function(event){
    event.preventDefault();
    alert(
        "Thank you for your order! 🎁 GreatChy Gifts & Decor will contact you shortly."
    );
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});