
const inputComment = document.querySelector('.text__description');

const checkLength = (evt) => {
  if (evt.target.value.length <= 140) {
    return;
  }
  return false;
};

const loadCommentValidator = () => {
  inputComment.addEventListener('input', checkLength);
};

const unloadCommentValidator = () => {
  inputComment.removeEventListener('input', checkLength);
};

export { loadCommentValidator, unloadCommentValidator };
