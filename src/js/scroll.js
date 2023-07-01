const box = document.querySelectorAll('.scroll-check');

window.addEventListener('scroll', checkImages);

checkImages();

function checkImages() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  box.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('scroll-check');
    } else {
      item.classList.remove('scroll-check');
    }
  });
}
