import { serverData } from './main.js';
import { createPictures } from './render.js';
import { createModal } from './render-modal.js';
import { debounce, randomInteger } from './utils.js';

const filterBtns = document.querySelectorAll('.img-filters__button');

const filterDiscussed = (data) => {
  const sorted = data.sort((a, b) => b.comments.length - a.comments.length);

  createPictures(sorted);
  createModal(sorted);
};

const filterRandom = (data) => {
  const indexStart = randomInteger(0, 15);
  const sorted = data.slice(indexStart, indexStart + 10);

  createPictures(sorted);
  createModal(sorted);
};

const filterDefualt = (data) => {
  createPictures(data);
  createModal(data);
};

const deleteAllPic = () => document.querySelectorAll('.picture').forEach((el) => el.remove());

const callFilter = () => {
  deleteAllPic();
  serverData.then((data) => createPictures(data));
  serverData.then((data) => createModal(data));
};

const loadFilterPhotos = () => {
  for (const item of filterBtns) {
    item.addEventListener('click', callFilter);
  }
};

export { loadFilterPhotos };
