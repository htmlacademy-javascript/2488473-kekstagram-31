import { isEscape } from '../utils.js';
import { loadFilter } from './formFilter.js';
import { loadFormScale } from './formScale.js';


const uploadInput = document.querySelector('.img-upload__input');
const uploadOverly = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');

const previewPhoto = document.querySelector('.img-upload__preview > img');

const uploadOpen = () => {
  uploadOverly.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const uploadClose = () => {
  uploadOverly.classList.add('hidden');
  uploadInput.value = '';
  document.body.classList.remove('modal-open');
  canelRemoveListener();
};

const onKeyDownClose = (evt) => {
  if (isEscape(evt)) {
    uploadClose();
    canelRemoveListener();
  }
};

function cancelAddListener () {
  uploadCancel.addEventListener('click', uploadClose);
  uploadCancel.addEventListener('keydown', onKeyDownClose);
}

function canelRemoveListener () {
  uploadCancel.removeEventListener('click', uploadClose);
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

  uploadOpen();
  uploadSetImage(evt);

  uploadCancel.focus();
  cancelAddListener();

  loadFormScale();
  loadFilter();

};


const loadFormControl = () => {
  uploadInput.addEventListener('change', onUploadChange);
};

export { loadFormControl };
