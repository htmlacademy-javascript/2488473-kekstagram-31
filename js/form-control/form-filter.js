
const slider = document.querySelector('.effect-level__slider');

const loadFilter = () => {
  noUiSlider.create(slider, {
    start: 80,
    connect: 'lower',
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }});
};

export { loadFilter };
