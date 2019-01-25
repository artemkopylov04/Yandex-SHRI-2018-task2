import filtersInPopup from './filtersInPopup.js'
import circlePopup from './popupCircle.js'

document.addEventListener("DOMContentLoaded", function() {

    const btnClose          = document.querySelector(".modal-block__modal-btns_close")
        , btnApply          = document.querySelector(".modal-block__modal-btns_apply")
        , devicesList       = document.querySelector(".devices-list")
        , modalBlock        = document.querySelector('.modal-block')
        , modalBlockContent = document.querySelector('.modal-block__modal-info')
        , wrapper           = document.querySelector('.wrapper')
        , bg                = document.querySelector('.fixed-bg')
        , sliderForm        = document.querySelector('.modal-block__form')
        , sliderInputTemp   = document.querySelector('.modal-block-slider-temperature__input')
        , labelTemp         = document.querySelector('.modal-block__output_temp');

    devicesList.addEventListener('click', function (event) {

        if (event.target && event.target.nodeName === "LI") {

            event.target.classList.add('devices-list__li_opened');

            bg.classList.add('fixed-bg_active');

            wrapper.classList.add('wrapper_blur');

            modalBlock.style.top = event.y + "px";
            modalBlock.style.left = event.x + "px";

            modalBlockContent.innerHTML = event.target.innerHTML;

            setTimeout(function () {
                modalBlock.style.display = "block";
                setTimeout(function () {
                    modalBlock.classList.add('modal-block_active');
                }, 10)
            }, 10);

            //Если попап крутилка, то обработчики на фильтры не нужны
            if (!modalBlockContent.querySelector('.modal-block-slider_floor-temp')) {
                filtersInPopup(modalBlockContent);
            } else {
                circlePopup(modalBlockContent);
            }
        }
    });


    btnApply.addEventListener('click', function () {

        const block = document.querySelector('.devices-list__li_opened');

        const input = modalBlockContent.querySelector('input');

        input.defaultValue = input.value;

        block.innerHTML = modalBlockContent.innerHTML;

        block.classList.remove('devices-list__li_opened');

        modalBlock.classList.remove('modal-block_active');
        setTimeout(function () {
            modalBlock.style.display = "none";
            bg.classList.remove('fixed-bg_active');
            wrapper.classList.remove('wrapper_blur');
        }, 500);
    });

    btnClose.addEventListener('click', function () {

        const block = document.querySelector('.devices-list__li_opened');

        block.classList.remove('devices-list__li_opened');

        modalBlock.classList.remove('modal-block_active');
        setTimeout(function () {
            modalBlock.style.display = "none";
            bg.classList.remove('fixed-bg_active');
            wrapper.classList.remove('wrapper_blur');
        }, 500);

    });

    sliderForm.addEventListener('input', function () {

        labelTemp.value = sliderInputTemp.value

    });

});