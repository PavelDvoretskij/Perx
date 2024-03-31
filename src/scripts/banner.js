new Swiper('.banner__swiper', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    simulateTouch: true,
    dynamicBullets: true,
    initialSlide: 1,
    centeredSlides: true,
});

