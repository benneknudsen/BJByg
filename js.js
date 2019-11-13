"use strict"


$("#pil").click(function() {
    $('html, body').animate({
        scrollTop: $("#info").offset().top
    }, 100);
});

AOS.init({

  duration: 1000
});
