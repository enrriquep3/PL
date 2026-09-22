'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
if (menuButton && navigation) {
  // Without JavaScript, the full navigation remains available.
  document.documentElement.classList.add('js');
  menuButton.hidden = false;
  const setMenu = (isOpen, restoreFocus = false) => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? menuButton.dataset.close : menuButton.dataset.open);
    navigation.classList.toggle('is-open', isOpen);
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));
}

// Native dialog provides keyboard focus management and Escape-to-close.
const shareButton = document.querySelector('[data-share]');
const shareDialog = document.querySelector('#share-dialog');
if (shareButton && shareDialog && typeof shareDialog.showModal === 'function') {
  shareButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.copy-status').textContent = '';
    shareDialog.showModal();
  });
  document.querySelector('[data-close-dialog]').addEventListener('click', () => shareDialog.close());
  shareDialog.addEventListener('click', (event) => {
    const bounds = shareDialog.getBoundingClientRect();
    if (event.target === shareDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) shareDialog.close();
  });
  document.querySelector('[data-copy]').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    const field = document.querySelector('#share-url');
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(field.value);
      status.textContent = button.dataset.success;
    } catch {
      field.focus();
      field.select();
      status.textContent = button.dataset.fallback;
    }
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
