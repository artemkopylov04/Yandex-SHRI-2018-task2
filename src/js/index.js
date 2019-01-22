'use strict';

import updateDeviceArrows from './helpers';

document.addEventListener("DOMContentLoaded", function() {
    listeners();
});

function listeners() {

    // navbar
    const navBar    = document.querySelector('.header__ul')
        , btnClose  = document.querySelector(".close")
        , btnApply  = document.querySelector(".apply")
        , devices   = document.querySelectorAll('.device') // cписок li устройств
        , devicesUl = document.querySelector('.devices-ul')
        , scenarios = document.querySelector('.scenarios-ul')
        , arrowPrev = document.getElementById('devicesPrevArrow')
        , arrowNext = document.getElementById('devicesNextArrow')
        , device    = document.querySelector('.device') // первое устройство
        , filters   = document.querySelector('.devices__filters-ul') // список фильтров
        , devicesScenariosDiv = document.querySelectorAll('.scenarios-div')
        , links = document.querySelectorAll('.header__a');

    let widthScenariosDiv = 670
        , width = 215 // длина блока devices
        , positionScriptsCarousel = 0
        , count = 6 //блоки для 1366px
        , positionDevicesCarousel = 0;


    navBar.addEventListener('click', function (event) {

        if (event.target.nodeName === 'A') {
            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove('header__a_active');
            }

            event.target.classList.add('header__a_active');
        }
    });

    // фильтры

    filters.addEventListener('click', function (filter) {

        device.style.marginLeft = '0';

        const active = filters.querySelector('.active');

        if (active) {
            active.classList.remove('active');
        }

        filter.target.classList.add("active");

        for (let i = 0; i < devices.length; i++) {
            devices[i].classList.remove('hidden');
        }

        if (filter.target.id !== "all") {
            for (let i = 0; i < devices.length; i++) {
                if (!devices[i].classList.contains(filter.target.id)) {
                    devices[i].classList.add('hidden');
                }
            }
        }

        updateDeviceArrows(devices, arrowPrev, arrowNext);

    });


    // карусель устройств
    updateDeviceArrows(devices, arrowPrev, arrowNext);

    // стрелка влево
    arrowPrev.addEventListener('click', function() {

        if (devices.length - document.querySelectorAll(".hidden").length > count) {
            positionDevicesCarousel = Math.min(positionDevicesCarousel + width * count, 0);
            arrowNext.classList.remove("disabled");
            if (!positionDevicesCarousel) {
                this.classList.add("disabled");
            }
            device.style.marginLeft = positionDevicesCarousel + 'px';
        }
    });

    //стрелка вправо
    arrowNext.addEventListener( "click", function() {

        if (devices.length - document.querySelectorAll(".hidden").length > count) {
            positionDevicesCarousel = Math.max(positionDevicesCarousel - width * count, -width * (devices.length - document.querySelectorAll(".hidden").length - count));
            arrowPrev.classList.remove("disabled");
            if (positionDevicesCarousel === -width * (devices.length - document.querySelectorAll(".hidden").length - count)) {
                this.classList.add("disabled");
            }
            device.style.marginLeft = positionDevicesCarousel + 'px';
        }
    });

    // карусель сценариев
    // та же логика, что и с устройствами

    document.getElementById('btnCarouselLeft').onclick = function() {
        positionScriptsCarousel = Math.min(positionScriptsCarousel + widthScenariosDiv, 0);
        document.querySelector('.scenarios-next').classList.remove("disabled");
        if (!positionScriptsCarousel) {
            this.classList.add("disabled");
        }
        devicesScenariosDiv[0].style.marginLeft = positionScriptsCarousel - 7.5 + 'px';
    };

    document.getElementById('btnCarouselRight').onclick = function () {

        positionScriptsCarousel = Math.max(positionScriptsCarousel - widthScenariosDiv,
            -widthScenariosDiv * (devicesScenariosDiv.length - 1));
        document.querySelector('.scenarios-prev').classList.remove("disabled");
        if (positionScriptsCarousel === -widthScenariosDiv * (devicesScenariosDiv.length - 1)) {
            this.classList.add("disabled");
        }
        devicesScenariosDiv[0].style.marginLeft = positionScriptsCarousel - 7.5 + 'px';
    };

    //скролл главного окна, тут просто плавно убираем иконку, если скролл начался
    document.querySelector('.child-scroller').onscroll = function() {
        document.getElementById("with-icon").querySelector("img").style.opacity = "1";
        document.getElementById("with-icon").classList.add('active');
    };

    //бургерное меню для мобилок
    document.getElementById('burger-menu').onclick = function() {
        document.getElementById('nav-links').classList.toggle('active-menu');
        document.querySelector('.fixed-bg').classList.toggle('active');
    };

    //меню фильтров для мобилок
    document.getElementById('filters-ul').onclick = function() {
        this.classList.toggle('active');
    };


    // Формируем модальное окно путем innerHTML
    devicesUl.addEventListener('click',  function (event) {

        // пространство для модального окна
        const modaldevicespace = document.querySelector('.modal-space');

        const modalHTML = document.querySelector('.modal-html');

        // начинка модального окна
        const modalBlock = document.getElementById('modal-block');

        if (event.target && event.target.nodeName === "LI") {

            const eventBlock = event.target.getBoundingClientRect(); // границы нажатого блока

            // для того чтобы модальное окно создавало эффект открытия, ищем границы блока, который открыли, а уже оттуда будем двигать и изменять размер
            let deviceBlockCoordinates = device.getBoundingClientRect();
            let offset = deviceBlockCoordinates.top + window.scrollY;
            modaldevicespace.style.top = offset + "px";
            modaldevicespace.style.left = deviceBlockCoordinates.left + "px";
            modaldevicespace.style.visibility = "visible";

            console.log(eventBlock);

            // копируем начинку блока устройства
            modalHTML.innerHTML = event.innerHTML;

        }


        // это если слайдер крутилка
        const circleSliderInModal = modalBlock.querySelector(".input-range-div");
        const circleSlider = document.getElementById("div-floor-slider");



        //Слайдер именно модального окна
        const slider =  modalBlock.querySelector(".input-range");
        const outputText = modalBlock.querySelector(".output-range > b");
        const outputMin = modalBlock.querySelector(".output-min > p");
        const outputMax = modalBlock.querySelector(".output-max > p");

        // Если слайдер температуры берем мин, макс, и сохраненное

        if (slider.classList.contains("range-temperature")) {
            outputMin.innerHTML = slider.min;
            outputMax.innerHTML = "+" + slider.max;
            outputText.innerHTML = (slider.defaultValue > 0) ?
                "+" + slider.defaultValue : slider.defaultValue;
        } else if (slider.classList.contains("input-range-floor")){
            outputText.innerHTML = (slider.defaultValue > 0) ?
                "+" + slider.defaultValue : slider.defaultValue;
        }

        //фильтры модального окна
        const filtersSlider = Array.from(modalBlock.querySelectorAll('.slider-filters-item'));
        //значения фильтров
        const filtersObject = {
            "manually" : "10",
            "cold" : "-2",
            "warm" : "23",
            "hot" : "28",
            "manually-light" : "50",
            "day" : "16",
            "evening" : "87",
            "sunrise" : "45"
        };

        if (slider) {
            slider.oninput = function () {
                if (slider.classList.contains("range-temperature")) {
                    outputText.innerHTML = (this.value > 0 ) ? "+" + this.value : this.value;
                }
                filtersSlider.forEach(function (filterItem) {
                    filterItem.classList.remove('active');
                    if (filterItem.classList.contains('manually')
                        || filterItem.classList.contains('manually-light')) {
                        filterItem.classList.add('active');
                    }
                });
            };
        }

        //тут реализуем изменение состояний у фильтров слайдера ( удалить активный, добавить активный, найти по классу какой именно)
        // нет смысла проверять range-floor
        if (slider.classList.contains("range-temperature") ||
            slider.classList.contains("range-light")) {
            filtersSlider.forEach(function (filterItem) {
                filterItem.onclick = function () {
                    filtersSlider.forEach(function (filterItem) {
                        filterItem.classList.remove('active');
                    });
                    filterItem.classList.add("active");
                    //ищем из ключей объекта, который объявил выше тот, который является классом этого фильтра
                    Object.keys(filtersObject).forEach(function (entry) {
                        if (filterItem.classList.contains(entry)) {
                            slider.value = filtersObject[entry];
                            if (slider.classList.contains("range-temperature")) {
                                outputText.innerHTML = (slider.value <= 0) ?
                                    slider.value : "+" + slider.value;
                            }
                        }
                    });
                }
            })
        }
        // тут будем навешивать класс на крутилку, потом препроцессором будем крутить стрелочку
        if (slider.classList.contains('input-range-floor')) {

            modalBlock.classList.add('range-floor');
            const orangePartSliderInModal = modalBlock.querySelector('.arc-orange-floor');
            const blackPartSliderInModal = modalBlock.querySelector('.arc-black-floor');
            const dashArray = modalBlock.querySelector('.dasharray');

            const degree = 270 / (slider['max'] - slider['min']);
             orangePartSliderInModal.setAttribute('d', describeArc(110, 110, 98, 225, 225 + (slider['value'] - slider['min']) * degree));
             blackPartSliderInModal.setAttribute('d', describeArc(110, 110, 98, 225 + (slider['value'] - slider['min']) * degree, 495));
             dashArray.setAttribute('d', describeArc(110, 110, 98, 225, 495));

            slider.oninput = function () {
                circleSliderInModal.setAttribute('class', 'input-range-div value' + this.value);
                outputText.innerHTML = "+" + this.value;
                const degree = 270 / (this['max'] - this['min']);
                const iteration = this['value'] - this['min'];
                orangePartSliderInModal.setAttribute("d", describeArc(110, 110, 98, 225, 225 + iteration * degree));
            };
        }
        //в конце всего навешиваем на модальное окно актив, чтобы оно начало появляться
        modalBlock.classList.add('active');

        //центр экрана по ширине, вычисляем для вывода модального окна, тут всего два состояния, для мобилок и для 1366px
        const width = (window.innerWidth > 375) ? 315 : 167;
        const height = (window.innerWidth > 375) ? 190 : window.scrollY + 21;

        const x = window.innerWidth / 2;

        //перемещаем блок к центру
        const translateX = x - width - deviceBlockCoordinates.left,
              translateY = height - offset;

        //затемняем фон
        document.querySelector('.fixed-bg').classList.add('active');

        //z-index бургера меньше фона
        document.querySelector('header').style.zIndex = '999';

        //блюрим фон
        document.querySelector('.wrapper').classList.add('blur');

        //для мобилок разделим wrapper и header, так как header в мобилках fixed
        document.querySelector('header').classList.add('blur');
        //отдельно блюрим футер, так как он у нас fixed
        document.querySelector('footer').classList.add('blur');
        document.querySelector('body').style.overflow = "hidden";
        modalBlock.setAttribute('style', "transform: translate(" + translateX + "px, " + translateY + "px)");

        // кнопка "Отменить" возвращаем все на места
        btnClose.onclick = function () {
            document.querySelector('body').style.overflow = "";
            modalBlock.style.left = "";
            modalBlock.style.top = "";
            modalBlock.style.transform = "";
            modalBlock.classList.remove('active');
            modalBlock.classList.remove('range-floor');
            document.querySelector('.fixed-bg').classList.remove('active');
            document.querySelector('header').style.zIndex = "";
            document.querySelector('.wrapper').classList.remove('blur');
            document.querySelector('footer').classList.remove('blur');
            document.querySelector('header').classList.remove('blur');
            document.querySelector('.modal-space').style.visibility = "";
        };

        btnApply.onclick = function () {
            device.querySelector('.input-range').defaultValue = slider.value;
            // если есть блок с крутилкой, навешиваем класс, если нет, то сохраняем фильтры из модального окна к блоку устройств
            if (circleSliderInModal) {
                circleSlider.setAttribute('class', circleSliderInModal.getAttribute('class'));
                document.querySelector('.arc-orange-floor').setAttribute("d", modalBlock.querySelector('.arc-orange-floor').getAttribute("d"));
                document.querySelector('.arc-black-floor').setAttribute("d", modalBlock.querySelector('.arc-black-floor').getAttribute("d"));
            } else {
                device.querySelector('.slider-filters-ul').innerHTML = '';
                filtersSlider.forEach(function (filterItem) {
                    device.querySelector('.slider-filters-ul').appendChild(filterItem);
                });
            }
            //возвращаем все на места
            document.querySelector('body').style.overflow = "";
            modalBlock.style.left = "";
            modalBlock.style.top = "";
            modalBlock.style.transform = "";
            modalBlock.classList.remove('active');
            modalBlock.classList.remove('range-floor');
            document.querySelector('.fixed-bg').classList.remove('active');

            document.querySelector('header').style.zIndex = "";
            document.getElementById('nav-links').style.zIndex = "";
            document.querySelector('header').classList.remove('blur');
            document.querySelector('.wrapper').classList.remove('blur');
            document.querySelector('footer').classList.remove('blur');
            document.querySelector('.modal-space').style.visibility = "";
        };
    });
};


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x, y, radius, startAngle, endAngle){

    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}
