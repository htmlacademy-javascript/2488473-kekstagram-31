import { alertLoadError } from '../utils.js';

const insertServerData = (onSuccess) => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(onSuccess)
  .catch(() => {
    alertLoadError();
  });

export { insertServerData };
