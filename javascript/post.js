$(document).ready(function() {

  var $headings = $('#content h2, #content h3');

  $headings.each(function() {
    var $el = $(this);
    var id = $el.attr('id');
    if (id) {
      $el.prepend(
        $('<a />')
        .addClass('anchor')
        .attr('href', '#' + id)
        .html('#')
      );
    }
  });

  $('#top').click( function() {
    window.scrollTo(0,0);
  });

});
