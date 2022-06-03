$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    $('.lmsa-pr .dre .lef .slider-nav img').click(function(){
        $(this).css({
            "border" : "1px dashed #363636"
        }).siblings().css({
            "border" : "none"
        })
    });
});