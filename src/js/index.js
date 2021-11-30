import '../scss/main.scss';

const buttons = document.querySelectorAll('.festive-button--js');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      dataLayer.push({
        event: 'gaevent',
        category: 'banner_sg_click',
        action: 'FestiveSeason',
        pageType: 'home',
        label: 'dbb click',
      });
    } else if (index === 1) {
      dataLayer.push({
        event: 'gaevent',
        category: 'banner_sg_click',
        action: 'FestiveSeason',
        pageType: 'home',
        label: 'doublebox_left click',
      });
    } else if (index === 2) {
      dataLayer.push({
        event: 'gaevent',
        category: 'banner_sg_click',
        action: 'FestiveSeason',
        pageType: 'home',
        label: 'doublebox_right click',
      });
    }
  });
});
