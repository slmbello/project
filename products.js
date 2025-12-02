// CLICK PRODUCT TO OPEN product.html
document.querySelectorAll(".product-card").forEach(card => {
    card.onclick = () => {
        const id = card.dataset.id;
        window.location.href = "product.html?id=" + id;
    };
});

// SEARCH FUNCTION
document.getElementById("searchInput").addEventListener("keyup", function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = title.includes(term) ? "" : "none";
    });
});

// FILTER FUNCTION
document.querySelectorAll(".filter").forEach(btn => {
    btn.onclick = () => {

        document.querySelectorAll(".filter").forEach(f => f.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.filter;

        document.querySelectorAll(".product-card").forEach(card => {
            if (category === "all") {
                card.style.display = "";
            } else {
                card.style.display = card.dataset.category === category ? "" : "none";
            }
        });
    };
});
