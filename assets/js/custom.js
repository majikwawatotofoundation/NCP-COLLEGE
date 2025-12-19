// Simple Vanilla JS Accordion (no jQuery needed)
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Toggle active class
      item.classList.toggle('active');

      // Close others (optional — remove if you want multiple open)
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
    });
  });
   
   // Navbar Mobile Drawer Toggle
  const burger = document.querySelector('.college-burger');
const drawer = document.querySelector('.college-drawer');
const overlay = document.querySelector('.drawer-overlay');
const closeBtn = document.querySelector('.drawer-close');

function toggleMenu() {
  burger.classList.toggle('active');
  drawer.classList.toggle('open');
  overlay.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
  // overlay.addEventListener('click', toggleDrawer);


});


