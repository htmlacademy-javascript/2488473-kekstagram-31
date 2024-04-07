import { createModal } from './render-modal.js';
import { loadPicture } from './render.js';
import { loadFormControl } from './form-control/form-control.js';
import { getServerData } from './server-action/connect.js';
import { loadFilterPhotos } from './photo-categories-switch.js';

const serverData = getServerData();

loadPicture();
loadFilterPhotos();
loadFormControl();

serverData.then((data) => createModal(data));

export { serverData };
