const regexp = /^#[a-zа-яё0-9]{1,19}$/i;

const inputHashtag = document.querySelector('.text__hashtags');

// const checkHashtagsLength = () => hashtags.length <= 5;

const isValidHashtag = (evt) => evt.target.value.split(' ').filter((el) => el !== '' && el.startsWith('#') && regexp.test(el));

const loadHashtagValidator = () => {
  inputHashtag.addEventListener('input', isValidHashtag);
};

export { loadHashtagValidator };
