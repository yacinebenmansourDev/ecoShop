const mobileNavToggle = document.querySelector('[data-nav-toggle]');
const navList = document.querySelector('.nav-list');

mobileNavToggle.addEventListener('click', () =>
  navList.classList.toggle('open')
);
