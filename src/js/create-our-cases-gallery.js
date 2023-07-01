import { galleryCases } from '../js/our-cases-gallery';

const listCases = document.querySelector('.our-cases-list');

export function galleryMarkup() {
  let markup = '';

  galleryCases.forEach(caseItem => {
    const { title, description, largeImage, smallImage } = caseItem;

    const itemMarkup = `
      <li class="our-cases-card swiper-slide">
        <img class="cases-big-img" src="${largeImage}" alt="${title}" >
        <img class="cases-small-img" src="${smallImage}" alt="${title}">
        <h3 class="cases-card-title">${title}</h3>
        <p class="cases-card-text">${description}</p>
      </li>
    `;

    markup += itemMarkup;
  });

  listCases.insertAdjacentHTML('beforeend', markup);
}

export { listCases };

