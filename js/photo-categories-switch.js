import { createPictures } from './render.js';
import { loadModalListener } from './render-modal.js';
import { createDebounce, getRandomInteger } from './utils.js';

const DEBOUNCE_TIME = 500;

const filterBtns = document.querySelectorAll('.img-filters__button');


let currentFilterIndex = 0;

const sortFilterDiscussed = (data) => {
  const sorted = data.slice().sort((a, b) => b.comments.length - a.comments.length);

  createPictures(sorted);
  loadModalListener(sorted);
};

const sortFilterRandom = (data) => {
  const indexStart = getRandomInteger(0, 15);
  const sorted = data.slice(indexStart, indexStart + 10);

  createPictures(sorted);
  loadModalListener(sorted);
};

const sortFilterDefualt = (data) => {
  createPictures(data);
  loadModalListener(data);
};

const deleteAllPic = () => document.querySelectorAll('.picture').forEach((el) => el.remove());

const setActiveFilter = (nextCurrentFilterIndex) => {
  filterBtns[currentFilterIndex].classList.remove('img-filters__button--active');
  currentFilterIndex = nextCurrentFilterIndex;
  filterBtns[currentFilterIndex].classList.add('img-filters__button--active');
};

const onBtnFilterClick = createDebounce((cb, param) => cb(param), DEBOUNCE_TIME);


const loadFilterPhotos = (data) => {

  function onClickFilter (evt) {
    deleteAllPic();

    switch (evt.target.id) {
      case 'filter-default':
        setActiveFilter(0);
        onBtnFilterClick(sortFilterDefualt, data);
        break;
      case 'filter-random':
        setActiveFilter(1);
        onBtnFilterClick(sortFilterRandom, data);
        break;
      case 'filter-discussed':
        setActiveFilter(2);
        onBtnFilterClick(sortFilterDiscussed, data);
        break;
    }
  }

  for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', onClickFilter);
  }
};

export { loadFilterPhotos };
