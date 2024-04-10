import { onClickCancel } from './form-control/form-control.js';

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
  const errorFragment = errorTemplate.cloneNode(true);
  document.body.append(errorFragment);

  setTimeout(() => {
    errorFragment.remove();
  },
  5000);
};

const alertPostSuccess = () => {
  const successFragment = document.querySelector('#success').content.querySelector('.success');
  const successClone = successFragment.cloneNode(true);
  const successCloneInner = successClone.querySelector('.success__inner');
  document.body.appendChild(successClone);

  function onClickCloseSuccess () {
    document.body.removeChild(successClone);
    document.removeEventListener('keydown', onKeydownClose);
    document.addEventListener('keydown', onClickCancel);
  }

  function onKeydownClose (evt) {
    if (isEscape(evt)) {
      onClickCloseSuccess();
    }
  }

  const onClickStopProp = (evt) => {
    evt.stopPropagation();
  };

  const closeBtn = successClone.querySelector('.success__button');

  document.addEventListener('keydown', onKeydownClose);
  closeBtn.addEventListener('click', onClickCloseSuccess);
  successClone.addEventListener('click', onClickCloseSuccess);
  successCloneInner.addEventListener('click', onClickStopProp);
};

const alertPostError = () => {
  const errorFragment = document.querySelector('#error').content.querySelector('.error');
  const errorClone = errorFragment.cloneNode(true);
  const errorCloneInner = errorClone.querySelector('.error__inner');
  document.body.appendChild(errorClone);

  function onClickCloseError () {
    document.body.removeChild(errorClone);
    document.removeEventListener('keydown', onKeydownClose);
    document.addEventListener('keydown', onClickCancel);
  }

  function onKeydownClose (evt) {
    if (isEscape(evt)) {
      onClickCloseError();
    }
  }

  const onClickStopProp = (evt) => {
    evt.stopPropagation();
  };

  const closeBtn = errorClone.querySelector('.error__button');

  document.addEventListener('keydown', onKeydownClose);
  closeBtn.addEventListener('click', onClickCloseError);
  errorClone.addEventListener('click', onClickCloseError);
  errorCloneInner.addEventListener('click', onClickStopProp);
};

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { isEscape, alertLoadError, alertPostSuccess, alertPostError, debounce, getRandomInteger};
