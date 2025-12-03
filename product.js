/* PRODUCT.JS — Dynamic product loader for product.html Loads title, description, images, gallery thumbnails & quantity selection */

/* PRODUCT DATABASE — All product info is stored here */
const PRODUCTS = {
    "chair-modern": {
        title: "Modern Curved Chair",
        price: 120,
        oldPrice: 150,
        desc: "Premium curved chair with ergonomic shaping, soft cushioning and a modern silhouette for luxury interiors.",
        images: [
            "images/chair-modern.jpg",
            "images/chair-yellow.jpg",
            "images/table-wood.jpg"
        ]
    },

    "chair-yellow": {
        title: "Yellow Lounge Chair",
        price: 95,
        oldPrice: 110,
        desc: "Vibrant lounge chair designed with rich padding and smooth fabric for a striking modern interior look.",
        images: [
            "images/chair-yellow.jpg",
            "images/chair-modern.jpg",
            "images/sofa-brown.jpg"
        ]
    },

    "lamp-modern": {
        title: "Modern Table Lamp",
        price: 45,
        oldPrice: 60,
        desc: "Minimalist ambient lamp with warm illumination, perfect for offices, bedrooms and reading spaces.",
        images: [
            "images/lamp-modern.jpg",
            "images/table-wood.jpg",
            "images/sofa-leather.jpg"
        ]
    },

    "sofa-brown": {
        title: "Brown Minimalist Sofa",
        price: 320,
        oldPrice: 380,
        desc: "Minimalist sofa constructed with high-density foam and a hardwood frame for superior comfort and durability.",
        images: [
            "images/sofa-brown.jpg",
            "images/sofa-leather.jpg",
            "images/chair-modern.jpg"
        ]
    },

    "sofa-leather": {
        title: "Premium Leather Sofa",
        price: 460,
        oldPrice: 520,
        desc: "Luxurious full-grain leather sofa handcrafted for durability, elegance and timeless modern appeal.",
        images: [
            "images/sofa-leather.jpg",
            "images/sofa-brown.jpg",
            "images/chair-yellow.jpg"
        ]
    },

    "table-wood": {
        title: "Wooden Dining Table",
        price: 220,
        oldPrice: 260,
        desc: "Hand-crafted oak dining table featuring rich grain patterns and a smooth, durable finish.",
        images: [
            "images/table-wood.jpg",
            "images/lamp-modern.jpg",
            "images/chair-modern.jpg"
        ]
    }
};

/* GET PRODUCT ID FROM URL (example: product.html?id=chair-modern)*/
const params = new URLSearchParams(window.location.search);
let id = params.get("id");

/* Fallback: if someone opens product.html with no id */
if (!id || !PRODUCTS[id]) {
    id = "chair-modern";
}

let product = PRODUCTS[id];

/* UPDATE PAGE CONTENT WITH PRODUCT DATA */

// Update title
document.getElementById("productTitle").textContent = product.title;

// Update price (old price shows crossed out)
document.getElementById("productPrice").innerHTML =
    `$${product.price}.00 <span>$${product.oldPrice}.00</span>`;

// Update description
document.getElementById("productDesc").textContent = product.desc;

// Set main image
const mainImg = document.getElementById("mainImg");
mainImg.src = product.images[0];

/* THUMBNAIL IMAGE GALLERY — Click a thumbnail to update main image */
const thumbRow = document.querySelector(".thumb-row");
thumbRow.innerHTML = ""; // Clear previous thumbs when switching product

product.images.forEach((img, index) => {

    const t = document.createElement("img");
    t.src = img;
    t.classList.add("thumb");

    // First image is active by default
    if (index === 0) t.classList.add("active-thumb");

    // When clicking a thumbnail → change the main image
    t.onclick = () => {
        mainImg.src = img;

        // Remove highlight from other thumbnails
        document.querySelectorAll(".thumb")
            .forEach(a => a.classList.remove("active-thumb"));

        t.classList.add("active-thumb");
    };

    thumbRow.appendChild(t);
});

/* QUANTITY SELECTOR — Simple + and - buttons */
let qty = 1;

function changeQty(n) {
    qty += n;

    // Prevent quantity from going below 1
    if (qty < 1) qty = 1;

    document.getElementById("qty").textContent = qty;
}

/* MORE PRODUCTS — Clicking another item loads its details */
document.querySelectorAll(".more-products-grid .product-card").forEach(card => {
    card.onclick = () => {
        const pid = card.dataset.id;
        window.location.href = "product.html?id=" + pid;
    };
});