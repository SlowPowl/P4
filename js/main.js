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