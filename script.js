const menuActive = document.querySelector('.menu');
const burgerMenu = document.querySelector('.btnMenuBurger')

function toggleMenu() {
    menuActive.classList.toggle('hiddenMenu');
}

burgerMenu.addEventListener('click', toggleMenu);