
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const form = document.querySelector('.contact-form');
// const iName = document.querySelector('#fname');
// const iPhone = document.querySelector('#phone');
// const iEmail = document.querySelector('#email');
// const textarea = document.querySelector('.comment');
// const submitButton = document.querySelector('.sub-btn');
// const errorMessage = document.querySelector('#error-message');

// iName.addEventListener('input', function () {
//   const inputValue = iName.value.trim();

//   if (inputValue.length < 3 || !/^[a-zA-Z]+$/.test(inputValue)) {
//     iName.setCustomValidity(
//       'The name must be at least 3 letters without spaces or other symbols.'
//     );
//   } else {
//     iName.setCustomValidity('');
//   }
// });

// // iPhone.addEventListener('input', function () {
// //   const inputValue = iPhone.value.trim();

// //   if (!/^\d{11}$/.test(inputValue)) {
// //     iPhone.setCustomValidity(
// //       'Please enter a valid English mobile number (11 digits).'
// //     );
// //   } else {
// //     iPhone.setCustomValidity('');
// //   }
// // });

// iPhone.addEventListener('input', function () {
//   let inputValue = iPhone.value.replace(/\s/g, ''); // Удаляем все пробелы из введенного значения

//   const phoneRegex = /^\d{11}$/;

//   // if (inputValue.length === 14) {
//   //   inputValue = inputValue.slice(0, 3) + ' ' + inputValue.slice(3, 6) + ' ' + inputValue.slice(6); // Добавляем пробелы после третьего и шестого символа
//   // }

//   iPhone.value = inputValue;

//   if (!phoneRegex.test(inputValue)) {
//     iPhone.setCustomValidity(
//       'Please enter a valid English mobile number (11 digits).'
//     );
//   } else {
//     iPhone.setCustomValidity('');
//   }
// });
// // 
// // 
// iEmail.addEventListener('input', function () {
//   const inputValue = iEmail.value.trim();

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailRegex.test(inputValue)) {
//     iEmail.setCustomValidity('Please enter a valid email address.');
//   } else {
//     iEmail.setCustomValidity('');
//   }
// });

// textarea.addEventListener('input', function () {
//   const inputValue = textarea.value.trim();

//   if (inputValue.length < 20) {
//     textarea.setCustomValidity('Please enter at least 20 characters.');
//   } else {
//     textarea.setCustomValidity('');
//   }
// });

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500));

// let feedbackFormData = {};

// function onFormSubmit(e) {
//   e.preventDefault();

//   const isFormValid = validateForm();
//   if (!isFormValid) {
//     errorMessage.textContent = 'Please fill in all fields.';
//     return;
//   }

//   e.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   feedbackFormData = {};
//   submitButton.disabled = true;
// }

// function onFormInput(e) {
//   const inputName = e.target.name;
//   const inputValue = e.target.value;
//   feedbackFormData[inputName] = inputValue;

//   const isFormValid = validateForm();
//   submitButton.disabled = !isFormValid;

//   const data = JSON.stringify(feedbackFormData);
//   localStorage.setItem(STORAGE_KEY, data);
// }

// // function validateForm() {
// //   const { firstname, email, phone, subject } = feedbackFormData;

// //   if (!firstname || !email || !phone || !subject) {
// //     return false;
// //   }

// //   const phoneRegex = /^\d{11}$/;
// //   if (!phone.match(phoneRegex)) {
// //     return false;
// //   }

// //   return true;
// // }

// function validateForm() {
//   const { firstname, email, phone, subject } = feedbackFormData;

//   if (!firstname || !email || !phone || !subject) {
//     return false;
//   }

//   // const phoneWithoutPrefix = phone.replace(phonePrefix, ''); // Удаляем префикс из номера телефона
//   const phoneRegex = /^\d{10}$/; // Обновленное регулярное выражение для 10 цифр

//   // if (!phoneWithoutPrefix.match(phoneRegex)) {
//   //   return false;
//   // }

//   return true;
// }

// function textareaInputMessage() {
//   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (savedData && savedData.email) {
//     iEmail.value = savedData.email;
//     feedbackFormData.email = savedData.email;
//   }

//   if (savedData && savedData.firstname) {
//     iName.value = savedData.firstname;
//     feedbackFormData.firstname = savedData.firstname;
//   }

//   if (savedData && savedData.phone) {
//     iPhone.value = savedData.phone;
//     feedbackFormData.phone = savedData.phone;
//   }

//   if (savedData && savedData.subject) {
//     textarea.value = savedData.subject;
//     feedbackFormData.subject = savedData.subject;
//   }

//   const isFormValid = validateForm();
//   submitButton.disabled = !isFormValid;
// }

// textareaInputMessage();




