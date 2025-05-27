const navBar = document.getElementById('nav-bar');
const navOptions = document.getElementById('nav-options');
const closeBtn = document.getElementById('close-btn');

navBar.addEventListener('click', () => {
  navOptions.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  navOptions.classList.remove('open');
});