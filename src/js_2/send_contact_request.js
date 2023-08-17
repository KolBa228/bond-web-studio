// Обработчик события отправки формы
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  if (validateForm(formData)) {
    sendTelegramMessage(formData);
  }
}

function validateForm(formData) {
  //пока что просто тру, потом можем добавить какие то условия
  return true;
}

async function sendTelegramMessage(formData) {
  try {
    const response = await fetch(
      'https://api.telegram.org/bot6492770817:AAFrEKL-AON_t9X1KsUq0dKtb79BWZQ0R0Q/sendMessage',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '-1001934456305',
          text: `
          New Contact Form Submission:
          Name: ${formData.get('firstname')}
          Phone: ${formData.get('phone')}
          Email: ${formData.get('email')}
          Comment: ${formData.get('subject')}
        `,
        }),
      }
    );

    if (response.ok) {
      //пока ничего, потом разберемся, можно тот попап сюда привязать
    } else {
      alert('Failed to send request');
    }
  } catch (error) {
    console.error('error:', error);
  }
}

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', handleSubmit);
