import { serverData } from './main.js';
import { createPictures } from './render.js';
import { createModal } from './render-modal.js';
import { debounce, getRandomInteger } from './utils.js';

const DEBOUNCETIME = 500;

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

const callFilter = (filterType) => {
  deleteAllPic();

  switch (filterType) {
    case 'filter-default':
      serverData.then((data) => filterDefualt(data));
      setActiveFilter(0);
      break;
    case 'filter-random':
      serverData.then((data) => filterRandom(data));
      setActiveFilter(1);
      break;
    case 'filter-discussed':
      serverData.then((data) => filterDiscussed(data));
      setActiveFilter(2);
      break;
  }
};

const loadFilterPhotos = () => {
  const onBtnFilterClick = debounce((evt) => callFilter(evt.target.id), DEBOUNCETIME);
  for (const item of filterBtns) {
    item.addEventListener('click', onBtnFilterClick);
  }
};

export { loadFilterPhotos };
