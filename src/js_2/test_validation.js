
// // // // textareaInputMessage();

// // // import { functions } from 'lodash';
// // import throttle from 'lodash.throttle';

// // const form = document.querySelector('.contact-form');
// // const iName = document.querySelector('#fname');
// // const iPhone = document.querySelector('#phone');
// // const iEmail = document.querySelector('#email');
// // const textarea = document.querySelector('.comment');
// // const submitButton = document.querySelector('.sub-btn');
// // const errorMessage = document.querySelector('#error-message');
// // const STORAGE_KEY = 'feedback-form-state';

// // const nameErr = document.querySelector('.name-err');

// // const commErr = document.querySelector('.comment-err');

// // function testErrN() {
// //     if (iName.value.length >= 3) {
// //         unShowNameErr()
// //     } else {
// //         showNameErr()
// //     }
// // };

// // function showNameErr() {
// //     if (iName.value.length <= 3) {
// //         nameErr.style.display = "unset";
// //     }
// // };

// // function unShowNameErr() {
// //     if (iName.value.length <= 3) {
// //         nameErr.style.display = "none";
// //     }
// // };

// // function showCommentErr() {
// //     if (textarea.value.length <= 20) {
// //         commErr.style.display = "unset";
// //     }
// // };

// // function unShowCommentErr() {
// //     if (textarea.value.length <= 20) {
// //         commErr.style.display = "none";
// //     }
// // };

// // form.addEventListener('submit', onFormSubmit);
// // form.addEventListener('input', throttle(onFormInput, 500));

// // let feedbackFormData = {};

// // function onFormInput(e) {
// //     e.preventDefault();

// //     testErrN()
   
// //   feedbackFormData[e.target.name] = e.target.value;

// //   const data = JSON.stringify(feedbackFormData);

// //   localStorage.setItem(STORAGE_KEY, data);

// //   isBtnDisabled();
  
// //   if (e.target === textarea) {
// //     feedbackFormData.message = e.target.value;
// //   }
// // }

// // function onFormSubmit(e) {
// //   e.preventDefault();
// //     isBtnDisabledTest();
// //   e.currentTarget.reset();

// //   localStorage.removeItem(STORAGE_KEY);

// //   feedbackFormData = {};

// // //   form.submit();
// // }

// // function textareaInputMessage() {
// //   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

// //   if (savedData && savedData.email) {
// //     iEmail.value = savedData.email;
// //     feedbackFormData.email = savedData.email;
// //   }

// //   if (savedData && savedData.message) {
// //     textarea.value = savedData.message;
// //     feedbackFormData.message = savedData.message;
// //   }
// // }

// // function isBtnDisabled() {
// //   if (
// //     iName.value.length >= 3 &&
// //     iPhone.value.length >= 9 &&
// //     iEmail.value.length >= 3 &&
// //     textarea.value.length >= 20
// //   ) {    submitButton.disabled = false;
// //   } else {
// //       submitButton.disabled = true;
// //   }
// // }

// // // TEST


// // function isBtnDisabledTest() {
// //   if (
// //     iName.value.length < 3 &&
// //     iPhone.value.length < 9 &&
// //     iEmail.value.length < 3 &&
// //     textarea.value.length < 20
// //   ) {
// //       return
// //   }
  
// // };

// // // ВАЛИДАЦИЯ ИМЕНИ
// // iName.addEventListener('input', validateName);

// // function validateName() {
// //   const name = iName.value;
// //   const pattern = /^[A-Za-z]{3,}$/;

// //     if (!pattern.test(name)) {
// //     iName.setCustomValidity('Enter a name consisting only of letters and with a minimum length of 3 characters.');
// //   } else {
// //     iName.setCustomValidity('');
// //   }
// // }

// // // ВАЛИДАЦИЯ EMAIL
// // iEmail.addEventListener('input', validateEmail);

// // function validateEmail() {
// //   const email = iEmail.value;
// //   const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// //   if (!pattern.test(email)) {
// //     iEmail.setCustomValidity('Enter a valid email address.');
// //   } else {
// //     iEmail.setCustomValidity('');
// //   }
// // }

// // // ВАЛИДАЦИЯ НОМЕРА
// // iPhone.addEventListener('input', validatePhone);

// // function validatePhone() {
// //   const phone = iPhone.value;
// //   const pattern = /^[0-9]{9,18}$/;

// //   if (!pattern.test(phone)) {
// //     iPhone.setCustomValidity('Enter a number consisting only of digits and with a minimum length of 9 characters.');
// //   } else {
// //     iPhone.setCustomValidity('');
// //   }
// // }

// // // isBtnDisabled();
// // textareaInputMessage();


// import throttle from 'lodash.throttle';

// const form = document.querySelector('.contact-form');
// const iName = document.querySelector('#fname');
// const iPhone = document.querySelector('#phone');
// const iEmail = document.querySelector('#email');
// const textarea = document.querySelector('.comment');
// const submitButton = document.querySelector('.sub-btn');
// const errorMessage = document.querySelector('#error-message');
// const STORAGE_KEY = 'feedback-form-state';

// const nameErr = document.querySelector('.name-err');

// function testErrN() {
//   if (iName.value.length >= 3) {
//     unShowNameErr();
//   } else {
//     showNameErr();
//   }
// }

// function showNameErr() {
//   if (iName.value.length <= 3) {
//     nameErr.style.display = "unset";
//   }
// }

// function unShowNameErr() {
//   if (iName.value.length <= 3) {
//     nameErr.style.display = "none";
//   }
// }

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500));

// let feedbackFormData = {};

// function onFormInput(e) {
//   e.preventDefault();

//   unShowNameErr();
//   testErrN();

//   feedbackFormData[e.target.name] = e.target.value;

//   const data = JSON.stringify(feedbackFormData);

//   localStorage.setItem(STORAGE_KEY, data);

//   isBtnDisabled();

//   if (e.target === textarea) {
//     feedbackFormData.message = e.target.value;
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   isBtnDisabledTest();
//   e.currentTarget.reset();

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

// function isBtnDisabled() {
//   if (
//     iName.value.length >= 3 &&
//     iPhone.value.length >= 9 &&
//     iEmail.value.length >= 3 &&
//     textarea.value.length >= 20
//   ) {
//     submitButton.disabled = false;
//   } else {
//     submitButton.disabled = true;
//   }
// }

// function isBtnDisabledTest() {
//   if (
//     iName.value.length < 3 ||
//     iPhone.value.length < 9 ||
//     iEmail.value.length < 3 ||
//     textarea.value.length < 20
//   ) {
//     return;
//   }
// }

// // ВАЛИДАЦИЯ ИМЕНИ
// iName.addEventListener('input', validateName);

// function validateName() {
//   const name = iName.value;
//   const pattern = /^[A-Za-z]{3,}$/;

//   if (!pattern.test(name)) {
//     iName.setCustomValidity('Enter a name consisting only of letters and with a minimum length of 3 characters.');
//   } else {
//     iName.setCustomValidity('');
//   }
// }

// // ВАЛИДАЦИЯ EMAIL
// iEmail.addEventListener('input', validateEmail);

// function validateEmail() {
//   const email = iEmail.value;
//   const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

//   if (!pattern.test(email)) {
//     iEmail.setCustomValidity('Enter a valid email address.');
//   } else {
//     iEmail.setCustomValidity('');
//   }
// }

// // ВАЛИДАЦИЯ НОМЕРА

// iPhone.addEventListener('keydown', restrictNonNumericInput);
// iPhone.addEventListener('input', cleanNonNumericInput);
// iPhone.addEventListener('input', validatePhone);

// function restrictNonNumericInput(event) {
//   const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', 'Backspace'];
//   const keyPressed = event.key;
  
//   if (!allowedKeys.includes(keyPressed)) {
//     event.preventDefault();
//   }
// }

// function cleanNonNumericInput() {
//   let phone = iPhone.value;
//   phone = phone.replace(/[^0-9+]/g, ''); // Удалить все символы, кроме цифр и "+"
//   iPhone.value = phone;
// }

// function validatePhone() {
//   let phone = iPhone.value;
//   const pattern = /^[0-9]{9,18}$/;

//   if (!pattern.test(phone)) {
//     iPhone.setCustomValidity('Enter a number consisting only of digits and with a minimum length of 9 characters.');
//   } else {
//     iPhone.setCustomValidity('');
//   }
// }

// textareaInputMessage();

import throttle from 'lodash.throttle';

const form = document.querySelector('.contact-form');
const iName = document.querySelector('#fname');
const iPhone = document.querySelector('#phone');
const iEmail = document.querySelector('#email');
const textarea = document.querySelector('.comment');
const submitButton = document.querySelector('.sub-btn');
const errorMessage = document.querySelector('#error-message');
const STORAGE_KEY = 'feedback-form-state';

const nameErr = document.querySelector('.name-err');

function testErrN() {
  if (iName.value.length >= 3) {
    unShowNameErr();
  } else {
    showNameErr();
  }
}

function showNameErr() {
  if (iName.value.length <= 3) {
    nameErr.style.display = "unset";
  }
}

function unShowNameErr() {
  if (iName.value.length <= 3) {
    nameErr.style.display = "none";
  }
}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let feedbackFormData = {};

function onFormInput(e) {
  e.preventDefault();

  unShowNameErr();
  testErrN();

  feedbackFormData[e.target.name] = e.target.value;

  const data = JSON.stringify(feedbackFormData);

  localStorage.setItem(STORAGE_KEY, data);

  isBtnDisabled();

  if (e.target === textarea) {
    feedbackFormData.message = e.target.value;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  isBtnDisabledTest();
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);

  feedbackFormData = {};
}

function textareaInputMessage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData && savedData.email) {
    iEmail.value = savedData.email;
    feedbackFormData.email = savedData.email;
  }

  if (savedData && savedData.message) {
    textarea.value = savedData.message;
    feedbackFormData.message = savedData.message;
  }
}

function isBtnDisabled() {
  if (
    iName.value.length >= 3 &&
    iPhone.value.length >= 9 &&
    iEmail.value.length >= 3 &&
    textarea.value.length >= 20
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function isBtnDisabledTest() {
  if (
    iName.value.length < 3 ||
    iPhone.value.length < 9 ||
    iEmail.value.length < 3 ||
    textarea.value.length < 20
  ) {
    return;
  }
}

// ВАЛИДАЦИЯ ИМЕНИ
iName.addEventListener('input', validateName);

function validateName() {
  const name = iName.value;
  const pattern = /^[A-Za-z]{3,}$/;

  if (!pattern.test(name)) {
    iName.setCustomValidity('Enter a name consisting only of letters and with a minimum length of 3 characters.');
  } else {
    iName.setCustomValidity('');
  }
}

// ВАЛИДАЦИЯ EMAIL
iEmail.addEventListener('input', validateEmail);

function validateEmail() {
  const email = iEmail.value;
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!pattern.test(email)) {
    iEmail.setCustomValidity('Enter a valid email address.');
  } else {
    iEmail.setCustomValidity('');
  }
}

// ВАЛИДАЦИЯ НОМЕРА
iPhone.addEventListener('keydown', restrictNonNumericInput);
iPhone.addEventListener('input', cleanNonNumericInput);
iPhone.addEventListener('input', validatePhone);

function restrictNonNumericInput(event) {
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', 'Backspace'];
  const keyPressed = event.key;
  
  if (!allowedKeys.includes(keyPressed)) {
    event.preventDefault();
  }
}

function cleanNonNumericInput() {
  let phone = iPhone.value;
  phone = phone.replace(/[^0-9+]/g, ''); // Удалить все символы, кроме цифр и "+"
  iPhone.value = phone;
}

function validatePhone() {
  let phone = iPhone.value;
  const pattern = /^[0-9+]{9,18}$/;

  if (!pattern.test(phone)) {
    iPhone.setCustomValidity('Enter a number consisting only of digits and with a minimum length of 9 characters.');
  } else {
    iPhone.setCustomValidity('');
  }
}

textareaInputMessage();

