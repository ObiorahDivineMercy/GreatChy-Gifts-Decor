console.log("Welcome to GreatChy Gifts & Decor!");


let selectedProduct = {};


/* PRODUCT MODAL */

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


    /* FLOWERS */

    if (product === "flowers") {

        image.src =
            "images/categories/tailoring materials/Flowers.jpg";

        title.textContent =
            "Flowers";

        price.textContent =
            "₦500 per piece";

        description.textContent =
            "Beautiful decorative flowers perfect for dresses, tailoring and creative designs.";

        selectedProduct = {

            name: "Flowers",

            price: 500,

            image:
                "images/categories/tailoring materials/Flowers.jpg",

            quantity: 1

        };

    }


    /* FLOWER BOUQUETS */

    else if (product === "bouquets") {

        image.src =
            "images/categories/bouquets.jpg";

        title.textContent =
            "Luxury Flower Bouquet";

        price.textContent =
            "₦45,000";

        description.textContent =
            "An elegant flower bouquet perfect for birthdays, anniversaries, celebrations and special surprises.";

        selectedProduct = {

            name: "Luxury Flower Bouquet",

            price: 45000,

            image:
                "images/categories/bouquets.jpg",

            quantity: 1

        };

    }


    /* TEDDY BEAR */

    else if (product === "teddy") {

        image.src =
            "images/categories/teddy-bears.jpg";

        title.textContent =
            "Premium Teddy Bear";

        price.textContent =
            "₦120,000";

        description.textContent =
            "A soft luxury teddy bear gift designed to make every celebration memorable.";

        selectedProduct = {

            name: "Premium Teddy Bear",

            price: 120000,

            image:
                "images/categories/teddy-bears.jpg",

            quantity: 1

        };

    }


    /* BALLOONS */

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

            image:
                "images/featured/balloons.jpg",

            quantity: 1

        };

    }


    /* FLOWER VASE */

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

            image:
                "images/featured/vase.jpg",

            quantity: 1

        };

    }


    /* APLIQUE */

    else if (product === "aplique") {

        image.src =
            "images/categories/tailoring materials/Aplique.jpg";

        title.textContent =
            "Aplique";

        price.textContent =
            "₦10,000 per yard";

        description.textContent =
            "Beautiful decorative aplique material suitable for tailoring, dresses and creative fashion designs.";

        selectedProduct = {

            name: "Aplique",

            price: 10000,

            image:
                "images/categories/tailoring materials/Aplique.jpg",

            quantity: 1

        };

    }


    /* FRINGE */

    else if (product === "fringe") {

        image.src =
            "images/categories/tailoring materials/Fringe.jpg";

        title.textContent =
            "Fringe";

        price.textContent =
            "20-inch — ₦2,500 per yard";

        description.textContent =
            "20-inch decorative fringe material suitable for dresses, tailoring and fashion embellishments.";

        selectedProduct = {

            name: "Fringe",

            price: 2500,

            image:
                "images/categories/tailoring materials/Fringe.jpg",

            quantity: 1

        };

    }


    /* ABA LINEN */

    else if (product === "aba-linen") {

        image.src =
            "images/categories/tailoring materials/Aba Linen.jpg";

        title.textContent =
            "Aba Linen";

        price.textContent =
            "₦500 per yard";

        description.textContent =
            "Aba Linen suitable for tailoring and creative fashion designs.";

        selectedProduct = {

            name: "Aba Linen",

            price: 500,

            image:
                "images/categories/tailoring materials/Aba Linen.jpg",

            quantity: 1

        };

    }


    /* MP4 LINEN */

    else if (product === "mp4-linen") {

        image.src =
            "images/categories/tailoring materials/MP4 Linen.jpg";

        title.textContent =
            "MP4 Linen";

        price.textContent =
            "₦500 per yard";

        description.textContent =
            "MP4 Linen suitable for tailoring and creative fashion designs.";

        selectedProduct = {

            name: "MP4 Linen",

            price: 500,

            image:
                "images/categories/tailoring materials/MP4 Linen.jpg",

            quantity: 1

        };

    }


    /* MBJ LINEN */

    else if (product === "mbj-linen") {

        image.src =
            "images/categories/tailoring materials/MBJ Linen.jpg";

        title.textContent =
            "MBJ Linen";

        price.textContent =
            "₦1,000 per yard";

        description.textContent =
            "MBJ Linen suitable for tailoring and creative fashion designs.";

        selectedProduct = {

            name: "MBJ Linen",

            price: 1000,

            image:
                "images/categories/tailoring materials/MBJ Linen.jpg",

            quantity: 1

        };

    }


    /* SATIN */

    else if (product === "satin") {

        image.src =
            "images/categories/tailoring materials/Satin.jpg";

        title.textContent =
            "Satin";

        price.textContent =
            "₦1,200 per yard";

        description.textContent =
            "Smooth and elegant satin material suitable for dresses, tailoring and creative fashion designs.";

        selectedProduct = {

            name: "Satin",

            price: 1200,

            image:
                "images/categories/tailoring materials/Satin.jpg",

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


/* FILTER PRODUCTS */

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
            product.dataset.category.split(" ");


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


    if (visibleProducts === 0) {

        noProductsMessage.style.display =
            "block";

    }

    else {

        noProductsMessage.style.display =
            "none";

    }


    document.getElementById(
        "shop"
    ).scrollIntoView({

        behavior: "smooth"

    });

}


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

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

/* CONTACT FORM */

emailjs.init("nFYQVCi2At8vVBwFd");

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

    emailjs.sendForm(
        "service_mhv9r46",
        "template_lieq7sh",
        this
)
            .then(function () {

                alert(
                    "Message sent successfully! ❤️"
                );

                contactForm.reset();

            })
            .catch(function (error) {

                console.error(
                    "Email error:",
                    error
                );

                alert(
                    "Sorry, your message could not be sent. Please try again."
                );

            });
        }
    );
}