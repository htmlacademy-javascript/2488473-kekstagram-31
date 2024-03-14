const regexp = /^#[a-zа-яё0-9]{1,19}$/i;

const inputHashtag = document.querySelector('.text__hashtags');

const getHashtags = () => inputHashtag.value.split('#').splice('').filter((el) => el !== '');

const checkHashtagsLength = () => getHashtags().length <= 5;

const checkHashtag = (hashtag) => regexp.test(hashtag) && hashtag.endsWith(' ');

const isValidHashtag = () => getHashtags().forEach(element => checkHashtag(element));

const loadHashtagValidator = () => {
  inputHashtag.addEventListener('input', isValidHashtag);
};

export { loadHashtagValidator };
