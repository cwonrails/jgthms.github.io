function limitRange(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

document.addEventListener('DOMContentLoaded', () => {
  var $items = $('.is-transformed');
  var $zooms = $('.is-zoomed');
  var $unzooms = $('.is-unzoomed');
  var $contents = $('.index-content');
  var $index = document.getElementById('index');
  var indexHeight = $index.scrollHeight;
  var currentScroll = $index.scrollTop;
  var $marksheet = document.getElementById('marksheet');
  var marksheetOffset = $marksheet.offsetTop;
  var $bulma = document.getElementById('bulma');
  var bulmaOffset = $bulma.offsetTop;
  var $follow = document.getElementById('follow');
  var followOffset = $follow.offsetTop;

  function translateHandler() {
    currentScroll = $index.scrollTop;
    var base = (currentScroll * -1) + (indexHeight / 2);
    var basePercentage = base / indexHeight;

    var itemValue = base / 20;
    var itemTransform = 'translate3d(0, '+itemValue+'px, 0)';
    $items.each(function() {
      this.style.transform = itemTransform;
    });

    var contentValue = basePercentage * 50;
    var contentTransform = 'translate3d(0, '+contentValue+'%, 0)';
    $contents.each(function() {
      this.style.transform = contentTransform;
    });

    var zoomValue = (marksheetOffset - currentScroll);
    var zoomRange = limitRange(zoomValue, 100, 500);
    var zoomPercentage = (zoomRange - 100) / 400;
    var zoomScale = 1 + (0.1 * zoomPercentage);

    if (currentScroll <= marksheetOffset) {
      var zoomTransform = 'scale('+(zoomScale)+')';
      $zooms.each(function() {
        this.style.transform = zoomTransform;
      });
    }

    var bulmaValue = (bulmaOffset - currentScroll);
    var bulmaRange = limitRange(bulmaValue, 100, 500);
    var bulmaPercentage = (bulmaRange - 100) / 400;
    var bulmaScale = 1 - (0.1 * bulmaPercentage);

    if (currentScroll <= bulmaOffset) {
      var bulmaTransform = 'scale('+(bulmaScale)+')';
      $unzooms.each(function() {
        this.style.transform = bulmaTransform;
      });
    }

    var followValue = (followOffset - currentScroll);
    var followRange = limitRange(followValue, 100, 500);
    var followPercentage = (followRange - 100) / 400;
    var followScale = 1 - (0.1 * followPercentage);

    if (currentScroll <= followOffset) {
      var followTransform = 'scale('+(followScale)+')';
      $follow.style.transform = followTransform;
    }
  }

  $index.addEventListener('scroll', function() {
    window.requestAnimationFrame(translateHandler);
  }, false);
});
