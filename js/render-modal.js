const picModal = document.querySelector('.big-picture');
const commentsModal = document.querySelector('.social__comments');

const commentCount = document.querySelector('.social__comment-shown-count');
const commentLoader = document.querySelector('.comments-loader');

const modalPic = document.querySelector('.big-picture__img').getElementsByTagName('img')[0];

let currentIndex = 0;
let globalPicList = {};
let globalIndex = 0;

const onCancelClick = () => {
  currentIndex = 0;
  commentLoader.removeEventListener('click', onLoaderClick);
  picModal.classList.add('hidden');
}

const onCancelKeyDown = (e) => {
  currentIndex = 0;
  if (e.code == 'Escape') { picModal.classList.add('hidden'); commentLoader.removeEventListener('click', onLoaderClick);};
}

const onLoaderClick = () => {
  const slicedArray = sliceComment(globalPicList[globalIndex].comments);
  generateComment(slicedArray, currentIndex);
  currentIndex++;
  commentCount.text = `${getCountComment()}`;
}

const getCountComment = () => document.querySelectorAll('.social__comment').length;

const generateComment = (slicedArray, index) => {
  for (const comment of slicedArray[index]) {
    const elemComment = document.createElement('li');
    elemComment.classList.add('social__comment');
    const imgComment = document.createElement('img');
    imgComment.classList.add('social__picture');
    imgComment.src = comment.avatar;
    imgComment.alt = comment.name;
    imgComment.width = '35';
    imgComment.height = '35';
    elemComment.appendChild(imgComment);

    const textComment = document.createElement('p');
    textComment.classList.add('social__text');
    textComment.textContent = comment.message;
    elemComment.appendChild(textComment);

    commentsModal.appendChild(elemComment);
  }
};

const sliceComment = (array) => {
  let currentSlice = 0;
  const outputArray = [];
  for (let i = 1; i <= Math.ceil(array.length / 5); i++) {
    outputArray.push(array.slice(currentSlice, currentSlice + 5));
    currentSlice += 5;
  }
  return outputArray;
};

const createModal = (picList) => {
  globalPicList = picList;
  const picMini = document.querySelectorAll('.picture');
  commentCount.text = `${getCountComment()}`;
  for (let [index, item] of picMini.entries()) {
  item.addEventListener('click', (evt) => {
    commentsModal.innerHTML = '';
    picModal.classList.remove('hidden');
    modalPic.src = evt.target.src;
    document.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
    
    // add comment to Modal
    const slicedArray = sliceComment(picList[index].comments);
    generateComment(slicedArray, currentIndex);
    currentIndex++;
    commentCount.text = `${getCountComment()}`;

    document.body.classList.add('modal-open');  

    globalIndex = index;
    commentLoader.addEventListener('click', onLoaderClick);

  const picCancel = document.querySelector('#picture-cancel');
  picCancel.focus();
  picCancel.addEventListener('click', onCancelClick);
  picCancel.addEventListener('keydown', onCancelKeyDown);
  })};}

export {createModal}
