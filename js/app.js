// const menuButton = document.querySelector("#menu");
// const navLinks = document.querySelector("#nav-links");

// function showNav() {
//     navLinks.classList.toggle('show-nav-links');
// }

// menuButton.addEventListener("click", showNav);

const menuButton = document.querySelector("btn-menuToggle");
const navLinks = document.querySelector("#menu");

function showNav() {
    navLinks.classList.toggle('show-nav-links');
}

menuButton.addEventListener("click", showNav);
