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
        prevArrow: '<button class="arrow arrow_prev"><img src="img/portfolio/arrow-prev.png" alt="arrow prev"></button>',
        nextArrow: '<button class="arrow arrow_next"><img src="img/portfolio/arrow-next.png" alt="arrow next"></button>',
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