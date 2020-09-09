$(document).ready(function(){
    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right"),
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});