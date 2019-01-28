function hideElements(devicesList, id) {
  let hiddenDevices = 0;

  Object.values(devicesList).map((el) => {
    if (!el.classList.contains(`devices-list__li_${id}`)) {
        el.classList.add('devices-list__li_hidden');
        hiddenDevices += 1;
    }
  });

  return hiddenDevices;
}

export default function filters() {
  const devices     = document.querySelector('.devices');
  const devicesList = document.querySelectorAll('.devices-list__li');
  const arrowPrev   = document.querySelector('.devices__devices-btns_previous');
  const arrowNext   = document.querySelector('.devices__devices-btns_next');

  devices.addEventListener('click', (e) => {
    const { classList, id } = e.target;

    let hiddenDevicesCount;

    if (classList.contains('devices__filter-li')) {
        devicesList[0].style.marginLeft = '0'; // спорно

        document.querySelector('.devices__filter-li_active')
            .classList.remove('devices__filter-li_active');

        classList.add('devices__filter-li_active');

        Object.values(devicesList).map((el) => {
            el.classList.remove('devices-list__li_hidden');
        });

        if (id !== 'all') {
            hiddenDevicesCount = hideElements(devicesList, id);
        } else {
            hiddenDevicesCount = 0;
        }

        arrowPrev.classList.add('devices__devices-btns_disabled');
        arrowNext.classList.add('devices__devices-btns_disabled');

        // если больше шести блоков - валидная карусель
        if ((devicesList.length - hiddenDevicesCount) > 6) {
            arrowNext.classList.remove('devices__devices-btns_disabled');
        }
    }
  });
}
