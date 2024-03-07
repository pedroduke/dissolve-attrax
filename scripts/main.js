const mobile = document.querySelector('.header__nav__mobile i');
const nav = document.querySelector('.header__nav__list');
const items = document.querySelectorAll('.header__nav__item');
const body = document.querySelector('body');
const modal = document.querySelector(".modal");
const btnRegister = document.querySelector(".hero__intro-hello-btn");
const span = document.querySelector(".modal__close");
const nameValue = document.querySelector('.modal__title');
const inputValue = document.querySelector('.modal__input');

function toggleNav() {
  mobile.classList.toggle('fa-bars');
  mobile.classList.toggle('fa-times');
  nav.classList.toggle('nav-active');
  nav.classList.toggle('nav-desactive');
  body.classList.toggle("fixed-position");

  if (nav.classList.contains('nav-desactive')) {
    setTimeout(() => {
      nav.style.display = 'none';
    }, 800);
  } 
  if (nav.classList.contains('nav-active')) {
    nav.style.display = 'block';
  }
  
  items.forEach(element => {
    element.classList.toggle('nav-active-item');
  });
}

mobile.addEventListener('click', function() {
    toggleNav();
});

btnRegister.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function inputName() {
  nameValue.innerHTML = `Welcome, ${inputValue.value}`
}