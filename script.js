// .... script.js
import { translateEnglishToMorse } from './translator.js';

const input = document.getElementById('inputMessage');
const output = document.getElementById('message');


input.addEventListener('change', e => {
  const message = e.target.value;
   output.innerHTML = `${translateEnglishToMorse(message)}`;
})

document.getElementById('clear').addEventListener('click', e => {
  output.innerHTML = '';
})
