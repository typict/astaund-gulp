$(document).ready(function() {


    $('#stars li').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10);

        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function() {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });


    $('#stars li').on('click', function() {
        var onStar = parseInt($(this).data('value'), 10);
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });
});


$(function() {
    $('.share').click(function() {
        $('.share_with').toggleClass('open')
    });
});

jQuery(function($) {
    $(document).mouseup(function(e) {
        var div = $(".share_with");
        if (!div.is(e.target)
            &&
            div.has(e.target).length === 0) {
            $('.share_with').removeClass('open')
        }
    });
});


$(function() {
    $('.close').click(function() {
        $('.share_with').removeClass('open')
    });
});

function windowSize(){
    if($(window).width()<='600'){

        var controls = document.querySelectorAll('.controls');
        for (var i = 0; i < controls.length; i++) {
            controls[i].style.display = 'inline-block';
        }
        var slides = document.querySelectorAll('#slides .item');
        var currentSlide = 0;
        function nextSlide() {
            goToSlide(currentSlide + 1);
        }
        function previousSlide() {
            goToSlide(currentSlide - 1);
        }
        function goToSlide(n) {
            slides[currentSlide].className = 'item';
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].className = 'item showing';
        }
        var playing = true;

        var next = document.getElementById('next');
        var previous = document.getElementById('previous');

        next.onclick = function() {

            nextSlide();
        };
        previous.onclick = function() {

            previousSlide();
        };


    }else{
        // экран больше 600 px в ширниу
    }
}
$(window).load(windowSize);
$(window).resize(windowSize);
$(window).on('load resize',windowSize);