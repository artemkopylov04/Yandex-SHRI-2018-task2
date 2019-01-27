document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelector('.devices__filters-ul');
  const firstDevice = document.querySelector('.devices-list__li');
  const devices = document.querySelectorAll('.devices-list__li');
  const arrowPrev = document.querySelector('.devices__devices-btns_previous');
  const arrowNext = document.querySelector('.devices__devices-btns_next');

  filters.addEventListener('click', (filter) => {
    if (filter.target.nodeName === 'LI') {
      firstDevice.style.marginLeft = '0';

      const active = filters.querySelector('.devices__filter-li_active');

      if (active) {
        active.classList.remove('devices__filter-li_active');
      }

      filter.target.classList.add('devices__filter-li_active');

      for (let i = 0; i < devices.length; i += 1) {
        devices[i].classList.remove('devices-list__li_hidden');
      }

      if (filter.target.id !== 'all') {
        for (let i = 0; i < devices.length; i += 1) {
          if (!devices[i].classList.contains(`devices-list__li_${filter.target.id}`)) {
            devices[i].classList.add('devices-list__li_hidden');
          }
        }
      }

      arrowPrev.classList.add('devices__devices-btns_disabled');

      if (devices.length - document.querySelectorAll('.devices-list__li_hidden').length < 6) {
        arrowPrev.classList.add('devices__devices-btns_disabled');
        arrowNext.classList.add('devices__devices-btns_disabled');
      } else {
        arrowNext.classList.remove('devices__devices-btns_disabled');
      }
    }
  });
});
