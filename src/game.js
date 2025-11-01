

import { success, error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


success({ text: 'Правильно!' });
error({ text: 'Ошибка!' });
info({ text: 'Новая игра началась!' });



(() => {
  const keys = ['a','s','d','f','g','h','j','k','l',';'];
  const keyEl = document.getElementById('key');
  const newGameBtn = document.getElementById('newGame');

  let currentKeyIndex = getRandomIndex();

  function getRandomIndex() {
    return Math.floor(Math.random() * keys.length);
  }

  function setCurrentKeyByIndex(i) {
    currentKeyIndex = i;
    keyEl.textContent = keys[currentKeyIndex];
  }


  setCurrentKeyByIndex(currentKeyIndex);


  document.addEventListener('keydown', (e) => {
    const pressed = (e.key || '').toLowerCase();


    if (!pressed) return;

    if (pressed === keys[currentKeyIndex]) {

      if (window.PNotify && window.PNotify.success) {
        PNotify.success({ text: 'Правильно!', delay: 900 });
      } else {
        console.log('Правильно!');
      }
      setCurrentKeyByIndex(getRandomIndex());
    } else {

      if (window.PNotify && window.PNotify.error) {
        PNotify.error({ text: `Неправильно — нужно "${keys[currentKeyIndex]}"`, delay: 1400 });
      } else {
        console.log(`Неправильно — нужно "${keys[currentKeyIndex]}"`);
      }
    }
  });

  
  document.addEventListener('keypress', (e) => {
    e.preventDefault();
  });


  newGameBtn.addEventListener('click', () => {
    setCurrentKeyByIndex(getRandomIndex());
    if (window.PNotify && window.PNotify.info) {
      PNotify.info({ text: 'Новая игра запущена. Жми клавишу!', delay: 1200 });
    }
  });
})();
