$(document).ready(function() {

  $('.projects-body').each( function() {
    $(this).affix({
      offset: {
        top: $(this).offset().top
      }
    });
  });

});
