const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  mobileMenu.classList.toggle('mobile-menu--open');
});

/* Modal */
const modal = document.getElementById('modal');
const openButtons = document.querySelectorAll('#openModal, #openModalHero');
const closeModal = document.getElementById('closeModal');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('theme-light');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('theme-light');

  const isLight = body.classList.contains('theme-light');

  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});