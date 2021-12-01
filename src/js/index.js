import '../scss/main.scss';

const buttons = document.querySelectorAll('.link--js');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    switch (index) {
      case 0:
        dataLayer.push({
          event: 'gaevent',
          category: 'banner_sg_click',
          action: 'FestiveSeason',
          pageType: 'home',
          label: 'dbb click',
        });
        break;
      case 1:
        dataLayer.push({
          event: 'gaevent',
          category: 'banner_sg_click',
          action: 'FestiveSeason',
          pageType: 'home',
          label: 'doublebox_left click',
        });
        break;
      case 2:
        dataLayer.push({
          event: 'gaevent',
          category: 'banner_sg_click',
          action: 'FestiveSeason',
          pageType: 'home',
          label: 'doublebox_right click',
        });
        break;
    }
  });
});
