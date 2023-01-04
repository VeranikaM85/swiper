// Инициализируем слайдер
const swiper = new Swiper('.swiper', {
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогресс-бар
    pagination: {
        el: '.swiper-pagination',
    /*
    //Буллеты(если нужны буквы)
    clickable: true,
    //Динамические буллеты
    dynamicBullets: true,
    */
    //Фракция (если нужны цифры)
    type: 'fraction',
    //Кастомный вывод фракции
    renderFraction: function (currentClass, totalClass) {
        return 'Фото <span class="' + currentClass + '"></span>' +
        ' из ' +
        '<span class="' + totalClass + '"></span>';
    },
    /*
   //Прогресс-бар
        type: 'progressbar'
    */    
    },
    //Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable:true
    },
    
    //прокрутка клавиатурой
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    
    // автовысота
    autoHeight: true,
    
    //количество слайдов для показа
    slidesPerView: 1.5,
    
    //отступ между слайдами
    spaceBetween: 30,
    
    /*
    //количество пролистываемых(если нужно листать группами)
    slidesPerGroup: 3,
    */

    //активный слайд по центру
    centeredSlides: false,

    //Стартовый слайд
    initialSlide: 0,

    //бесконечный слайдер
    loop: false,

    //свободный режим перемотки слайдов
    freeMode: true,

    //скорость
    speed: 800,
});

