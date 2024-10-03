// Back to Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// GSAP Animations
gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".hero-heading", { duration: 1.5, opacity: 0, y: 50, ease: "power3.out", delay: 0.5 });
gsap.from(".hero-heading span", { duration: 1.5, opacity: 0, scale: 0.8, delay: 1.0 });
gsap.from(".btn", { duration: 2, opacity: 0, y: 20, ease: "power3.out", delay: 1.5 });

gsap.from(".section-heading", {
  scrollTrigger: ".section-heading",
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  stagger: 0.3
});

gsap.from("p", {
  scrollTrigger: "p",
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  stagger: 0.3
});

gsap.from(".portfolio-item", {
  scrollTrigger: ".portfolio-item",
  duration: 1.5,
  opacity: 0,
  scale: 0.9,
  ease: "power3.out",
  stagger: 0.2
});

// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
