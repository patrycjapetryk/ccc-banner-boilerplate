import '../scss/main.scss';

const buttons = document.querySelectorAll('.festive-button--js');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    dataLayer.push({
      event: 'gaevent',
      category: 'banner_sg_click',
      action: 'FestiveSeason',
      pageType: 'home',
      label: 'dbb click',
    });
    dataLayer.push({
      event: 'gaevent',
      category: 'banner_sg_click',
      action: 'FestiveSeason',
      pageType: 'home',
      label: 'doublebox_left click',
    });
    dataLayer.push({
      event: 'gaevent',
      category: 'banner_sg_click',
      action: 'FestiveSeason',
      pageType: 'home',
      label: 'doublebox_right click',
    });
  });
});
