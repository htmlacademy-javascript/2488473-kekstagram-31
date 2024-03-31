
const pristine = new Pristine(document.querySelector('.img-upload__form'), {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const regexp = /^#[a-zа-яё0-9]{1,19}$/i;

const inputHashtag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

const toFormatHashtags = (value) => value.toLowerCase().trim().split(' ');

const checkHashtagsLength = (value) => toFormatHashtags(value).length <= 5;
const checkEveryHashtag = (value) => toFormatHashtags(value).every((element) => element.startsWith('#') && regexp.test(element) && element !== '#');
const checkDuplicate = (value) => {
  const formattedHashtags = toFormatHashtags(value);
  return new Set(formattedHashtags).size === formattedHashtags.length;
};

pristine.addValidator(inputHashtag, checkHashtagsLength, 'Превышено количество хэштегов', false);
pristine.addValidator(inputHashtag, checkEveryHashtag, 'Введён невалидный хэштег', false);
pristine.addValidator(inputHashtag, checkDuplicate, 'Хэштеги повторяются', false);

const checkCommentLength = (value) => value.length <= 140;

pristine.addValidator(inputComment, checkCommentLength, 'Длина комментария больше 140 символов', false);


const checkEmptyValue = (evt) => {
  if (evt.target.value === '') {
    pristine.reset();
  }
};

const loadFormValidator = () => {

  inputHashtag.addEventListener('input', checkEmptyValue);
  inputComment.addEventListener('input', checkEmptyValue);

};

const unloadFormValidator = () => {

  inputHashtag.removeEventListener('input', checkEmptyValue);
  inputComment.removeEventListener('input', checkEmptyValue);

  inputHashtag.value = '';
  inputComment.value = '';

  pristine.reset();

};

export { loadFormValidator, unloadFormValidator };
