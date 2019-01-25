export default function filtersInPopup(doc){

    const filters           = doc.querySelector('.modal-block__ul')
        , sliderTemperature = doc.querySelector('.modal-block-slider-temperature__input')
        , sliderLight       = doc.querySelector('.modal-block-slider-light__input')
        , label             = doc.querySelector('.modal-block__output_temp')
        , filtersArray      = doc.querySelectorAll('.modal-block__li');

    const filterValues = {
        "manually"       : "10",
        "cold"           : "-2",
        "warm"           : "23",
        "hot"            : "28",
        "manually-light" : "50",
        "day"            : "16",
        "evening"        : "87",
        "sunrise"        : "45"
    };

    if(sliderTemperature) {
        sliderTemperature.addEventListener('input', function (e) {

            for (let i = 0; i < filtersArray.length; i++) {
                if (filtersArray[i].classList.contains('modal-block-slider-temperature__li_manually')) {
                    filtersArray[i].classList.add('modal-block__li_active');
                } else {
                    filtersArray[i].classList.remove('modal-block__li_active');
                }
            }

            label.innerHTML = (this.value > 0) ? "+" + this.value : this.value;
        });
    } else {
        if (sliderLight) {
            sliderLight.addEventListener('input', function (e) {

                for (let i = 0; i < filtersArray.length; i++) {
                    if (filtersArray[i].classList.contains('modal-block-slider-light__li_manually')) {
                        filtersArray[i].classList.add('modal-block__li_active');
                    } else {
                        filtersArray[i].classList.remove('modal-block__li_active');
                    }
                }

            });
        }
    }

    filters.addEventListener('click', function (e) {

       const classList =  e.target.classList;

       if (classList.contains('modal-block__li')) {

           for (let i = 0; i < filtersArray.length; i++) {
               filtersArray[i].classList.remove('modal-block__li_active')
           }

           e.target.classList.add('modal-block__li_active');

           let className = 'modal-block-slider-temperature__li_';

           for (let i = 0; i < Object.keys(filterValues).length; i++) {
               if (e.target.classList.contains(className + Object.keys(filterValues)[i])) {

                   let value = filterValues[Object.keys(filterValues)[i]];

                   sliderTemperature.value = value;
                   if (value > 0) {
                       label.innerHTML = "+" + value
                   } else {
                       label.innerHTML = value
                   }
               }
           }
       }
    });

}