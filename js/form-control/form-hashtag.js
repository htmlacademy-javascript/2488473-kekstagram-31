import { pristineFormOptions } from '../utils.js';

const regexp = /^#[a-zа-яё0-9]{1,19}$/i;

const submitBtn = document.querySelector('.img-upload__submit');

const inputHashtag = document.querySelector('.text__hashtags');
const pristine = new Pristine(document.querySelector('.img-upload__form'), pristineFormOptions);

const checkHashtagsLength = (array) => array.trim().split(' ').length <= 5;

const checkEveryHashtag = (array) => array.trim().split(' ').every((element) => element.startsWith('#') && regexp.test(element) && element !== '#');

const checkDuplicate = (array) => (new Set(array.trim().split(' ')).size === array.trim().split(' ').length);

const blockSendBtn = (evt) => {
  const result = evt.target.value;

  if (checkHashtagsLength(result) && checkEveryHashtag(result) && checkDuplicate(result)) {
    submitBtn.disabled = false;
    pristine.reset();
  } else {
    submitBtn.disabled = true;
  }
};

const loadHashtagValidator = () => {
  pristine.reset();

  pristine.addValidator(inputHashtag, checkHashtagsLength, 'Превышено количество хэштегов', false);
  pristine.addValidator(inputHashtag, checkEveryHashtag, 'Введён невалидный хэштег', false);
  pristine.addValidator(inputHashtag, checkDuplicate, 'Хэштеги повторяются', false);

  inputHashtag.addEventListener('input', blockSendBtn);
};

const unloadHashtagValidator = () => {
  inputHashtag.removeEventListener('input', blockSendBtn);
};

export { loadHashtagValidator, unloadHashtagValidator };
