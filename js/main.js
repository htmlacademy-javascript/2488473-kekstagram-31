import { createModal } from './render-modal.js';
import { loadPicture } from './render.js';
import { loadFormControl } from './form-control/form-control.js';
import { getServerData } from './server-action/connect.js';


loadPicture();
getServerData(createModal);
loadFormControl();

