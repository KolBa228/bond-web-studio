
// const validateForm = () => {
//   const isPhoneValid = iPhone.inputmask.isValid();
//   const isNameValid = nameRegex.test(iName.value.trim());
//   const isEmailValid = emailRegex.test(iEmail.value.trim());
//   const isCommentValid = textarea.value.trim().length >= 20;

//   if (isPhoneValid && isNameValid && isEmailValid && isCommentValid) {
//     submitButton.disabled = false;
//   } else {
//     submitButton.disabled = true;
//   }
// };

// document.addEventListener('DOMContentLoaded', function() {
//   Inputmask({ mask: '+44 (999) 999 99 99' }).mask(iPhone);


//   iPhone.addEventListener('input', validateForm);
//   iName.addEventListener('input', validateForm);
//   iEmail.addEventListener('input', validateForm);
//   textarea.addEventListener('input', validateForm);

//   validateForm();

//   form.addEventListener('submit', function(event) {
//     if (!iPhone.inputmask.isValid() || !nameRegex.test(iName.value.trim()) || !emailRegex.test(iEmail.value.trim()) || textarea.value.trim().length < 20) {
//       event.preventDefault();
//       totalErr.style.display = 'unset';
//     }
//   });
// });

// // 

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500));

// let feedbackFormData = {};

// function onFormInput(e) {
//   e.preventDefault();
//   feedbackFormData[e.target.name] = e.target.value;

//   const data = JSON.stringify(feedbackFormData);

//   localStorage.setItem(STORAGE_KEY, data);

//   if (e.target === textarea) {
//     feedbackFormData.message = e.target.value;
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   isBtnDisabledTest();
//   e.currentTarget.reset();
//   form.reset();

//   localStorage.removeItem(STORAGE_KEY);

//   feedbackFormData = {};
// }

// function textareaInputMessage() {
//   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (savedData && savedData.email) {
//     iEmail.value = savedData.email;
//     feedbackFormData.email = savedData.email;
//   }

//   if (savedData && savedData.message) {
//     textarea.value = savedData.message;
//     feedbackFormData.message = savedData.message;
//   }
// }
import throttle from 'lodash.throttle';
import Inputmask from 'inputmask';

const form = document.querySelector('.contact-form');
const iName = document.querySelector('#fname');
const iPhone = document.querySelector('#phone');
const iEmail = document.querySelector('#email');
const textarea = document.querySelector('.comment');
const submitButton = document.querySelector('.sub-btn');
const errorMessage = document.querySelector('#error-message');
const STORAGE_KEY = 'feedback-form-state';

const nameRegex = /^[A-Za-z0-9]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = () => {
  const isPhoneValid = iPhone.inputmask.isValid();
  const isNameValid = nameRegex.test(iName.value.trim());
  const isEmailValid = emailRegex.test(iEmail.value.trim());
  const isCommentValid = textarea.value.trim().length >= 20;

  if (isPhoneValid && isNameValid && isCommentValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  Inputmask({ mask: '+44 (999) 999 99 99' }).mask(iPhone);

  iPhone.addEventListener('input', validateForm);
  iName.addEventListener('input', validateForm);
  textarea.addEventListener('input', validateForm);

  validateForm();

  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData && savedData.name) {
    iName.value = savedData.name;
  }

  if (savedData && savedData.phone) {
    iPhone.value = savedData.phone;
  }

  if (savedData && savedData.comment) {
    textarea.value = savedData.comment;
  }

  form.addEventListener('submit', onFormSubmit);
  form.addEventListener('input', throttle(onFormInput, 500));
});

let feedbackFormData = {};

function onFormInput(e) {
  e.preventDefault();
  feedbackFormData[e.target.name] = e.target.value;

  const data = JSON.stringify(feedbackFormData);

  localStorage.setItem(STORAGE_KEY, data);

  if (e.target === textarea) {
    feedbackFormData.comment = e.target.value;
  }

  validateForm();
}

function onFormSubmit(e) {
  e.preventDefault();

  if (!iPhone.inputmask.isValid() || !nameRegex.test(iName.value.trim()) || textarea.value.trim().length < 20) {
    errorMessage.textContent = 'Please fill all fields correctly.';
    return;
  }

  form.reset();

  localStorage.removeItem(STORAGE_KEY);


  feedbackFormData = {};


  validateForm();
}


