let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.button-contact');
let closePopupButton = document.querySelector('.popup-close');
let formContact = popup.querySelector('.contact-form');
let formOutput = popup.querySelector('.form-output');
let formName = popup.querySelector('.form-name');
let formEmail = popup.querySelector('.form-email');
let formMessage = popup.querySelector('.form-message .form-message-field');

let id = null;
function showPopup() {
  var pos = -900;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == -120) {
      clearInterval(id);
    } else {
      pos = pos + 20;
      popup.style.bottom = pos + 'px';
    }
  }
}

function hidePopup() {
  var pos = -120;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == -900) {
      clearInterval(id);
    } else {
      pos = pos - 20;
      popup.style.bottom = pos + 'px';
    }
  }
}

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  formName.focus();
  showPopup();
});

closePopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  hidePopup();
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    hidePopup();
  }
});

formContact.addEventListener("submit", function (evt) {
  if (!formName.value || !formEmail.value || !formMessage.value) {
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
    formName.value = '';
    formEmail.value = '';
    formMessage.value = '';
    formName.classList.remove('invalid-value');
    formEmail.classList.remove('invalid-value');
    formMessage.classList.remove('invalid-value');
    hidePopup();
  }
});

