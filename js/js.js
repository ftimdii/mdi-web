
//window scropp
$(document).ready(function() {
    $(window).on("scroll", function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 80) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }
    });

  
});
//document ready
$(document).ready(function() {

    // typing animation
    new Typed('#type-it', {
      strings: ['Designer', 'Developer', 'Freelancer'],
      typeSpeed: 100,
      loop:true,
    });
});
  //owl
  jQuery(document).ready(function($){
    $('.owl-carousel').owlCarousel({
        loop:true,
        items : 2,
        margin:30,
        autoplay: true,
        autoplayTimeout:2000,
        responsive:{
            0:{ items:1 },
            900:{ items:3 }
        }
    });
    $.scrollIt({
        easing: 'linear',      // the easing function for animation
        topOffset: -70           // offste (in px) for fixed top navigation
      });
});
