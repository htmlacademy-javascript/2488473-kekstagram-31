
const SCALESTEP = 25;
const SCALEMAX = 100;

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const formImg = document.querySelector('.img-upload__preview > img');

const getScalePercent = () => parseFloat(formImg.style.transform.slice(6, -1));

const setScaleValue = (value) => {
  scaleValue.value = `${(value * 100)}%`;
};

const onClickAddPercentage = () => {
  if ((getScalePercent() - (SCALESTEP / 100) >= (SCALESTEP / 100))) {
    formImg.style.transform = `scale(${getScalePercent() - (SCALESTEP / 100)})`;
    setScaleValue(getScalePercent());
  }
};

const onClickRemovePercentage = () => {
  if ((getScalePercent() + (SCALESTEP / 100) <= (SCALEMAX / 100))) {
    formImg.style.transform = `scale(${getScalePercent() + (SCALESTEP / 100)})`;
    setScaleValue(getScalePercent());
  }
};

const loadFormScale = () => {
  formImg.style.transform = 'scale(1)';

  scaleSmaller.addEventListener('click', onClickAddPercentage);
  scaleBigger.addEventListener('click', onClickRemovePercentage);
};

const unloadFormScale = () => {
  scaleValue.value = '100%';
  scaleSmaller.removeEventListener('click', onClickAddPercentage);
  scaleBigger.removeEventListener('click', onClickRemovePercentage);
};

export { loadFormScale, unloadFormScale, setScaleValue };
