const picModal = document.querySelector('.big-picture');
const commentsModal = document.querySelector('.social__comments');

const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');

const modalPic = document.querySelector('.big-picture__img').getElementsByTagName('img')[0];

const onCancelClick = () => {
  picModal.classList.add('hidden');
}

const onCancelKeyDown = (e) => {
  console.log(e.code);
  if (e.code == 'Escape') { picModal.classList.add('hidden') };
}

const createModal = (picList) => {
  const picMini = document.querySelectorAll('.picture');
  for (let [index, item] of picMini.entries()) {
    console.log(index)
    item.addEventListener('click', (evt) => {
      commentsModal.innerHTML = '';
      picModal.classList.remove('hidden');
      modalPic.src = evt.target.src;
      document.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
      document.querySelector('.social__comment-shown-count').textContent = item.querySelector('.picture__comments').textContent;

      // add comment to Modal
      for (let comment of picList[index].comments) {
        const elemComment = document.createElement("li");
        elemComment.classList.add('social__comment');
        const imgComment = document.createElement("img");
        imgComment.classList.add('social__picture')
        imgComment.src = comment.avatar
        imgComment.alt = comment.name
        imgComment.width = '35'
        imgComment.height = '35'
        elemComment.appendChild(imgComment);

        const textComment = document.createElement("p");
        textComment.classList.add('social__text');
        textComment.textContent = comment.message
        elemComment.appendChild(textComment);

        commentsModal.appendChild(elemComment);
    };

    commentCount.classList.add('hidden');
    commentLoader.classList.add('hidden');
    document.body.classList.add('modal-open');

    const picCancel = document.querySelector('#picture-cancel');
    picCancel.focus();
    picCancel.addEventListener('click', onCancelClick);
    picCancel.addEventListener('keydown', onCancelKeyDown);
  })};}

export {createModal}
