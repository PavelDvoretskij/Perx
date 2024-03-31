const openBtn = document.querySelector('._menu-open');
const menu = document.querySelector('._menu');
const menuBody = document.querySelector('._menu__body');
const body = document.body;

openBtn.addEventListener('click', (e) => {
    menu.classList.add('show-menu');
    menuBody.classList.add('show-menu-body');
    body.classList.add('fixed');
});

menu.addEventListener('click', e => {
    if (e.target.closest('._menu-close') || e.target.classList.contains('mob-menu__bg')) {
        menu.classList.remove('show-menu');
        menuBody.classList.remove('show-menu-body');
        body.classList.remove('fixed');
    }
});

window.addEventListener('keydown', e => {
    if (e.key == 'Escape' && menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        body.classList.remove('fixed');
    }
});
