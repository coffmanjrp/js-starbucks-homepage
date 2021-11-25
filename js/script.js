const btn = document.querySelector('#menu-btn');

const navToggle = () => {
  btn.classList.toggle('open');
};

btn.addEventListener('click', navToggle);
