const menuBtns = document.querySelector('.menu-btns');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtns.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtns.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(cur => cur.classList.add('show'));

    showMenu = true;
  } else {
    menuBtns.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(cur => cur.classList.remove('show'));

    showMenu = false;
  }
}
