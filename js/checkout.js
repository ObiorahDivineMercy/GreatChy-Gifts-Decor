console.log("Checkout page loaded 🛒");


/* LOAD CART */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems =
    document.getElementById("checkout-items");

const checkoutTotal =
    document.getElementById("checkout-total");


/* DISPLAY CART */

let total = 0;


if (cart.length === 0) {

    checkoutItems.innerHTML = `
        <div class="empty-checkout">

            <p>
                Your cart is empty.
            </p>

            <a href="index.html#shop">
                Continue Shopping
            </a>

        </div>
    `;

    checkoutTotal.textContent = "₦0";

}


else {

    cart.forEach((product) => {

        const quantity = product.quantity || 1;

        const subtotal =
            product.price * quantity;

        total += subtotal;


        checkoutItems.innerHTML += `

            <div class="checkout-product">

                <img
                    src="${product.image}"
                    alt="${product.name}">

                <div>

                    <h4>
                        ${product.name}
                    </h4>

                    <p>
                        Quantity:
                        ${quantity}
                    </p>

                    <p>
                        ₦${subtotal.toLocaleString()}
                    </p>

                </div>

            </div>

        `;
    });


    checkoutTotal.textContent =
        "₦" + total.toLocaleString();
}


/* CHECKOUT FORM */

const checkoutForm =
    document.getElementById("checkout-form");


if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add a product before checking out."
                );

                return;
            }


            alert(
                "Thank you for your order! 🎁 GreatChy Gifts & Decor will contact you shortly."
            );


            /* Clear cart after successful order */

            localStorage.removeItem("cart");


            /* Return to shop */

            window.location.href = "index.html";

        }
    );
}