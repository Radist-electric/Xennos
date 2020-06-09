$(document).ready(function () {
    $('.portfolio__list').slick({
        dots: false,
        centerMode: true,
        infinite: true,
        arrows: false,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerPadding: '40px',
        // variableWidth: false,
        prevArrow: '<button class="arrow"><img src="img/portfolio/arrow-prev.png" alt="arrow prev"></button>',
        nextArrow: '<button class="arrow"><img src="img/portfolio/arrow-next.png" alt="arrow next"></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.feedback__slider').slick({
        dots: false,
        centerMode: true,
        infinite: true,
        arrows: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerPadding: '40px',
        // variableWidth: true,
        prevArrow: '<button class="arrow feedback__slider__arrow_prev"><img src="img/feedback/arrow-prev.png" alt="arrow prev"></button>',
        nextArrow: '<button class="arrow feedback__slider__arrow_next"><img src="img/feedback/arrow-next.png" alt="arrow next"></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                }
            },
        ]
    });
});