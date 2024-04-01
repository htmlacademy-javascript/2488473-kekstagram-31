import { onKeyDownClose as fcOnKeyDownClose } from './form-control/form-control.js';

const isEscape = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...rest), timeoutDelay);
  };
};

const alertLoadError = () => {
  const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  document.body.append(errorTemplate);

  setTimeout(() => {
    errorTemplate.remove();
  },
  5000);
};

const alertPostSuccess = () => {
  const successFragment = document.querySelector('#success').content.querySelector('.success');
  const successClone = successFragment.cloneNode(true);
  const successCloneInner = successClone.querySelector('.success__inner');
  document.body.appendChild(successClone);

  function closeSuccess () {
    document.body.removeChild(successClone);
    document.removeEventListener('keydown', onKeyDownClose);
    document.addEventListener('keydown', fcOnKeyDownClose);
  }

  function onKeyDownClose (evt) {
    if (isEscape(evt)) {
      closeSuccess();
    }
  }

  const stopProp = (evt) => {
    evt.stopPropagation();
  };

  const closeBtn = successClone.querySelector('.success__button');

  document.addEventListener('keydown', onKeyDownClose);
  closeBtn.addEventListener('click', closeSuccess);
  successClone.addEventListener('click', closeSuccess);
  successCloneInner.addEventListener('click', stopProp);
};

const alertPostError = () => {
  const errorFragment = document.querySelector('#error').content.querySelector('.error');
  const errorClone = errorFragment.cloneNode(true);
  const errorCloneInner = errorClone.querySelector('.error__inner');
  document.body.appendChild(errorClone);

  function closeError () {
    document.body.removeChild(errorClone);
    document.removeEventListener('keydown', onKeyDownClose);
  }

  function onKeyDownClose (evt) {
    if (isEscape(evt)) {
      closeError();
    }
  }

  const stopProp = (evt) => {
    evt.stopPropagation();
  };

  const closeBtn = errorClone.querySelector('.error__button');

  document.addEventListener('keydown', onKeyDownClose);
  closeBtn.addEventListener('click', closeError);
  errorClone.addEventListener('click', closeError);
  errorCloneInner.addEventListener('click', stopProp);
};

const randomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { isEscape, alertLoadError, alertPostSuccess, alertPostError, debounce, randomInteger};
