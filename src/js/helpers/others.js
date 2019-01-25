document.addEventListener("DOMContentLoaded", function() {


    //скролл главного окна, тут просто плавно убираем иконку, если скролл начался
    document.querySelector('.main-block__block-list').onscroll = function () {
        //document.getElementById("with-icon").querySelector("img").style.opacity = "1";
        document.getElementById("withIcon").classList.add('main-block__li_active');
    };

    // не закончено

    // //бургерное меню для мобилок
    // document.getElementById('burger-menu').onclick = function () {
    //     document.getElementById('nav-links').classList.toggle('active-menu');
    //     document.querySelector('.fixed-bg').classList.toggle('active');
    // };
    //
    // //меню фильтров для мобилок
    // document.getElementById('filters-ul').onclick = function () {
    //     this.classList.toggle('active');
    // };

    // //для мобилок разделим wrapper и header, так как header в мобилках fixed
    // document.querySelector('header').classList.add('blur');
    // //отдельно блюрим футер, так как он у нас fixed
    // document.querySelector('footer').classList.add('blur');
    // document.querySelector('body').style.overflow = "hidden";
    // modalBlock.setAttribute('style', "transform: translate(" + translateX + "px, " + translateY + "px)");
    //
    // };

});


