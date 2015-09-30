jQuery(document).ready(function ($) {

  var $articles = $('#articles');
  var $switch = $('#switch');
  var recommended = false;

  function setRecommended() {
    if (recommended) {
      history.replaceState('', document.title, 'recommended-articles.html');
      $switch.addClass('is-active');
      $articles.addClass('only-recommended');
    } else {
      history.replaceState('', document.title, 'articles.html');
      $switch.removeClass('is-active');
      $articles.removeClass('only-recommended');
    }
  }

  if (window.location.pathname == '/recommended-articles.html') {
    recommended = true;
  }

  setRecommended();

  $switch.click(function() {
    recommended = !recommended;
    setRecommended();
  })

});