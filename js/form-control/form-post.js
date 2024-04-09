import { setScaleValue } from './form-scale.js';
import { addEffectPreviewPhoto, clearFilter, hideSlider } from './form-filter.js';
import { alertPostSuccess, alertPostError } from '../utils.js';
import { onClickCancel, onKeydownClose } from './form-control.js';

const submitBtn = document.querySelector('.img-upload__submit');

const previewInput = document.querySelector('.img-upload__input');

const previewImg = document.querySelector('.img-upload__preview > img');
const previewHashtag = document.querySelector('.text__hashtags');
const previewComment = document.querySelector('.text__description');

const resetForm = () => {
  setScaleValue(1);
  addEffectPreviewPhoto('none', '');
  clearFilter();
  hideSlider();

  previewImg.style.transform = 'scale(1)';
  previewHashtag.value = '';
  previewComment.value = '';
  previewInput.value = '';
};

const onClickSubmitBtn = (evt) => {
  evt.preventDefault();

  const pristineInputsCheck = document.querySelectorAll('.img-upload__field-wrapper');

  if (!pristineInputsCheck[0].classList.contains('has-danger') && !pristineInputsCheck[1].classList.contains('has-danger')) {
    const formData = new FormData(document.querySelector('.img-upload__form'));
    submitBtn.disabled = true;

    fetch('https://31.javascript.htmlacademy.pro/kekstagram', {method: 'POST', body: formData})
      .then((response) => {
        if (response.ok) {
          resetForm();
          onClickCancel();
          alertPostSuccess();
          submitBtn.disabled = false;
        } else {
          document.removeEventListener('keydown', onKeydownClose);
          alertPostError();
          submitBtn.disabled = false;
        }
      })
      .catch(() => {
        document.removeEventListener('keydown', onKeydownClose);
        alertPostError();
        submitBtn.disabled = false;
      });
  }
};


const loadSendBtn = () => {
  submitBtn.addEventListener('click', onClickSubmitBtn);
};

const unloadSendBtn = () => {
  submitBtn.removeEventListener('click', onClickSubmitBtn);
};

export { loadSendBtn, unloadSendBtn };
