const swiperSlide = document.querySelectorAll('.promotions-slide');

swiperSlide.forEach((item) => {
    item.style.height = '100%';
});

new Swiper('.promotions__swiper', {

    pagination: {
        el: '.prom-slide__pagination',
        clickable: true,
    },
    simulateTouch: true,
    dynamicBullets: true,
    slidesPerView: 1.12,
    spaceBetween: 18,
    autoHeight: true,

    breakpoints:{
        700:{
            slidesPerView: 2,
            spaceBetween: 26,
        },
        1000:{
            slidesPerView: 3,
            spaceBetween: 36,
        }
    }
});
