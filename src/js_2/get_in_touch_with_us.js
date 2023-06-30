// import throttle from 'lodash.throttle';
// const STORAGE_KEY = 'feedback-form-state';
// const form = document.querySelector('.contact-form');
// const iName = document.querySelector('#fname');
// const iPhone = document.querySelector('#phone');
// const iEmail = document.querySelector('#email');
// const textarea = document.querySelector('.comment');
// const input = document.querySelector('input');

// form.addEventListener('submit', onFormSubmit);

// form.addEventListener('input', throttle(onFormInput, 500));

// let feedbackFormData = {};

// function onFormSubmit(e) {
//   e.preventDefault();

//   e.currentTarget.reset();

//   localStorage.removeItem(STORAGE_KEY);

//   feedbackFormData = {};
// };

// function onFormInput(e) {
//   feedbackFormData[e.target.name] = e.target.value;

//   const data = JSON.stringify(feedbackFormData);

//   localStorage.setItem(STORAGE_KEY, data);

// };

// function textareaInputMessage() {
//   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (savedData.email) {
//     input.value = savedData.email;
//     feedbackFormData.email = savedData.email;
//   }

//   if (savedData.message) {
//     textarea.value = savedData.message;
//     feedbackFormData.message = savedData.message;
//   }
// };

// textareaInputMessage();


import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.contact-form');
const iName = document.querySelector('#fname');
const iPhone = document.querySelector('#phone');
const iEmail = document.querySelector('#email');
const textarea = document.querySelector('.comment');
const input = document.querySelector('input');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let feedbackFormData = {};

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  feedbackFormData = {};
}

function onFormInput(e) {
  const inputName = e.target.name;
  const inputValue = e.target.value;
  feedbackFormData[inputName] = inputValue;

  const data = JSON.stringify(feedbackFormData);
  localStorage.setItem(STORAGE_KEY, data);
}

function textareaInputMessage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData && savedData.email) {
    iEmail.value = savedData.email;
    feedbackFormData.email = savedData.email;
  }

  if (savedData && savedData.firstname) {
    iName.value = savedData.firstname;
    feedbackFormData.firstname = savedData.firstname;
  }

  if (savedData && savedData.phone) {
    iPhone.value = savedData.phone;
    feedbackFormData.phone = savedData.phone;
  }

  if (savedData && savedData.subject) {
    textarea.value = savedData.subject;
    feedbackFormData.subject = savedData.subject;
  }
}

textareaInputMessage();

