document.addEventListener('DOMContentLoaded', function() {

  var bLazy = new Blazy();

  var $root = document.documentElement;
  var bodyBackgroundOriginal = $root.style.getPropertyValue('--bodyBackground');
  var colorLinkOriginal = $root.style.getPropertyValue('--colorLink');
  var $nav = document.getElementById('nav');
  var $navLinks = document.querySelectorAll('.nav-link');
  var $title = document.getElementById('title');
  var titleOriginal = $title.innerHTML;
  var $helloLinks = document.querySelectorAll('#jt, .hello a, .elsewhere-link');

  Array.prototype.forEach.call($navLinks, function($item) {
    var backgroundColor = $item.dataset.backgroundColor;
    var color = $item.dataset.color;
    $item.addEventListener('mouseenter', function(event) {
      $root.style.setProperty(`--colorLink`, color);
      setTitle(this);
    });
  });

  $nav.addEventListener('mouseleave', function(event) {
    $root.style.setProperty(`--colorLink`, colorLinkOriginal);
    unsetTitle();
  });

  Array.prototype.forEach.call($helloLinks, function($item) {
    $item.addEventListener('mouseenter', function(event) {
      setTitle(this);
    });
    $item.addEventListener('mouseleave', function(event) {
      unsetTitle();
    });
  });

  function setTitle($el) {
    var title = $el.dataset.title;
    $title.innerHTML = title;
    $title.classList.add('is-hovering');
  }

  function unsetTitle() {
    $title.innerHTML = titleOriginal;
    $title.classList.remove('is-hovering');
  }

  var $top = document.getElementById('top');
  $top.addEventListener('click', function(event) {
    window.scrollTo(0,0);
  });

});
