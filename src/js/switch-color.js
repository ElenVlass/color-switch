import refs from './refs';

const { startBtn, body } = refs;
const COLOR_CHANGE_DELAY = 1000;
let setIntervalId = null;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function startSwitchColor() {
   setIntervalId = setInterval(() => {
        body.style.background = colors[randomIntegerFromInterval(0, 5)];
   }, COLOR_CHANGE_DELAY);
    startBtn.disabled = true;
};

export function stopSwithColor() {
    startBtn.disabled = false;
    clearInterval(setIntervalId);
}