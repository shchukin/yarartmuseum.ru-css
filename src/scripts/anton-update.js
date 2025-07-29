(function ($) {
    $(window).on('load', function () {

        /* Swiper */
        document.querySelectorAll('.swiper--js-init-feedback').forEach((element, index) => {
            new Swiper(element, {
                slidesPerView: 1,
                slidesPerGroup: 1,
                autoHeight: true,
                spaceBetween: 24,
                pagination: {
                    el: element.querySelector('.swiper-pagination'),
                    clickable: true
                },
                navigation: {
                    nextEl: element.querySelector('.swiper-button-next'),
                    prevEl: element.querySelector('.swiper-button-prev'),
                },
                // breakpoints: {
                //     768: {
                //         slidesPerView: 2,
                //         slidesPerGroup: 2,
                //         autoHeight: false,
                //     },
                //     992: {
                //         slidesPerView: 3,
                //         slidesPerGroup: 3,
                //     },
                // },
            });
        });

    });
})(jQuery);
