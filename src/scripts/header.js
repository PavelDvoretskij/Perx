const headerHeight = document.querySelector('.header').offsetHeight;
const head = document.querySelector('.header');
const position = () => window.scrollY;

let startScroll = 0;

document.documentElement.style.setProperty(`--height`, `${headerHeight}px`);

window.addEventListener('scroll', () => {
    const containHide = head.classList.contains('hide');
    if (position() > startScroll && !containHide) {
        head.classList.add('hide');
    } else if (position() < startScroll && containHide) {
        head.classList.remove('hide');
    }
    startScroll = position();
});
