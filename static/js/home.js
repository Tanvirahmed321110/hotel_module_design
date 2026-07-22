
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


new Swiper('.recent-search-slider', {
   slidesPerView: 1.15,
   spaceBetween: 12,
   loop: true,
   speed: 4000,
   allowTouchMove: true,
   grabCursor: true,
   observer: true,
   observeParents: true,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      stopOnLastSlide: false,
      waitForTransition: true,
   },
   breakpoints: {
      576: { slidesPerView: 2, spaceBetween: 14 },
      992: { slidesPerView: 3, spaceBetween: 16 },
      1200: { slidesPerView: 4, spaceBetween: 16 },
   },
});


// ================ Trending Destinations ================
const trendingSliders = [];

document.querySelectorAll('.trendign-destinations .trending-slider').forEach((slider) => {
   trendingSliders.push(new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 650,
      grabCursor: true,
      observer: true,
      observeParents: true,
      pagination: {
         el: slider.querySelector('.trending-pagination'),
         clickable: true,
      },
   }));
});

const trendingSection = document.querySelector('.trendign-destinations');

if (trendingSection) {
   const tabButtons = trendingSection.querySelectorAll('.h-tab-btn');
   const tabContents = trendingSection.querySelectorAll('.tab-content');

   tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
         tabButtons.forEach((item) => item.classList.remove('active'));
         tabContents.forEach((item) => item.classList.remove('active'));
         button.classList.add('active');
         tabContents[index]?.classList.add('active');
         trendingSliders[index]?.update();
      });
   });
}
