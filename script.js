const mobileMenuButton = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav");

mobileMenuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
});
