$('.bollywood-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.bollywoood-img'
});

$('.bollywoood-img').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.bollywood-slider',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    autoplay:true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa  fa-angle-right' aria-hidden='true'></i></button>",


    responsive: [
        {
            breakpoint: 991,  
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,  
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }
    ]


});






$('.content').each(function () {
    var bg = $(this).attr('data-background');
    if (bg) {
        $(this).css('background-image', 'url(' + bg + ')');
    }
});



