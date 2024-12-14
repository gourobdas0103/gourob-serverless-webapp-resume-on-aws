document.addEventListener("DOMContentLoaded", function () {
    // Social Links Hover Effects
    const links = document.querySelectorAll(".social-links a");

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#3498db";
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "white";
            link.style.transform = "scale(1)";
        });
    });

    // Section Hover Effects
    const sectionItems = document.querySelectorAll('section ul li');

    sectionItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateX(10px)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateX(0)";
        });
    });
});
