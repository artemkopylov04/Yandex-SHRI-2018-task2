'use strict';
window.onload = function() {
    //кнопка "Закрыть"
    const btnClose = document.querySelector(".close");
    // кнопка "Применить"
    const btnApply = document.querySelector(".apply");
    // ширина блока
    const width = 215;
    // количество блоков
    const count = 6;
    // блоки устройств
    const blocks = document.querySelector('.devices').querySelectorAll('.device');
    //меню фильтров блоков устройств
    const filterBtns = document.getElementById('filters-ul').querySelectorAll('li');
    //блок со всеми сценариями (нужно для карусели)
    const scenarios = document.querySelector('.scenarios-ul');
    // стрелки влево и вправо у устройств
    const arrowPrevDevice = document.getElementById('devicesPrevArrow');
    const arrowNextDevice = document.getElementById('devicesNextArrow');

    // Анимация переключения ссылок ( opacity 0.6 -> 1)
    const menuLinks = document.getElementById('links').querySelectorAll('a');
    const links = Array.from(menuLinks);
    links.forEach(function (elem) {
        elem.onclick = function () {
            links.forEach(function (el) {
                el.classList.remove('active');
            });
            elem.classList.add('active');
        };
    });

    // Фильтры

    let position = 0; // текущий сдвиг карусели устройств
    let blocksLength = blocks.length; //для вычисления настоящей длинны блоков с учетом фильтра

    const filters = Array.from(filterBtns);
    filters.forEach(function (filter) {
        filter.onclick = function () {
            filters.forEach(function (filter) {
                filter.classList.remove('active');
            });
            filter.classList.add("active");

            // ставим карусель в первоначальное положение
            blocks[0].style.marginLeft = "0";
            position = 0;
            // надо искать длинну всех блоков в соответствии с теми, которые мы скроем
            blocksLength = (filter.id === "all") ? blocks.length : 0;
            // стрелка влево -> disabled
            arrowPrevDevice.classList.add("disabled");

            // Убираем блоки, которые не подходят по фильтру
            // Каждому блоку присвоен одноименный фильтру класс
            Array.from(blocks).forEach(function (device) {
                if (filter.id === "all") {
                    device.classList.remove("filter-hide");
                } else if (!device.classList.contains(filter.id)) {
                    if (!device.classList.contains("filter-hide")){
                        device.classList.add("filter-hide")
                    }
                } else {
                    blocksLength++;
                    device.classList.remove("filter-hide")
                }
            });

            // Карусель кнопки -> display: none, если количество блоков < 6
            if (blocksLength < count) {
                arrowPrevDevice.classList.add("disabled");
                arrowNextDevice.classList.add("disabled");
            } else {
                arrowNextDevice.classList.remove("disabled");
            }

            //убираем стрелочки
            document.querySelector(".devices-btns").style.display =
                (blocksLength > count) ? "" : "none";
        }
    });

    // карусель устройств
    if (blocksLength > count) document.querySelector(".devices-btns").style.opacity = "1";

    arrowPrevDevice.onclick = function() {
        // сдвиг влево
        position = Math.min(position + width * count, 0);
        arrowNextDevice.classList.remove("disabled");
        if (!position) {
            this.classList.add("disabled");
        }
        blocks[0].style.marginLeft = position + 'px';
    };

    arrowNextDevice.onclick = function() {
        // сдвиг вправо
        position = Math.max(position - width * count, -width * (blocksLength - count));
        arrowPrevDevice.classList.remove("disabled");
        if (position === -width * (blocksLength - count)) {
            this.classList.add("disabled");
        }
        blocks[0].style.marginLeft = position + 'px';
    };

    // Формируем модальное окно путем innerHTML
    blocks.forEach(function (device) {
        device.onclick = function () {
            // пространство для модального окна
            const modalBlockSpace = document.querySelector('.modal-space');
            // начинка модального окна
            const modalBlock = document.getElementById('modal-block');
            // копируем начинуку блока устройства
            modalBlock.querySelector('.modal-html').innerHTML = device.innerHTML;
            // это если слайдер крутилка
            const circleSliderInModal = modalBlock.querySelector(".input-range-div");
            const circleSlider = document.getElementById("div-floor-slider");

            // для того чтобы модальное окно создавало эффект открытия, ищем границы блока, который открыли, а уже оттуда будем двигать и изменять размер
            let deviceBlockCoordinates = device.getBoundingClientRect();
            let offset = deviceBlockCoordinates.top + window.scrollY;
            modalBlockSpace.style.top = offset + "px";
            modalBlockSpace.style.left = deviceBlockCoordinates.left + "px";
            modalBlockSpace.style.visibility = "visible";

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
            // тут будем навешивать класс на крутилку, потом препроцессором будем крутить стрелочку и круг
            if (slider.classList.contains('input-range-floor')) {
                modalBlock.classList.add('range-floor');
                slider.oninput = function () {
                    circleSliderInModal.setAttribute('class', 'input-range-div value' + this.value);
                    outputText.innerHTML = "+" + this.value;
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
        };
    });

    // карусель сценариев
    // та же логика, что и с устройствами
    const widthScenariosDiv = 670;
    let positionScenariosDiv = 0;
    const blocksScenariosDiv = document.querySelectorAll('.scenarios-div');

    if (scenarios.querySelectorAll('li').length > 9) {
        document.querySelector(".scenarios-btns").style.opacity = "1";
    }

    document.getElementById('btnCarouselLeft').onclick = function() {
        positionScenariosDiv = Math.min(positionScenariosDiv + widthScenariosDiv, 0);
        document.querySelector('.scenarios-next').classList.remove("disabled");
        if (!positionScenariosDiv) {
            this.classList.add("disabled");
        }
        blocksScenariosDiv[0].style.marginLeft = positionScenariosDiv - 7.5 + 'px';
    };

        document.getElementById('btnCarouselRight').onclick = function () {

            positionScenariosDiv = Math.max(positionScenariosDiv - widthScenariosDiv,
                -widthScenariosDiv * (blocksScenariosDiv.length - 1));
            document.querySelector('.scenarios-prev').classList.remove("disabled");
            if (positionScenariosDiv === -widthScenariosDiv * (blocksScenariosDiv.length - 1)) {
                this.classList.add("disabled");
            }
            blocksScenariosDiv[0].style.marginLeft = positionScenariosDiv - 7.5 + 'px';
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
};
