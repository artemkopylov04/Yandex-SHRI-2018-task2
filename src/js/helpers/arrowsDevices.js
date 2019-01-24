document.addEventListener("DOMContentLoaded", function() {

    const arrowPrev     = document.querySelector('.devices__devices-btns_previous')
        , arrowNext     = document.querySelector('.devices__devices-btns_next')
        , devices       = document.querySelectorAll('.devices-list__li')
        , device        = document.querySelector('.devices-list__li');


    device.style.marginLeft = window.getComputedStyle(device).getPropertyValue('margin-left');

    let count = 6; // изменить на динамически
    let width = 215;

    arrowPrev.classList.add("devices__devices-btns_disabled");

    if (devices.length - document.querySelectorAll(".devices__devices-btns_disabled").length < 6) {
        arrowPrev.classList.add("devices__devices-btns_disabled");
        arrowNext.classList.add("devices__devices-btns_disabled");
    } else{
        arrowNext.classList.remove("devices__devices-btns_disabled");
    }

    // стрелка влево
    arrowPrev.addEventListener('click', function() {

        let positionDevicesCarousel = parseInt(device.style.marginLeft),
            hiddenBlocks = document.querySelectorAll(".devices-list__li_hidden").length;

        if (devices.length - hiddenBlocks > count) {
            positionDevicesCarousel = Math.min(positionDevicesCarousel + width * count, 0);
            arrowNext.classList.remove("devices__devices-btns_disabled");
            if (!positionDevicesCarousel) {
                this.classList.add("devices__devices-btns_disabled");
            }
            device.style.marginLeft = positionDevicesCarousel + 'px';
        }
    });

    //стрелка вправо
    arrowNext.addEventListener( "click", function() {

        let positionDevicesCarousel = parseInt(device.style.marginLeft),
            hiddenBlocks = document.querySelectorAll(".devices-list__li_hidden").length;

        if (devices.length - document.querySelectorAll(".devices__devices-btns_disabled").length > count) {
            positionDevicesCarousel = Math.max(positionDevicesCarousel - width * count, -width * (devices.length - hiddenBlocks - count));
            arrowPrev.classList.remove("devices__devices-btns_disabled");
            if (positionDevicesCarousel === -width * (devices.length - document.querySelectorAll(".devices-list__li_hidden").length - count)) {
                this.classList.add("devices__devices-btns_disabled");
            }
            device.style.marginLeft = positionDevicesCarousel + 'px';
        }
    });

});