const regexp = /^#[a-zа-яё0-9]{1,19}$/i;

const inputHashtag = document.querySelector('.text__hashtags');

const getHashtags = () => inputHashtag.value.split(' ');
const hashtags = getHashtags();
const checkHashtagsLength = () => hashtags.length <= 5;

const checkHashtag = (hashtag) => regexp.test(hashtag) && hashtag.endsWith(' ');

const isValidHashtag = () => hashtags.forEach(checkHashtag);

const loadHashtagValidator = () => {
  inputHashtag.addEventListener('input', isValidHashtag);
};

export { loadHashtagValidator };
