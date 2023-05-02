const menuToggle = document.querySelector(".navbar__menu-toggle");
const navbarNav = document.querySelector(".navbar__nav");
const iconClose = document.querySelector(".icon_close");
const iconMenu = document.querySelector(".icon_menu");
const navLink = document.querySelectorAll('.nav__link')

menuToggle.addEventListener("click", () => {
    iconMenu.classList.toggle("remove_menu");
    iconClose.classList.toggle("show_close");
    menuToggle.classList.toggle("close");
    navbarNav.classList.toggle("show");
});
navLink.forEach(link => {
    link.addEventListener('click', () => {
        navbarNav.classList.toggle("show");
        iconMenu.classList.toggle("remove_menu");
        iconClose.classList.toggle("show_close");
    })
})