const slider = document.getElementById('no-uislider');
const valueMin = document.querySelector('.range__value--min');
const valueMax = document.querySelector('.range__value--max');
const range = [valueMin, valueMax];

noUiSlider.create(slider, {
  start: [0, 123],
  connect: true,
  range: {
    'min': 0,
    'max': 150
  },
  step: 1
});


slider.noUiSlider.on('update', (values, handle) => {
  range[handle].value = Math.round(values[handle]);
});

