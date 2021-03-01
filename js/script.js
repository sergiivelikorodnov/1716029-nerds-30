let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.button-contact');
let closePopupButton = document.querySelector('.popup-close');
let formContact = popup.querySelector('.contact-form');
let formOutput = popup.querySelector('.form-output');
let formName = popup.querySelector('.form-name');
let formEmail = popup.querySelector('.form-email');
let formMessage = popup.querySelector('.form-message');

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
    if ( popup.classList.contains("show-popup")) {
    popup.classList.remove('show-popup');
    popup.classList.add('hide-popup');
  }
}
});

 formContact.addEventListener("submit", function (evt) {
  if (formName.value && formEmail.value && formMessage) {
    evt.preventDefault();
    popup.classList.remove('show-popup');
    popup.classList.add('hide-popup');
    console.log('Сообщение отправлено');
    formName.value='';
    formEmail.value='';
    formMessage.value='';
  }else{
    evt.preventDefault();
      }
});

