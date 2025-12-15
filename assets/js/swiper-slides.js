document.addEventListener('DOMContentLoaded', () => {
  // Swiper Initialization
 // Academic Programs Swiper Initialization
const programsSwiper = new Swiper('.programsSwiper', {
  slidesPerView: 1.2,        // Shows a bit of the next card on mobile for visual interest
  spaceBetween: 20,         // Consistent gap between cards
  centeredSlides: false,    // Keep left-aligned on larger screens
  loop: true,               // Infinite loop (great if you have 6+ cards)
  grabCursor: true,         // Hand cursor on hover
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',        // Default bullets – matches your design
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // ≥768px (tablets)
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // ≥992px (desktops)
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // ≥1200px (larger desktops – optional bonus)
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  // Optional: Autoplay for subtle movement (uncomment if desired)
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});
   // Testimonials Swiper Initialization – College Version
const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,     // Centers the active slide for a premium feel
  loop: true,               // Seamless looping with 5 testimonials
  grabCursor: true,
  autoplay: {
    delay: 6000,            // Auto-advance every 6 seconds
    disableOnInteraction: false,  // Keeps autoplay running even after user interaction
  },
  pagination: {
    el: '.swiper-pagination',  // Matches the class in the HTML (no custom .testimonials-pagination needed)
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',  // Standard classes (removed custom .testimonials-next/prev)
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',          // Clean slide effect (you can change to 'fade' if preferred)
  speed: 800,               // Smooth transition speed
  // Optional: subtle fade between slides for extra polish
  // fadeEffect: { crossFade: true },
});
  // GLightbox Initialization
//   const lightbox = GLightbox({
//     selector: '.glightbox'
//   });
});


