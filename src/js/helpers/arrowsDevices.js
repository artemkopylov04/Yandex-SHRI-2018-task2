document.addEventListener('DOMContentLoaded', () => {
  const arrowPrev = document.querySelector('.devices__devices-btns_previous');
  const arrowNext = document.querySelector('.devices__devices-btns_next');
  const devices = document.querySelectorAll('.devices-list__li');
  const device = document.querySelector('.devices-list__li');


  device.style.marginLeft = window.getComputedStyle(device).getPropertyValue('margin-left');

  const count = 6; // изменить на динамически
  const width = 215;

  arrowPrev.classList.add('devices__devices-btns_disabled');

  if (devices.length - document.querySelectorAll('.devices__devices-btns_disabled').length < 6) {
    arrowPrev.classList.add('devices__devices-btns_disabled');
    arrowNext.classList.add('devices__devices-btns_disabled');
  } else {
    arrowNext.classList.remove('devices__devices-btns_disabled');
  }

  // стрелка влево
  arrowPrev.addEventListener('click', function () {
    let positionDevicesCarousel = parseInt(device.style.marginLeft, 10);


    const hiddenBlocks = document.querySelectorAll('.devices-list__li_hidden').length;

    if (devices.length - hiddenBlocks > count) {
      positionDevicesCarousel = Math.min(positionDevicesCarousel + width * count, 0);
      arrowNext.classList.remove('devices__devices-btns_disabled');
      if (!positionDevicesCarousel) {
        this.classList.add('devices__devices-btns_disabled');
      }
      device.style.marginLeft = `${positionDevicesCarousel}px`;
    }
  });

  // стрелка вправо
  arrowNext.addEventListener('click', function () {
    let positionDevicesCarousel = parseInt(device.style.marginLeft, 10);


    const hiddenBlocks = document.querySelectorAll('.devices-list__li_hidden').length;

    if (devices.length - document.querySelectorAll('.devices__devices-btns_disabled').length > count) {
      positionDevicesCarousel = Math.max(positionDevicesCarousel - width * count, -width * (devices.length - hiddenBlocks - count));
      arrowPrev.classList.remove('devices__devices-btns_disabled');
      if (positionDevicesCarousel === -width * (devices.length - document.querySelectorAll('.devices-list__li_hidden').length - count)) {
        this.classList.add('devices__devices-btns_disabled');
      }
      device.style.marginLeft = `${positionDevicesCarousel}px`;
    }
  });
});
