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
        prevArrow: '<button class="arrow portfolio__list__arrow portfolio__list__arrow_prev"><img src="img/portfolio/arrow-prev.png" alt="arrow prev"></button>',
        nextArrow: '<button class="arrow portfolio__list__arrow portfolio__list__arrow_next"><img src="img/portfolio/arrow-next.png" alt="arrow next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '0px'
                }
            }, 
            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '15px'
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
        prevArrow: '<button class="arrow feedback__slider__arrow feedback__slider__arrow_prev"><img src="img/feedback/arrow-prev.png" alt="arrow prev"></button>',
        nextArrow: '<button class="arrow feedback__slider__arrow feedback__slider__arrow_next"><img src="img/feedback/arrow-next.png" alt="arrow next"></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    centerPadding: '0px'
                }
            },
        ]
    });

    /* Modal window */
	$('.btn_popup').on('click', function() {
		$('.popup').fadeIn();
	});
	$('.popup__form__close').on('click', function() {
		$('.popup').fadeOut();
	});

    /* Mobile menu */
    $(".menu-btn").click(function () {
        if ($("#menu-btn").hasClass("menu-btn_burger")) {
            $(".header__top__menu").addClass("header__top__menu_show");
            $("#menu-btn").removeClass("menu-btn_burger");
            $("#menu-btn").addClass("menu-btn_cross");
            return
        };
        if ($("#menu-btn").hasClass("menu-btn_cross")) {
            $(".header__top__menu").removeClass("header__top__menu_show");
            $("#menu-btn").addClass("menu-btn_burger");
            $("#menu-btn").removeClass("menu-btn_cross");
            return
        };

      });

    //   menu-btn_burger
});