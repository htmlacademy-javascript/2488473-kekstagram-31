import { setScaleValue } from './form-scale.js';
import { addEffectPreviewPhoto, clearFilter, hiddenSlider } from './form-filter.js';
import { alertPostSuccess, alertPostError } from '../utils.js';

const submitBtn = document.querySelector('.img-upload__submit');

const previewInput = document.querySelector('.img-upload__input');

const previewImg = document.querySelector('.img-upload__preview > img');
const previewHashtag = document.querySelector('.text__hashtags');
const previewComment = document.querySelector('.text__description');

const resetForm = () => {
  setScaleValue(1);
  addEffectPreviewPhoto('none', '');
  clearFilter();
  hiddenSlider();

  previewImg.style.transform = 'scale(1)';
  previewHashtag.value = '';
  previewComment.value = '';
  previewInput.value = '';
};

const blockSubmitBtn = () => {
  submitBtn.disabled = true;
};

const unblockSubmitBtn = () => {
  submitBtn.disabled = false;
};

const onSubmitBtnClick = (evt) => {
  evt.preventDefault();
  blockSubmitBtn();

  const formData = new FormData(document.querySelector('.img-upload__form'));
  fetch('https://31.javascript.htmlacademy.pro/kekstagram', {method: 'POST', body: formData})
    .then((response) => {
      if (response.ok) {
        resetForm();
        alertPostSuccess();
        unblockSubmitBtn();
      } else {
        alertPostError();
        unblockSubmitBtn();
      }
    });
};

const loadSendBtn = () => {
  submitBtn.addEventListener('click', onSubmitBtnClick);
};

const unloadSendBtn = () => {
  submitBtn.removeEventListener('click', onSubmitBtnClick);
};

export { loadSendBtn, unloadSendBtn };
