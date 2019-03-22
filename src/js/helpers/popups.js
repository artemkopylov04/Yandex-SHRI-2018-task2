import filtersInPopup from './filtersInPopup';
import circlePopup from './circlePopup';

export default function popups() {
  const modalBlock = document.querySelector('.modal-block');
  const modalBlockContent = document.querySelector('.modal-block__modal-info');
  const wrapper = document.querySelector('.wrapper');
  const bg = document.querySelector('.fixed-bg');
  const sliderInputTemp = document.querySelector('.modal-block-slider-temperature__input');
  const labelTemp = document.querySelector('.modal-block__output_temp');

  wrapper.addEventListener('click', (e) => {

    const found = e.path.find((el) => {
      return el.classList.contains('devices-list__li')
    });

    if (found) {
      const {classList, innerHTML} = found;

      classList.add('devices-list__li_opened');
      bg.classList.add('fixed-bg_active');
      wrapper.classList.add('wrapper_blur');

      modalBlock.style.top = `${e.y}px`;
      modalBlock.style.left = `${e.x}px`;

      modalBlockContent.innerHTML = innerHTML;

      setTimeout(() => {
        modalBlock.style.display = 'block';
        setTimeout(() => {
          modalBlock.classList.add('modal-block_active');
        }, 100);
      }, 100);

      // Если попап крутилка, то обработчики на фильтры не нужны
      if (!modalBlockContent.querySelector('.modal-block-slider_floor-temp')) {
        filtersInPopup(modalBlockContent);
      } else {
        modalBlock.style.height = '343px';
        circlePopup(modalBlockContent);
      }
    }
  });

  const btnApply = document.querySelector('.modal-block__modal-btns_apply');

  btnApply.addEventListener('click', () => {
    const block = document.querySelector('.devices-list__li_opened');

    const input = document.querySelector('.modal-block__modal-info input');

    input.defaultValue = input.value;

    block.innerHTML = modalBlockContent.innerHTML;
    modalBlockContent.innerHTML = "";

    block.classList.remove('devices-list__li_opened');

    modalBlock.classList.remove('modal-block_active');
    modalBlock.style.height = '';
    setTimeout(() => {
      modalBlock.style.display = 'none';
      bg.classList.remove('fixed-bg_active');
      wrapper.classList.remove('wrapper_blur');
    }, 500);
  });


  const btnClose = document.querySelector('.modal-block__modal-btns_close');

  btnClose.addEventListener('click', () => {
    const block = document.querySelector('.devices-list__li_opened');

    block.classList.remove('devices-list__li_opened');

    modalBlock.classList.remove('modal-block_active');
    modalBlock.style.height = '';
    setTimeout(() => {
      modalBlock.style.display = 'none';
      bg.classList.remove('fixed-bg_active');
      wrapper.classList.remove('wrapper_blur');
    }, 500);
  });

  const sliderForm = document.querySelector('.modal-block__form');

  sliderForm.addEventListener('input', () => {
    labelTemp.value = sliderInputTemp.value;
  });
}
