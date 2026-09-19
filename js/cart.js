console.log("Cart page loaded 🛒");

/* LOAD CART  */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");


/* DISPLAY CART  */

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <p>
                    Your cart is currently empty.
                </p>

                <a href="index.html#shop" class="view-btn">
                    Continue Shopping
                </a>

            </div>
        `;

        cartTotal.textContent = "₦0";

        return;
    }


    cart.forEach((product, index) => {

        /* Make sure every product has a quantity */

        if (!product.quantity || product.quantity < 1) {
            product.quantity = 1;
        }


        const subtotal =
            product.price * product.quantity;

        total += subtotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}">

                <div class="cart-details">

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ₦${product.price.toLocaleString()}
                    </p>

                    <div class="quantity">

                        <button
                            type="button"
                            onclick="decreaseQuantity(${index})">
                            −
                        </button>

                        <span>
                            ${product.quantity}
                        </span>

                        <button
                            type="button"
                            onclick="increaseQuantity(${index})">
                            +
                        </button>

                    </div>

                    <p>
                        Subtotal:
                        ₦${subtotal.toLocaleString()}
                    </p>

                    <button
                        type="button"
                        onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>

        `;
    });


    cartTotal.textContent =
        "₦" + total.toLocaleString();


    /* Save any quantity corrections */

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


/* INCREASE QUANTITY */

function increaseQuantity(index) {

    if (!cart[index]) {
        return;
    }

    cart[index].quantity =
        (cart[index].quantity || 1) + 1;


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();
}


/* DECREASE QUANTITY  */

function decreaseQuantity(index) {

    if (!cart[index]) {
        return;
    }


    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();
}


/* REMOVE ITEM  */

function removeItem(index) {

    if (!cart[index]) {
        return;
    }


    cart.splice(index, 1);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();
}


/* INITIAL DISPLAY  */

displayCart();