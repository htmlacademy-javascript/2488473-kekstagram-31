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

const closeUpload = () => {
  uploadOverly.classList.add('hidden');
  uploadInput.value = '';
  document.body.classList.remove('modal-open');
  removeCancelListener();
  unloadDepends();
};

const cancelEscInFocus = (evt) => {
  if (isEscape(evt)) {
    evt.stopPropagation();
  }
};

const onKeyDownClose = (evt) => {
  if (isEscape(evt)) {
    closeUpload();
  }
};

function unloadDepends () {
  unloadFormScale();
  unloadFilter();
  unloadSendBtn();
  unloadFormValidator();
}


function addCancelListener () {
  previewHashtag.addEventListener('keydown', cancelEscInFocus);
  previewComment.addEventListener('keydown', cancelEscInFocus);
  uploadCancel.addEventListener('click', closeUpload);
  document.addEventListener('keydown', onKeyDownClose);
}

function removeCancelListener () {
  previewHashtag.removeEventListener('keydown', cancelEscInFocus);
  previewComment.removeEventListener('keydown', cancelEscInFocus);
  uploadCancel.removeEventListener('click', closeUpload);
  document.removeEventListener('keydown', onKeyDownClose);
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


const onUploadChange = (evt) => {

  openUpload();
  uploadSetImage(evt);

  addCancelListener();

  loadFormValidator();
  loadFormScale();
  loadFilter();
  loadSendBtn();

};


const loadFormControl = () => {
  uploadInput.addEventListener('change', onUploadChange);
};

export { loadFormControl, onKeyDownClose };
