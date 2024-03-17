import {createElements} from './mock-data.js';


const picList = createElements();

const picContainer = document.querySelector('.pictures');
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');
const createPictures = () => {
const picContainer = document.querySelector('.pictures');
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');
const createPictures = () => {
  const picList = createElements();
  const picListFragment = document.createDocumentFragment();

  picList.forEach(({url, likes, description, comments}) => {
    const picItem = picTemplate.cloneNode(true);
    const picImg = picItem.querySelector('.picture__img');

    picImg.src = url;
    picImg.alt = description;
    picItem.querySelector('.picture__likes').textContent = likes;
    picItem.querySelector('.picture__comments').textContent = comments.length;
    picListFragment.appendChild(picItem);
  });

  picContainer.appendChild(picListFragment);
};


export {createPictures, picList};

export {createPictures};

