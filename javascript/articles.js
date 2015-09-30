jQuery(document).ready(function ($) {

  var $articles = $('#articles');
  var $switch = $('#switch');
  var recommended = false;
  var hash = location.hash.replace('#', '');

  function setRecommended() {
    if (recommended) {
      history.replaceState('', document.title, window.location.pathname + '#recommended');
      $switch.addClass('is-active');
      $articles.addClass('only-recommended');
    } else {
      history.replaceState('', document.title, window.location.pathname);
      $switch.removeClass('is-active');
      $articles.removeClass('only-recommended');
    }
  }

  if (hash == 'recommended') {
    recommended = true;
  }

  setRecommended();

  $switch.click(function() {
    recommended = !recommended;
    setRecommended();
  })

});