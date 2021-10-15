//

const video = document.querySelector('.slider__video--js');

const videoAnimation = () => {
  const videoBottom = video.getBoundingClientRect().bottom;
  const opacity = (videoBottom * 0.0015).toFixed(1);

  if (opacity >= 1) {
    video.style.opacity = 1;
  } else if (opacity < 0) {
    video.style.opacity = 0;
  } else {
    video.style.opacity = opacity;
  }
};

document.addEventListener('scroll', videoAnimation);
