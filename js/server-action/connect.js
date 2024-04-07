import { alertLoadError } from '../utils.js';

const getServerData = () => fetch('https://3.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      document.querySelector('.img-filters--inactive').classList.remove('img-filters--inactive');
      return response.json();
    } else {
      alertLoadError();
    }
  })
  .catch(() => {
    alertLoadError();
  });

export { getServerData };
