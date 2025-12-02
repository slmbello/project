// Make product cards clickable → dynamic product page
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.id;
        window.location.href = `product.html?id=${id}`;
    });
});

// SEARCH FILTER
const searchInput = document.querySelector(".search-box input");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {
    const term = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(term) ? "" : "none";
    });
});
