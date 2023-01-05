// Инициализируем слайдер-1
const swiperEasy = new Swiper('.swiper-easy', {
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
        enabled: false,
        onlyInViewport: true,
        pageUpDown: false,
    },
    
    // автовысота
    autoHeight: true,
     
    //отступ между слайдами
    spaceBetween: 30,
    
    /*
    //количество пролистываемых(если нужно листать группами)
    slidesPerGroup: 3,
    */

    //Стартовый слайд
    initialSlide: 0,

    //бесконечный слайдер
    loop: false,

    //скорость
    speed: 1500,

    //ширина экрана
    breakpoints: {
        360: {
            slidesPerView: 1,  //количество слайдов для показа
            centeredSlides: true,  //активный слайд по центру
            freeMode: false,  //свободный режим перемотки слайдов
        },
        768: {
            slidesPerView: 1.5,  //количество слайдов для показа
            centeredSlides: false,  //активный слайд по центру
            freeMode: true,  //свободный режим перемотки слайдов
        },
    },
    //отключить предзагрузку картинок
    //все это стоит подгружать тогда, когда slidesPerView больше 1
    preloadImages: false,
    lazy: {
    //подгружать на старте переключения слайда   
        loadOnTransitionStart: false,
    //подгрузить пред и след картинки    
        loadPrevNext: false,
    },
    //слежка за видимыми слайдами
    watchSlidesProgress: true,
    //добавление класса видимым слайдам
    watchSlidesVisibility: true,
});

// Инициализируем слайдер-2
const swiperParallax = new Swiper('.swiper-parallax', {
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
        enabled: false,
        onlyInViewport: true,
        pageUpDown: false,
    },
    
    // автовысота
    autoHeight: false,
    
    /*
    //количество пролистываемых(если нужно листать группами)
    slidesPerGroup: 3,
    */

    //бесконечный слайдер
    loop: false,

    //свободный режим перемотки слайдов
    freeMode: false,

    //скорость
    speed: 2000,

    //ширина экрана
    breakpoints: {
        360: {
            slidesPerView: 1,  //количество слайдов для показа
            centeredSlides: true,  //активный слайд по центру
            //Стартовый слайд
            initialSlide: 1,
        },
        768: {
            slidesPerView: 1,  //количество слайдов для показа
            centeredSlides: false,  //активный слайд по центру
            //Стартовый слайд
           initialSlide: 2,
        },
    },
    //отключить предзагрузку картинок
    //все это стоит подгружать тогда, когда slidesPerView больше 1
    preloadImages: false,
    lazy: {
    //подгружать на старте переключения слайда   
        loadOnTransitionStart: false,
    //подгрузить пред и след картинки    
        loadPrevNext: false,
    },
    //слежка за видимыми слайдами
    watchSlidesProgress: true,
    //добавление класса видимым слайдам
    watchSlidesVisibility: true,
    //параллакс
    parallax: true,
});
