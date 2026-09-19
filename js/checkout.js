console.log("Checkout page loaded");


/* LOAD CART */

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];


const checkoutItems =
    document.getElementById(
        "checkout-items"
    );


const checkoutTotal =
    document.getElementById(
        "checkout-total"
    );


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


    checkoutTotal.textContent = "Naira 0";

}


else {

    cart.forEach((product) => {

        const quantity =
            product.quantity || 1;


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
                        Naira ${subtotal.toLocaleString()}
                    </p>

                </div>

            </div>

        `;

    });


    checkoutTotal.textContent =
        "Naira " + total.toLocaleString();

}


/* CHECKOUT FORM */

const checkoutForm =
    document.getElementById(
        "checkout-form"
    );


if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* CHECK IF CART IS EMPTY */

            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add a product before checking out."
                );

                return;

            }


            /* GET CUSTOMER DETAILS */

            const fullName =
                checkoutForm.elements[
                    "fullName"
                ].value.trim();


            const phone =
                checkoutForm.elements[
                    "phone"
                ].value.trim();


            const email =
                checkoutForm.elements[
                    "email"
                ].value.trim();


            const address =
                checkoutForm.elements[
                    "address"
                ].value.trim();


            const payment =
                checkoutForm.elements[
                    "payment"
                ].value;


            /* CREATE ORDER MESSAGE */

            let orderMessage =
                "Hello GreatChy Gifts & Decor!\n\n";


            orderMessage +=
                "I would like to place an order.\n\n";


            orderMessage +=
                "CUSTOMER DETAILS\n";


            orderMessage +=
                "Name: " +
                fullName +
                "\n";


            orderMessage +=
                "Phone: " +
                phone +
                "\n";


            orderMessage +=
                "Email: " +
                email +
                "\n";


            orderMessage +=
                "Delivery Address: " +
                address +
                "\n\n";


            orderMessage +=
                "ORDER DETAILS\n";


            cart.forEach((product) => {

                const quantity =
                    product.quantity || 1;


                const subtotal =
                    product.price *
                    quantity;


                orderMessage +=
                    product.name +
                    " x " +
                    quantity +
                    " - Naira " +
                    subtotal.toLocaleString() +
                    "\n";

            });


            orderMessage +=
                "\nTOTAL: Naira " +
                total.toLocaleString() +
                "\n\n";


            orderMessage +=
                "Payment Method: " +
                payment +
                "\n\n";


            orderMessage +=
                "Thank you for your order.";


            /* WHATSAPP NUMBER */

            const whatsappNumber =
                "2349135683777";


            /* CREATE WHATSAPP LINK */

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    orderMessage
                );


            /* OPEN WHATSAPP */

            window.open(
                whatsappURL,
                "_blank"
            );


            /* CLEAR CART */

            localStorage.removeItem(
                "cart"
            );


            /* CONFIRM ORDER */

            alert(
                "Your order has been prepared. WhatsApp will open so you can send your order to GreatChy Gifts & Decor."
            );


            /* RETURN TO SHOP */

            window.location.href =
                "index.html";

        }
    );

}