$(document).ready(function() {
              $('.menumetro a').hover(
              function() {
                            $(this).stop().animate({opacity: 0.3}, 200);
                 }, 
              function() {
                            $(this).stop().animate({opacity: 1}, 200);
              });
            });
