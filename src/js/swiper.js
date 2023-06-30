import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1.2,
    },

    1280: {
      slidesPerView: 2,
    },
  },
  freeMode: true,

  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
