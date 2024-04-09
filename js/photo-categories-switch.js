import { serverData } from './server-action/connect.js';
import { createPictures } from './render.js';
import { createModal } from './render-modal.js';
import { debounce, getRandomInteger } from './utils.js';

const DEBOUNCE_TIME = 500;

const filterBtns = document.querySelectorAll('.img-filters__button');

let currentFilterIndex = 0;

const filterDiscussed = (data) => {
  const sorted = data.slice().sort((a, b) => b.comments.length - a.comments.length);

  createPictures(sorted);
  createModal(sorted);
};

const filterRandom = (data) => {
  const indexStart = getRandomInteger(0, 15);
  const sorted = data.slice(indexStart, indexStart + 10);

  createPictures(sorted);
  createModal(sorted);
};

const filterDefualt = (data) => {
  createPictures(data);
  createModal(data);
};

const deleteAllPic = () => document.querySelectorAll('.picture').forEach((el) => el.remove());

const setActiveFilter = (nextCurrentFilterIndex) => {
  filterBtns[currentFilterIndex].classList.remove('img-filters__button--active');
  currentFilterIndex = nextCurrentFilterIndex;
  filterBtns[currentFilterIndex].classList.add('img-filters__button--active');
};

const onBtnFilterClick = debounce((cb, param) => cb(param), DEBOUNCE_TIME);

function onFilterCLick (evt) {
  deleteAllPic();

  switch (evt.target.id) {
    case 'filter-default':
      setActiveFilter(0);
      serverData.then((data) => onBtnFilterClick(filterDefualt, data));
      break;
    case 'filter-random':
      setActiveFilter(1);
      serverData.then((data) => onBtnFilterClick(filterRandom, data));
      break;
    case 'filter-discussed':
      setActiveFilter(2);
      serverData.then((data) => onBtnFilterClick(filterDiscussed, data));
      break;
  }
}

const loadFilterPhotos = () => {
  for (const item of filterBtns) {
    item.addEventListener('click', onFilterCLick);
  }
};

export { loadFilterPhotos };
