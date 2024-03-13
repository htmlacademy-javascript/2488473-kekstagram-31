import { createModal } from './renderModal.js';
import { createPictures, picList } from './render.js';
import { loadFormControl } from './formControl/formControl.js';

createPictures();
createModal(picList);
loadFormControl();
