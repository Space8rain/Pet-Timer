// Constants
const number = document.querySelectorAll('.number');
const mainTitle = document.querySelector('.title');
const btnCustom = document.querySelector('.btn-customize');
const customCountdown = document.querySelector('.custom-countdown');
const customForm = document.querySelector('.customize');
const customDateValue = document.querySelector('.custom-date');
const btnClosePopup = document.querySelector('.btn-close-popup');
const btnSumbit = document.querySelector('.btn-submit');

// Get today date
const today = new Date();

// Calc next year date 
const nextYear = new Date(`01/01/${today.getFullYear() + 1}`);

// Variables for calc
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Dinamic change title
mainTitle.textContent = `Until the New Year ${today.getFullYear() + 1}:`;

function countDown () {
  // Calc difference between next year and today
  let timeSpan = nextYear - Date.now();

  const days = Math.floor(timeSpan / day);
  number[0].textContent = days;

  const hours = Math.floor((timeSpan % day) / hour);
  number[1].textContent = hours;

  const minutes = Math.floor((timeSpan % hour) / minute);
  number[2].textContent = minutes;

  const seconds = Math.floor((timeSpan % minute) / second);
  number[3].innerText = seconds;
};

setInterval(countDown, second);

// Listeners----------------------------------------------

// Open Popup
btnCustom.addEventListener('click', () => customCountdown.classList.toggle('is-active'))

// Close Popup
btnClosePopup.addEventListener('click', () => {
  customCountdown.classList.remove('is-active');
  customDateValue.value = '';
})

// Submit form with new data
customForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(customDateValue.value);

})
