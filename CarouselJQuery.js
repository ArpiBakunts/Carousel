'use strict';

$(function () {
    //configuration of speed, pauseing, etc.
    let width = 900;
    let animationSpeed = 2000;
    let pause = 3000;
    let currentSlide = 1;

    let $slider = $('.data-carousel');
    let $slideContainer = $slider.find('.data-images');
    let $slides = $slideContainer.find('.data-image');
    let interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function () {
                currentSlide++;
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    startSlider();

});