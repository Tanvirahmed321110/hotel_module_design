
// ================ For Offer Slider ================
new Swiper('.offer-slider-items', {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
            nextEl: '.offer-slider-next',
            prevEl: '.offer-slider-prev',
      },
      breakpoints: {
            768: {
                  slidesPerView: 2,
            },
      },
});