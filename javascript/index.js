$(document).ready(function() {
  var timer;
  var $index = document.getElementById('index');
  var viewportHeight = $index.offsetHeight;
  var fullHeight = $index.scrollHeight;

  $index.addEventListener('scroll', function() {
    if (timer) {
      window.clearTimeout(timer);
    }

    timer = window.setTimeout(function() {
      var scrollPosition = $index.scrollTop;
      var percentage = (scrollPosition) / (fullHeight - viewportHeight);
      var actual = Math.round(percentage * -10);
      $('.index-image-background').css('transform', 'translateY(' + actual + '%)');
    }, 100);
  });
});
