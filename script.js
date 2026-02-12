/* MENU TOGGLE */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

/* SCROLL ACTIVE LINK & CLOSE MENU */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

function onScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  header.classList.toggle('sticky', scrollY > 80);

  if (navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

/* SCROLL REVEAL */
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    distance: '24px',
    duration: 700,
    easing: 'cubic-bezier(.2,.8,.2,1)',
    delay: 120,
    reset: false
  }).reveal('.home-inner, .section-title, .card, .edu-list li, .cert-list li, .contact-card, .contact-form', {
    interval: 80
  });
}

/* CLOSE NAV WHEN CLICKING OUTSIDE */
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  }
});
