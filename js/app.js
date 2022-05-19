// Constants
const number = document.querySelectorAll('.number');
const mainTitle = document.querySelector('.title');

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