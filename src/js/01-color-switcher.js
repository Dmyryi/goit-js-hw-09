const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const disablEnable = (isStartDisabled) => {
  startButton.disabled = isStartDisabled;
    stopButton.disabled = !isStartDisabled;
}

startButton.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    // startButton.disabled = true;
    // stopButton.disabled = false;
    disablEnable(true)
  }
});

stopButton.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    disablEnable(false)
  }
});

