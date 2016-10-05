$(document).ready(function() {

  $('img.lazy').unveil();

  $('.projects-body').each( function() {
    $(this).affix({
      offset: {
        top: $(this).offset().top
      }
    });
  });

});
