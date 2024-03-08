const headerMenuButton = document.querySelector('.header__nav__mobile');
const headerMenuIcon = document.querySelector('.header__nav__mobile i');
const headerNavList = document.querySelector('.header__nav__list');
const headerMenuItems = document.querySelectorAll('.header__nav__item');
const body = document.querySelector('body');
const modal = document.querySelector(".modal");
const btnRegister = document.querySelector(".hero__intro-hello-btn");
const modalCloseSpan = document.querySelector(".modal__close");
const nameValue = document.querySelector('.modal__title');
const inputValue = document.querySelector('.modal__input');

function toggleHeaderMenuIcon() {
  headerMenuIcon.classList.toggle('fa-bars');
  headerMenuIcon.classList.toggle('fa-times');

  if (headerMenuIcon.classList.contains('fa-bars')) {
    headerMenuButton.setAttribute('aria-label', 'open menu')
  } else {
    headerMenuButton.setAttribute('aria-label', 'close menu')
  }
}

function toggleNavState() {
  headerNavList.classList.toggle('nav-active');
  headerNavList.classList.toggle('nav-desactive');

  if (headerNavList.classList.contains('nav-desactive')) {
    setTimeout(() => {
      headerNavList.style.display = 'none';
    }, 800);
  } else {
    headerNavList.style.display = 'block';
  }
}

function toggleBodyPosition() {
  body.classList.toggle("fixed-position");
}

function toggleMenuItemClasses() {
  headerMenuItems.forEach(element => {
    element.classList.toggle('nav-active-item');
  });
}

function toggleNav() {
  toggleHeaderMenuIcon();
  toggleNavState();
  toggleBodyPosition();
  toggleMenuItemClasses();
}

headerMenuIcon.addEventListener('click', toggleNav);

function handleRegisterButtonClick() {
  modal.style.display = "block";
  modal.setAttribute('aria-hidden', 'false');
}

btnRegister.addEventListener('click', handleRegisterButtonClick);

function handleModalClose() {
  modal.style.display = "none";
  modal.setAttribute('aria-hidden', 'true');
}

modalCloseSpan.addEventListener('click', handleModalClose);

function updateWelcomeMessage() {
  nameValue.textContent = `Welcome, ${inputValue.value}`;
}

inputValue.addEventListener('keyup', updateWelcomeMessage);

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    handleModalClose();
  }
});
