import { createModal } from './render-modal.js';
import { loadPicture } from './render.js';
import { loadFormControl } from './form-control/form-control.js';
import { insertServerData } from './server-action/connect.js';
import { loadFilterPhotos } from './photo-categories-switch.js';


loadPicture();
insertServerData(createModal);
loadFilterPhotos();
loadFormControl();
