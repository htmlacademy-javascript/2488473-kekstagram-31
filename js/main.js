import { loadModalListener } from './render-modal.js';
import { loadPicture } from './render.js';
import { loadFormControl } from './form-control/form-control.js';
import { loadFilterPhotos } from './photo-categories-switch.js';
import { getServerData } from './server-action/connect.js';


getServerData().then((data) => {
  document.querySelector('.img-filters--inactive').classList.remove('img-filters--inactive');

  loadPicture(data);
  loadFilterPhotos(data);
  loadFormControl();
  loadModalListener(data);

});
