const menuToggle = document.getElementById("menu-toggle");
const cerrarMenu = document.getElementById("cerrar-menu");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.add("active");
});

cerrarMenu.addEventListener("click", () => {
    navbar.classList.remove("active");
});