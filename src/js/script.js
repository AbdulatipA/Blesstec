//menu
const btn = document.querySelector('.btn__menu'),
      btnClose = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay');
     

function showMenu() {
    menu.classList.toggle('active');
}

function hideMenu() {
    menu.classList.remove('active');
}

btn.addEventListener('click', showMenu);
btnClose.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);

