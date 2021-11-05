const daysElement = document.querySelector('.timer__time--days-js');
const hoursElement = document.querySelector('.timer__time--hours-js');
const minutesElement = document.querySelector('.timer__time--minutes-js');
const secondsElement = document.querySelector('.timer__time--seconds-js');

// Set the date we're counting down to
// const COUNTDOWN_DATE = new Date('Nov 4, 2021 0:00:00').getTime();
const COUNTDOWN_DATE = new Date('Nov 9, 2021 0:00:00').getTime();
// const COUNTDOWN_DATE = new Date('Nov 16, 2021 0:00:00').getTime();

const addZeroBeforeTime = (number) => (number < 10 ? '0' + number : number);

const timer = () => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = COUNTDOWN_DATE - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    // If the count down is finished display 00
    clearInterval(oneSecondInterval);
    daysElement.textContent = `00`;
    hoursElement.textContent = `00`;
    minutesElement.textContent = `00`;
    secondsElement.textContent = `00`;
  } else {
    // Else display the result
    daysElement.textContent = addZeroBeforeTime(days);
    hoursElement.textContent = addZeroBeforeTime(hours);
    minutesElement.textContent = addZeroBeforeTime(minutes);
    secondsElement.textContent = addZeroBeforeTime(seconds);
  }
};

const oneSecondInterval = setInterval(timer, 1000);
