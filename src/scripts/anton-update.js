(function ($) {
    $(window).on('load', function () {

        let isDesktop;

        function initGlobalConstant() {
            isDesktop = window.matchMedia("(min-width: 992px)").matches;
        }

        /* При открытии страницы */
        initGlobalConstant();

        /* При ресайзе страницы */
        window.addEventListener('resize', initGlobalConstant);



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
            });
        });


        /* Фильтр */
        // Находим все фильтры на странице
        const filters = document.querySelectorAll('.filter');

        filters.forEach(filter => {
            const handler = filter.querySelector('.filter__handler');
            const resetBtn = filter.querySelector('.filter__reset');
            const items = filter.querySelectorAll('.filter__item:not(.filter__item--archive)');

            // Переключение видимости дропдауна при клике на хендлер
            handler.addEventListener('click', () => {
                filter.classList.toggle('filter--expanded');
            });

            // Сброс фильтра на первое значение при клике на кнопку сброса
            resetBtn.addEventListener('click', () => {
                const firstItem = items[0];
                // Удаляем класс текущего выбранного пункта
                items.forEach(i => i.classList.remove('filter__item--сurrent'));
                // Добавляем класс текущему для первого пункта
                firstItem.classList.add('filter__item--сurrent');
                // Обновляем HTML хендлера на HTML первого пункта
                handler.innerHTML = firstItem.innerHTML;
                // Удаляем класс, указывающий на выбор недефолтного значения
                filter.classList.remove('filter--value-selected');
                // Закрываем дропдаун
                filter.classList.remove('filter--expanded');
            });

            // Обработка выбора пункта фильтра
            items.forEach((item, index) => {
                item.addEventListener('click', () => {
                    // Удаляем класс текущего выбранного пункта
                    items.forEach(i => i.classList.remove('filter__item--сurrent'));
                    // Добавляем класс текущего выбранного пункта
                    item.classList.add('filter__item--сurrent');
                    // Обновляем HTML хендлера на HTML выбранного пункта, удаляя SVG-иконку
                    handler.innerHTML = item.innerHTML.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '').trim();
                    // Добавляем или удаляем класс filter--value-selected в зависимости от выбранного пункта
                    if (index !== 0) {
                        filter.classList.add('filter--value-selected');
                    } else {
                        filter.classList.remove('filter--value-selected');
                    }
                    // Закрываем дропдаун
                    filter.classList.remove('filter--expanded');
                });
            });


            // Закрытие дропдауна при клике вне фильтра в десктопном режиме
            document.addEventListener('click', (event) => {
                if (isDesktop && filter.classList.contains('filter--expanded') && !filter.contains(event.target)) {
                    filter.classList.remove('filter--expanded');
                }
            });

            // Закрытие дропдауна при нажатии клавиши Esc
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && filter.classList.contains('filter--expanded')) {
                    filter.classList.remove('filter--expanded');
                }
            });

        });


    });
})(jQuery);
