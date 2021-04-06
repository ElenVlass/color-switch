
import refs from './js/refs';
import {startSwitchColor, stopSwithColor} from './js/switch-color'

const { startBtn, stopBtn } = refs;

startBtn.addEventListener('click', startSwitchColor);

stopBtn.addEventListener('click', stopSwithColor);

