jQuery(document).ready(function ($) {

  var $articles = $('#articles');
  var $text-strong = $articles.find('.heading h1');
  var $switch = $('#switch');
  var recommended = false;

  function setRecommended() {
    if (recommended) {
      history.replaceState('', document.title, 'recommended-articles.html');
      $switch.addClass('is-active').attr('href', 'articles.html');
      $articles.addClass('only-recommended');
      $text-strong.text('Recommended articles');
    } else {
      history.replaceState('', document.title, 'articles.html');
      $switch.removeClass('is-active').attr('href', 'recommended-articles.html');
      $articles.removeClass('only-recommended');
      $text-strong.text('Articles');
    }
  }

  if (window.location.pathname == '/recommended-articles.html') {
    recommended = true;
  }

  setRecommended();

  $switch.click(function(e) {
    e.preventDefault();
    recommended = !recommended;
    setRecommended();
  })

});
