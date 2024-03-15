

// const inputComment = document.querySelector('.text__description');
//
// const loadCommentValidator = () => {
//   inputComment.addEventListener
// };

const inputComment = document.querySelector('.text__description');

const checkLength = (evt) => {
  if (evt.target.value.length <= 140) {
    console.log('ok');
  } else {
    console.log('dont ok');
  };
};

const loadCommentValidator = () => {
  inputComment.addEventListener('input', checkLength);
};

const unloadCommentValidator = () => {
  inputComment.removeEventListener('input', checkLength);
};

export { loadCommentValidator, unloadCommentValidator };

