import { createModal } from './render-modal.js';
import { loadPicture } from './render.js';
import { loadFormControl } from './form-control/form-control.js';
import { loadFilterPhotos } from './photo-categories-switch.js';
import { getServerData } from './server-action/connect.js';


getServerData().then((data) => {
  loadPicture(data);
  loadFilterPhotos(data);
  loadFormControl();
  createModal(data);
  loadFilterPhotos(data);
});
