import { isEscape } from '../utils.js';
import { loadFilter, unloadFilter } from './form-filter.js';
import { loadSendBtn, unloadSendBtn } from './form-post.js';
import { loadFormScale, unloadFormScale } from './form-scale.js';
import { loadFormValidator, unloadFormValidator } from './form-validate.js';


const uploadInput = document.querySelector('.img-upload__input');
const uploadOverly = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');

const previewPhoto = document.querySelector('.img-upload__preview > img');
const previewEffects = document.querySelectorAll('.effects__preview');

const previewHashtag = document.querySelector('.text__hashtags');
const previewComment = document.querySelector('.text__description');

const openUpload = () => {
  uploadOverly.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const onClickCancel = () => {
  uploadOverly.classList.add('hidden');
  uploadInput.value = '';
  document.body.classList.remove('modal-open');
  document.querySelector('#effect-none').checked = true;
  removeCancelListener();
  unloadDepends();
};

const onKeydownInFocus = (evt) => {
  if (isEscape(evt)) {
    evt.stopPropagation();
  }
};

const onKeydownClose = (evt) => {
  if (isEscape(evt)) {
    onClickCancel();
  }
};

function unloadDepends () {
  unloadFormScale();
  unloadFilter();
  unloadSendBtn();
  unloadFormValidator();
}


function addCancelListener () {
  previewHashtag.addEventListener('keydown', onKeydownInFocus);
  previewComment.addEventListener('keydown', onKeydownInFocus);
  uploadCancel.addEventListener('click', onClickCancel);
  document.addEventListener('keydown', onKeydownClose);
}

function removeCancelListener () {
  previewHashtag.removeEventListener('keydown', onKeydownInFocus);
  previewComment.removeEventListener('keydown', onKeydownInFocus);
  uploadCancel.removeEventListener('click', onClickCancel);
  document.removeEventListener('keydown', onKeydownClose);
}

const setPreviewEffectsPhoto = (photo) => {
  for (const item of previewEffects) {
    item.style.background = `url('${photo}')`;
  }
};

const uploadSetImage = (evt) => {
  const reader = new FileReader();
  reader.onload = function () {
    previewPhoto.src = reader.result;
    setPreviewEffectsPhoto(reader.result);
  };
  reader.readAsDataURL(evt.target.files[0]);
};


const onChangeUpload = (evt) => {

  openUpload();
  uploadSetImage(evt);

  addCancelListener();

  loadFormValidator();
  loadFormScale();
  loadFilter();
  loadSendBtn();

};

const loadFormControl = () => {
  uploadInput.addEventListener('change', onChangeUpload);
};

export { loadFormControl, onKeydownClose, onClickCancel };
