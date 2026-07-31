console.log("Cart page loaded 🛒");


let cart = JSON.parse(localStorage.getItem("cart")) || [];


const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");


let total = 0;



if(cart.length === 0){

    cartItems.innerHTML = `

        <p>Your cart is currently empty.</p>

        <a href="index.html" class="view-btn">
            Continue Shopping
        </a>

    `;

}



else {


    cart.forEach((product, index) => {


        // Makes old saved products have quantity
        if(!product.quantity){
            product.quantity = 1;
        }


        // Calculate total with quantity
        total += product.price * product.quantity;



        cartItems.innerHTML += `


        <div class="cart-item">


            <img src="${product.image}" 
            alt="${product.name}">



            <div class="cart-details">


                <h3>${product.name}</h3>


                <p>
                    ₦${product.price.toLocaleString()}
                </p>



                <div class="quantity">


                    <button onclick="decreaseQuantity(${index})">
                        -
                    </button>



                    <span>
                        ${product.quantity}
                    </span>



                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>


                </div>




                <p>
                    Subtotal:
                    ₦${(product.price * product.quantity).toLocaleString()}
                </p>




                <button onclick="removeItem(${index})">
                    Remove
                </button>



            </div>


        </div>


        `;



    });



    // Save quantity updates
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}



cartTotal.textContent = 
"₦" + total.toLocaleString();






function increaseQuantity(index){


    cart[index].quantity++;


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    location.reload();


}







function decreaseQuantity(index){


    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }



    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    location.reload();


}








function removeItem(index){


    cart.splice(index,1);



    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    location.reload();


}