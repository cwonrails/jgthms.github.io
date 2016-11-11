$(document).ready(function() {

  $('.articles-year, .articles-season').each( function() {
    $(this).affix({
      offset: {
        top: $(this).offset().top - 60 - 4 // 18px * 0.225rem
      }
    });
  });

});
