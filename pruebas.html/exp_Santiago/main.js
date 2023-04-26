$(document).ready(function() {
    $('.surrounding-div').css({
        top: $('#resumen').offset().top,
        left: $('#resumen').offset().left - 8,
        width: $('#resumen').width(),
        height: $('#resumen').height(),
    })
    $('.loading-screen').css({
        display: "none",
    })
    $('nav span').click(function() {

        var previousButtonID = $('.active').attr('id')

        var clickedButton = $(this);
        var clickedButtonID = clickedButton.attr('id')

        if (previousButtonID === clickedButtonID) return;

        // Deactivate all buttons
        $('nav span').removeClass('navbar-link');
        // Hide an HTML element
        $(`#${previousButtonID}`).removeClass('active')

        // Animate the div surrounding the button
        clickedButton.addClass('active')

        // var targetButton = $('#target-button');
        var surroundingDiv = $('.surrounding-div');
        surroundingDiv.addClass('blur-effect');
        surroundingDiv.animate({
            left: clickedButton.offset().left,
            top: clickedButton.offset().top,
        }, 150, function() {
            // Add blur effect
            surroundingDiv.removeClass('blur-effect');
            surroundingDiv.css({
                top: clickedButton.offset().top,
                left: clickedButton.offset().left - 8,
                width: clickedButton.width(),
                height: clickedButton.height(),
            })

            // Show another HTML element
            console.log(clickedButton.attr('id'))
            $(`#${clickedButtonID}_object`).css('display', 'block');
            $(`#${previousButtonID}_object`).css('display', 'none');

            // Reactivate all buttons except the one clicked
            $('nav span').not(clickedButton).addClass('navbar-link');
        });
    });
});
