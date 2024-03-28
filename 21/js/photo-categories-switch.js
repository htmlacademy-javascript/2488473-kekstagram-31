import { insertServerData } from './server-action/connect.js';
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

const callFilter = (cb) => {
  deleteAllPic();
  insertServerData(cb);
};

const request1 = () => callFilter(filterDefualt);
const request2 = () => callFilter(filterRandom);
const request3 = () => callFilter(filterDiscussed);

const caller1 = debounce(request1, 500);
const caller2 = debounce(request2, 500);
const caller3 = debounce(request3, 500);

const switchFilter = (evt) => {
  const filterId = evt.target.id;

  switch (filterId) {
    case 'filter-default':
      caller1();
      break;
    case 'filter-random':
      caller2();
      break;
    case 'filter-discussed':
      caller3();
      break;
  }
};

const loadFilterPhotos = () => {
  for (const item of filterBtns) {
    item.addEventListener('click', switchFilter);
  }
};

export { loadFilterPhotos };
