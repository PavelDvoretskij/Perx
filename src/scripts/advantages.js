const swiperSlide = document.querySelectorAll('.advantages-slide');

swiperSlide.forEach((item) => {
    item.style.height = '100%';
});

new Swiper('.advantages__slider', {
    pagination: {
        el: '.advantages__pagination',
        clickable: true,
    },
    simulateTouch: true,
    dynamicBullets: true,
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 18,
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 26,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 36,
        }
    }
});
