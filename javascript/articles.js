$(document).ready(function() {

  $('.articles-year, .articles-season').each( function() {
    $(this).affix({
      offset: {
        top: $(this).offset().top - 58
      }
    });
  });

  var s = skrollr.init();

});
