import { pristineFormOptions } from '../utils.js';

const submitBtn = document.querySelector('.img-upload__submit');

const inputComment = document.querySelector('.text__description');
const pristine = new Pristine(document.querySelector('.img-upload__form'), pristineFormOptions);

const checkLength = (value) => value.length <= 140;

const blockSendBtn = (evt) => {
  const result = evt.target.value;

  if (checkLength(result)) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const loadCommentValidator = () => {
  pristine.reset();
  pristine.addValidator(inputComment, checkLength, 'Длина комментария больше 140 символов', false);
  inputComment.addEventListener('input', blockSendBtn);
};

const unloadCommentValidator = () => {
  inputComment.removeEventListener('input', blockSendBtn);
};

export { loadCommentValidator, unloadCommentValidator };
