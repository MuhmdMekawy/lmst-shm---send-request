$(document).ready(function(){
    $('.home-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true ,
        loop:true,
        margin:10,
        rtl : true ,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.lmsa-pr .dre .right .colors .cont .color').click(function(){
        $(this).css({
            "border" : "1px solid #606060"
        }).parent().siblings().find('.color').css({
            "border" : "1px solid #C4C4C4"
        })
    });
    $('.lmsa-pr .dre .right .siz .sizes .con').click(function(){
        $(this).css({
            "border" : "1px solid #363636"
        }).siblings().css({
            "border" : "1px solid #C4C4C4"
        })
    });
    $('#cal .bot .images .cont .image').click(function(){
        $(this).css({
            "border" : "2px solid #E79A2C"
        }).parent().siblings().find('.image').css({
            "border" : "2px solid #C4C4C4"
        })
    })
    $('.lmsa-addr .detect .bottom .one .visit-time').click(function(){
        $('.lmsa-addr .visa').show().siblings().hide()
    });
    $('.lmsa-addr .visa .bottom .right .days .satur').click(function(){
        $('.lmsa-addr .visa .bottom .left  .satur').slideDown(500).siblings().slideUp(500)
    });
    $('.lmsa-addr .visa .bottom .right .days .sun').click(function(){
        $('.lmsa-addr .visa .bottom .left  .sunday').slideDown(500).siblings().slideUp(500)
    });
    $('.lmsa-addr .visa .bottom .right .days .tuesday').click(function(){
        $('.lmsa-addr .visa .bottom .left  .tuesday').slideDown(500).siblings().slideUp(500)
    });
    $('.lmsa-addr .visa .bottom .right .days .wends').click(function(){
        $('.lmsa-addr .visa .bottom .left  .wends').slideDown(500).siblings().slideUp(500)
    });
    $('.lmsa-addr .visa .bottom .right .days .thursday').click(function(){
        $('.lmsa-addr .visa .bottom .left  .thursday').slideDown(500).siblings().slideUp(500)
    });
    $('.lmsa-addr .visa .bottom .right .days .today').click(function(){
        $('.lmsa-addr .visa .bottom .left  .today').slideDown(500).siblings().slideUp(500)
    });
})  