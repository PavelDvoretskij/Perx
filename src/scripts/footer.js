const btn = document.querySelectorAll('.footer__btn');
const menu = document.querySelectorAll('.footer__menu');
const range = document.querySelectorAll('.footer__range');

btn.forEach((item, index)=>{
    item.onclick = function () {
        this.classList.toggle("show-icon");
        menu[index].classList.toggle("hide-list");
    };
});

