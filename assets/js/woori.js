$(function () {
    const mainSlide = new Swiper('.main-slide', {
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    })
    $('.sc-visual .autoplay').click(function(){
        if ($(this).hasClass('on')) {
            mainSlide.autoplay.start();
        } else {
            mainSlide.autoplay.stop();
        }
        $(this).toggleClass('on');
    })
    $('.ic-deposit')
});

