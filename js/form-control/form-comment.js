import { pristineFormOptions } from '../utils.js';


// const inputComment = document.querySelector('.text__description');
//
// const loadCommentValidator = () => {
//   inputComment.addEventListener
// };

const inputComment = document.querySelector('.text__description');
const pristine = new Pristine(document.querySelector('.img-upload__form'), pristineFormOptions);

const checkLength = (value) => value.length <= 140;

const loadCommentValidator = () => {
  pristine.reset();
  pristine.addValidator(inputComment, checkLength, 'Длина комментария больше 140 символов', false);
};

export { loadCommentValidator, unloadCommentValidator };
