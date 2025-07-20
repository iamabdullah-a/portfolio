// AOS for scroll animations
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Sticky shrinking header on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    header.style.padding = '20px 20px';
    header.style.boxShadow = '0 6px 15px rgba(0,0,0,0.15)';
  } else {
    header.style.padding = '40px 20px';
    header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  }
});

 window.chatbaseConfig = {
    chatbotId: "JF64T1C2Flr1C4Xv_mSmw"
  };