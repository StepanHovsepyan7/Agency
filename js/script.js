'use strict';

$(function(){
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height() - 860;
             if ($(window).scrollTop() > navHeight) {
                  $('.navigationn ').addClass('fixed');
                  $('.navigationn ').css({
                  backgroundColor: '#212529',
                 })
             }
              else {
                  $('.navigationn ').removeClass('fixed');
                  $('.navigationn ').css({
                    backgroundColor: '#212529',
                    backgroundColor: 'transparent',
                })
             }

     });

})