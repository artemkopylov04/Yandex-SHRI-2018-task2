export default function filtersInPopup() {
  const filters = document.querySelector('.modal-block__ul');
  const sliderTemperature = document.querySelector('.modal-block-slider-temperature__input');
  const sliderLight = document.querySelector('.modal-block-slider-light__input');
  const label = document.querySelector('.modal-block__output_temp');

  const filterValues = {
    manually: '10',
    cold: '-2',
    warm: '23',
    hot: '28',
    'manually-light': '50',
    day: '16',
    evening: '87',
    sunrise: '45',
  };


  sliderTemperature.addEventListener('input', function () {
      document.querySelector('.modal-block__li_active')
          .classList.remove('modal-block__li_active');

      document.querySelector('.modal-block-slider-temperature__li_manually')
          .classList.add('modal-block__li_active');

      label.innerHTML = (this.value > 0) ? `+${this.value}` : this.value;
    });

  sliderLight.addEventListener('input', () => {
    document.querySelector('.modal-block__li_active')
        .classList.remove('modal-block__li_active');

    document.querySelector('.modal-block-slider-light__li_manually-light')
        .classList.add('modal-block__li_active');
  });

  filters.addEventListener('click', (e) => {
    const { classList } = e.target;
    const tempClassName = 'modal-block-slider-temperature__li_';
    const lightClassName = 'modal-block-slider-light__li_';
    const modes = Object.keys(filterValues);

    if (classList.contains('modal-block__li')) {

      document.querySelector('.modal-block__li_active')
          .classList.remove('modal-block__li_active');

      classList.add('modal-block__li_active');

      modes.map((el) => {
        if (classList.contains(tempClassName + el)) {
            const value = filterValues[el];

            sliderTemperature.value = value;
            if (value > 0) {
                label.innerHTML = `+${value}`;
            } else {
                label.innerHTML = value;
            }
        } else if (classList.contains(lightClassName + el)) {
          sliderLight.value = filterValues[el];

        }
      });
    }
  });
}
