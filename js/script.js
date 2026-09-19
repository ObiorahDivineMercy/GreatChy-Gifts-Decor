javascript
console.log("Welcome to GreatChy Gifts & Decor!");


let selectedProduct = {};


/* PRODUCT MODAL  */

function openModal(product) {

    const modal =
        document.getElementById("productModal");

    const image =
        document.getElementById("modalImage");

    const title =
        document.getElementById("modalTitle");

    const price =
        document.getElementById("modalPrice");

    const description =
        document.getElementById("modalDescription");


    if (product === "rose") {

        image.src =
            "images/featured/bouquet.jpg";

        title.textContent =
            "Luxury Rose Bouquet";

        price.textContent =
            "₦45,000";

        description.textContent =
            "A beautiful premium rose arrangement perfect for birthdays, anniversaries and special moments.";


        selectedProduct = {

            name: "Luxury Rose Bouquet",

            price: 45000,

            image: "images/featured/bouquet.jpg",

            quantity: 1

        };

    }


    else if (product === "teddy") {

        image.src =
            "images/featured/teddy.jpg";

        title.textContent =
            "Premium Teddy Bear";

        price.textContent =
            "₦120,000";

        description.textContent =
            "A soft luxury teddy bear gift designed to make every celebration memorable.";


        selectedProduct = {

            name: "Premium Teddy Bear",

            price: 120000,

            image: "images/featured/teddy.jpg",

            quantity: 1

        };

    }


    else if (product === "balloon") {

        image.src =
            "images/featured/balloons.jpg";

        title.textContent =
            "Luxury Balloon Arrangement";

        price.textContent =
            "₦8,000";

        description.textContent =
            "Beautiful balloon decoration suitable for birthdays, surprises and celebrations.";


        selectedProduct = {

            name: "Luxury Balloon Arrangement",

            price: 8000,

            image: "images/featured/balloons.jpg",

            quantity: 1

        };

    }


    else if (product === "vase") {

        image.src =
            "images/featured/vase.jpg";

        title.textContent =
            "Elegant Flower Vase";

        price.textContent =
            "₦12,000";

        description.textContent =
            "A stylish flower vase that adds elegance to any space.";


        selectedProduct = {

            name: "Elegant Flower Vase",

            price: 12000,

            image: "images/featured/vase.jpg",

            quantity: 1

        };

    }


    modal.style.display = "flex";

}


/* CLOSE MODAL */

function closeModal() {

    document.getElementById(
        "productModal"
    ).style.display = "none";

}


/* ADD TO CART */

function addToCart() {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const existingProduct =
        cart.find(
            product =>
                product.name ===
                selectedProduct.name
        );


    if (existingProduct) {

        existingProduct.quantity =
            (existingProduct.quantity || 1) + 1;

    }


    else {

        cart.push({

            ...selectedProduct,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    window.location.href =
        "cart.html";

}


/* FILTER PRODUCTS  */

function filterProducts(category) {

    const products =
        document.querySelectorAll(
            ".product-card"
        );

    const noProductsMessage =
        document.getElementById(
            "no-products-message"
        );


    let visibleProducts = 0;


    products.forEach(product => {

        const productCategories =
            product.dataset.category
                .split(" ");


        if (
            category === "all" ||
            productCategories.includes(category)
        ) {

            product.style.display = "";

            visibleProducts++;

        }

        else {

            product.style.display = "none";

        }

    });


    /* Show message if category
       has no products */

    if (visibleProducts === 0) {

        noProductsMessage.style.display =
            "block";

    }

    else {

        noProductsMessage.style.display =
            "none";

    }


    /* Scroll to shop */

    document.getElementById(
        "shop"
    ).scrollIntoView({

        behavior: "smooth"

    });

}


/* CLOSE MODAL WHEN CLICKING OUTSIDE THE MODAL */

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "productModal"
            );


        if (event.target === modal) {

            closeModal();

        }

    }
);
