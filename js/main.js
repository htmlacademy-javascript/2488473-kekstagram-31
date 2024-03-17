import { createModal } from './render-modal.js';
import { createPictures, picList } from './render.js';
import { loadFormControl } from './form-control/form-control.js';

createPictures();
createModal(picList);
loadFormControl();
