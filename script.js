const mobileMenu = document.getElementById("mobileMenu");
const menu = document.getElementById("menu");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menu.classList.toggle("active");   
})