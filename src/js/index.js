import '../scss/main.scss';

import video from '../assets/video/sale.mp4';

const { url, title, discount, upto, cta } = slider;

const sliderTemplate = `
<header class="sale-slider__header">
    <h2 class="sale-slider__title">${title}</h2>
    <p class="sale-slider__subtitle">
    <span class="sale-slider__span">${upto}</span> -${discount}%
    </p>

    <div class="sale-slider__cta">
    <div class="festive-button festive-button--background">${cta}</div>
    </div>
</header>

<figure class="sale-slider__content">
    <video
    class="sale-slider__video"
    autoplay
    loop
    muted
    playsinline
    preload="none"
    >
    <source src="${video}" type="video/mp4" />
    </video>
</figure>
`;

const sliderLink = document.createElement('a');
sliderLink.innerHTML = sliderTemplate;
sliderLink.classList.add('sale-slider__link');
sliderLink.href = url;
sliderLink.addEventListener('click', () => {
  dataLayer.push({
    event: 'gaevent',
    category: 'banner_sg_click',
    action: 'FestiveSeason',
    pageType: 'home',
    label: 'dbb click',
  });
});

const sliderContainer = document.querySelector('.sale-slider--js');
sliderContainer.appendChild(sliderLink);

// const buttons = document.querySelectorAll('.link--js');

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     switch (index) {
//       case 0:
//         dataLayer.push({
//           event: 'gaevent',
//           category: 'banner_sg_click',
//           action: 'FestiveSeason',
//           pageType: 'home',
//           label: 'dbb click',
//         });
//         break;
//       case 1:
//         dataLayer.push({
//           event: 'gaevent',
//           category: 'banner_sg_click',
//           action: 'FestiveSeason',
//           pageType: 'home',
//           label: 'doublebox_left click',
//         });
//         break;
//       case 2:
//         dataLayer.push({
//           event: 'gaevent',
//           category: 'banner_sg_click',
//           action: 'FestiveSeason',
//           pageType: 'home',
//           label: 'doublebox_right click',
//         });
//         break;
//     }
//   });
// });
