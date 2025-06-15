// Show/Hide Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Scroll to top on button click
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Apply background image from data-bg-image attribute
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero-cover");
    const bgImage = heroSection.getAttribute("data-bg-image");
    if (bgImage) {
        heroSection.style.backgroundImage = `url('${bgImage}')`;
        heroSection.style.backgroundSize = "cover";
        heroSection.style.backgroundPosition = "center";
        heroSection.style.backgroundRepeat = "no-repeat";
    }
});
