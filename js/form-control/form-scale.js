
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const formImg = document.querySelector('.img-upload__preview > img');

const getScalePercent = () => parseFloat(formImg.style.transform.slice(6, -1));

const setScaleValue = (value) => {
  scaleValue.value = `${(value * 100)}%`;
};

const addPercentage = () => {
  if ((getScalePercent() - 0.25 >= 0.25)) {
    formImg.style.transform = `scale(${getScalePercent() - 0.25})`;
    setScaleValue(getScalePercent());
  }
};

const removePercentage = () => {
  if ((getScalePercent() + 0.25 <= 1)) {
    formImg.style.transform = `scale(${getScalePercent() + 0.25})`;
    setScaleValue(getScalePercent());
  }
};

const loadFormScale = () => {
  formImg.style.transform = 'scale(1)';

  scaleSmaller.addEventListener('click', addPercentage);
  scaleBigger.addEventListener('click', removePercentage);
};

const unloadFormScale = () => {
  scaleSmaller.removeEventListener('click', addPercentage);
  scaleBigger.removeEventListener('click', removePercentage);
};

export { loadFormScale, unloadFormScale, setScaleValue };
