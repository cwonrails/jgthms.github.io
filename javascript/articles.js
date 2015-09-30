jQuery(document).ready(function ($) {

  var $articles = $('#articles');
  var $switch = $('#switch');

  $switch.click(function() {
    $switch.toggleClass('is-active');
    $articles.toggleClass('only-recommended');
  })

});