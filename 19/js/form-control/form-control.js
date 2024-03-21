import { isEscape } from '../utils.js';
import { loadCommentValidator } from './form-comment.js';
import { loadFilter, unloadFilter } from './form-filter.js';
import { loadHashtagValidator } from './form-hashtag.js';
import { loadFormScale, unloadFormScale } from './form-scale.js';


const uploadInput = document.querySelector('.img-upload__input');
const uploadOverly = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');

const previewPhoto = document.querySelector('.img-upload__preview > img');


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

const onKeyDownClose = (evt) => {
  if (isEscape(evt)) {
    closeUpload();
  }
};

function unloadDepends () {
  unloadFormScale();
  unloadFilter();
}

function addCancelListener () {
  uploadCancel.addEventListener('click', closeUpload);
  uploadCancel.addEventListener('keydown', onKeyDownClose);
}

function removeCancelListener () {
  uploadCancel.removeEventListener('click', closeUpload);
  uploadCancel.removeEventListener('keydown', onKeyDownClose);
}

const uploadSetImage = (evt) => {
  const reader = new FileReader();
  reader.onload = function () {
    previewPhoto.src = reader.result;
  };
  reader.readAsDataURL(evt.target.files[0]);
};


const onUploadChange = (evt) => {

  openUpload();
  uploadSetImage(evt);

  uploadCancel.focus();
  addCancelListener();

  loadCommentValidator();
  loadHashtagValidator();
  loadFormScale();
  loadFilter();

};


const loadFormControl = () => {
  uploadInput.addEventListener('change', onUploadChange);
};

export { loadFormControl };
