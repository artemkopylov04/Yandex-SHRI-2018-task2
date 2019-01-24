document.addEventListener("DOMContentLoaded", function() {

    const navBar = document.querySelector('.header__ul')
        , links = document.querySelectorAll('.header__a');

    navBar.addEventListener('click', function (event) {

        if (event.target.nodeName === 'A') {
            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove('header__a_active');
            }

            event.target.classList.add('header__a_active');
        }
    });
});