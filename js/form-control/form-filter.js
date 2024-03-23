const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderValue = document.querySelector('.effect-level__value');

const effectCard = document.querySelectorAll('.effects__radio');

const uploadPhoto = document.querySelector('.img-upload__preview > img');


const clearFilter = () => {
  uploadPhoto.style.filter = 'none';
};

const getFilter = () => {
  const filter = uploadPhoto.style.filter.replace(/[0123456789().]/g, '');
  if (filter.startsWith('blur')) {
    return filter.slice(0, -2);
  }
  return filter;
};

const hiddenSlider = () => {
  slider.classList.add('hidden');
  sliderContainer.classList.add('hidden');
};

const showSlider = () => {
  slider.classList.remove('hidden');
  sliderContainer.classList.remove('hidden');
};

const addListenerSlider = () => {
  slider.noUiSlider.on('update', () => {
    const value = slider.noUiSlider.get();
    const filter = `${getFilter()}`;
    sliderValue.value = value;

    if (filter === 'blur') {
      uploadPhoto.style.filter = `${getFilter()}(${value}px)`;
    } else {
      uploadPhoto.style.filter = `${getFilter()}(${value})`;
    }
  });
};

const updateSliderOptions = (min, max, step) => {
  slider.noUiSlider.updateOptions({
    start: max, step: step,
    range: {min: min, max: max}});
};

const createSlider = () => {
  noUiSlider.create(slider, {
    start: 100, step: 1,
    connect: 'lower',
    range: {'min': 0, 'max': 100}});
};

const destroySlider = () => {
  slider.noUiSlider.destroy();
};

const addEffectPreviewPhoto = (filter, value) => {
  uploadPhoto.style.filter = `${filter}(${value})`;
};

const setEffect = (evt) => {
  switch (evt.target.value) {
    case 'none':
      addEffectPreviewPhoto('none', '');
      clearFilter();
      hiddenSlider();
      break;
    case 'chrome':
      addEffectPreviewPhoto('grayscale', 0);
      showSlider();
      updateSliderOptions(0, 1, 0.1);
      break;
    case 'sepia':
      addEffectPreviewPhoto('sepia', 0);
      showSlider();
      updateSliderOptions(0, 1, 0.1);
      break;
    case 'marvin':
      addEffectPreviewPhoto('invert', 0);
      showSlider();
      updateSliderOptions(0, 1, 0.01);
      break;
    case 'phobos':
      addEffectPreviewPhoto('blur', 0);
      showSlider();
      updateSliderOptions(0, 3, 0.1);
      break;
    case 'heat':
      addEffectPreviewPhoto('brightness', 0);
      showSlider();
      updateSliderOptions(0.1, 0.3, 0.01);
      break;
  }
};


const addCardEffectListener = () => {
  for (const item of effectCard) {
    item.addEventListener('click', setEffect);
  }
};

const removeCardEffectListener = () => {
  for (const item of effectCard) {
    item.removeEventListener('click', setEffect);
  }
};

const loadFilter = () => {

  createSlider();
  addListenerSlider();
  hiddenSlider();

  addCardEffectListener();
  clearFilter();
};

const unloadFilter = () => {

  removeCardEffectListener();
  destroySlider();

};

export { loadFilter, unloadFilter, addEffectPreviewPhoto, clearFilter, hiddenSlider };
