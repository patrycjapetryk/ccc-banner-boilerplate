import '../scss/main.scss';

// render slider

import video from '../assets/video/sale.mp4';

const sliderContainer = document.querySelector('.sale-slider--js');

const { url, title, discount, upto, linkEvent } = slider;
const { event, category, action, pageType, label } = linkEvent;

const sliderTemplate = `
<a
  href="${url}"
  class="sale-slider__link"
  onclick="(()=>{
    dataLayer.push({
      event: '${event}',
      category: '${category}',
      action: '${action}',
      pageType: '${pageType}',
      label: '${label}',
    });
  })()"
  >
  <header class="sale-slider__header">
      <h2 class="sale-slider__title">${title}</h2>
      <p class="sale-slider__subtitle">
      <span class="sale-slider__span">${upto}</span> -${discount}%
      </p>
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
</a>
`;

sliderContainer.innerHTML = sliderTemplate;

// render slider navigation

const sliderNavigationContainer = document.querySelector('.slider-nav--js');

const navigationTemplate = sliderNavigation
  .map((item) => {
    const { url, text, linkEvent } = item;
    const { event, category, action, pageType, label } = linkEvent;

    return `
    <a
      href="${url}"
      class="slider-nav__button slider-nav__button--background"
      onclick="(()=>{
        dataLayer.push({
          event: '${event}',
          category: '${category}',
          action: '${action}',
          pageType: '${pageType}',
          label: '${label}',
        });
      })()"
    >
      ${text}
    </a>`;
  })
  .join('');

sliderNavigationContainer.innerHTML = navigationTemplate;
