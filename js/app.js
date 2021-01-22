// const menuButton = document.querySelector("#menu");
// const navLinks = document.querySelector("#nav-links");

// function showNav() {
//     navLinks.classList.toggle('show-nav-links');
// }

// menuButton.addEventListener("click", showNav);

const menuButton = document.querySelector(".btn-menuToggle");
const navLinks = document.querySelector("#menu");
const menuButtonIcon = document.querySelector('.btn-menuToggle i');
function showNav() {
    navLinks.classList.toggle('show-mobileMenu');
    if(menuButtonIcon.classList == 'fa fa-bars'){
        menuButtonIcon.classList ='fa fa-times';       
    }
    else{
        menuButtonIcon.classList = 'fa fa-bars';
    }
}

menuButton.addEventListener("click", showNav);
