const menuButton = document.querySelector("#menu");
const navLinks = document.querySelector("#nav-links");

function showNav() {
    navLinks.classList.toggle('show-nav-links');
}

menuButton.addEventListener("click", showNav);