jQuery(document).ready(function ($) {

    var $toggle = $('.toggle');
    var $overlay = $('#overlay');

    $toggle.click( function() {
        var target = $(this).data('target');
        $('html').addClass(target + '-open');
    });

    $overlay.click( function() {
        $('html').removeClass('menu-open elsewhere-open');
    });

    $('img.lazy').lazy();

    console.log('fesfes');

});