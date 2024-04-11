
const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(document.querySelector('.img-upload__form'), {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const inputHashtag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

const makeFormatHashtags = (value) => value.toLowerCase().trim().split(' ').filter((el) => el !== '');

const checkHashtagsLength = (value) => makeFormatHashtags(value).length <= 5;
const checkEveryHashtag = (value) => makeFormatHashtags(value).every((element) => element.startsWith('#') && REGEXP.test(element) && element !== '#');
const checkDuplicate = (value) => {
  const formattedHashtags = makeFormatHashtags(value);
  return new Set(formattedHashtags).size === formattedHashtags.length;
};

pristine.addValidator(inputHashtag, checkHashtagsLength, 'Превышено количество хэштегов', false);
pristine.addValidator(inputHashtag, checkEveryHashtag, 'Введён невалидный хэштег', false);
pristine.addValidator(inputHashtag, checkDuplicate, 'Хэштеги повторяются', false);

const checkCommentLength = (value) => value.length <= 140;

pristine.addValidator(inputComment, checkCommentLength, 'Длина комментария больше 140 символов', false);


const onInputEmptyCheck = (evt) => {
  if (evt.target.value === '') {
    pristine.reset();
  }
};

const loadFormValidator = () => {

  inputHashtag.addEventListener('input', onInputEmptyCheck);
  inputComment.addEventListener('input', onInputEmptyCheck);

};

const unloadFormValidator = () => {

  inputHashtag.removeEventListener('input', onInputEmptyCheck);
  inputComment.removeEventListener('input', onInputEmptyCheck);

  inputHashtag.value = '';
  inputComment.value = '';

  pristine.reset();

};

export { loadFormValidator, unloadFormValidator };
