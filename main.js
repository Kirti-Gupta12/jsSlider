var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        // disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
