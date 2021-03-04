let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.button-contact');
let closePopupButton = document.querySelector('.popup-close');
let formContact = popup.querySelector('.contact-form');
let formOutput = popup.querySelector('.form-output');
let formName = popup.querySelector('.form-name');
let formEmail = popup.querySelector('.form-email');
let formMessage = popup.querySelector('.form-message .form-message-field');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('hide-popup');
  popup.classList.add('show-popup');
  formName.focus();
});

closePopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('show-popup');
  popup.classList.add('hide-popup');
});


document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('show-popup')) {
      popup.classList.remove('show-popup');
      popup.classList.add('hide-popup');
    }
  }
});

formContact.addEventListener("submit", function (evt) {
  if (!formName.value || !formEmail.value || !formMessage) {
    formName.classList.remove('invalid-value');
    formEmail.classList.remove('invalid-value');
    formMessage.classList.remove('invalid-value');
    evt.preventDefault();
    if (formName.value == '') {
      formName.classList.add('invalid-value');
    }
    if (formEmail.value == '') {
      formEmail.classList.add('invalid-value');
    }
    if (formMessage.value == '') {
      formMessage.classList.add('invalid-value');
    }
  } else {
    evt.preventDefault();
    popup.classList.remove('show-popup');
    popup.classList.add('hide-popup');
    formName.value = '';
    formEmail.value = '';
    formMessage.value = '';
    formName.classList.remove('invalid-value');
    formEmail.classList.remove('invalid-value');
    formMessage.classList.remove('invalid-value');
  }
});

