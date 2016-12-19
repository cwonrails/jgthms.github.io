document.addEventListener('DOMContentLoaded', function() {

  /* Nav stuff */
  var $root = document.documentElement;
  var rootStyles = window.getComputedStyle($root);
  var colorLinkOriginal = rootStyles.getPropertyValue('--colorLink');
  var colorLinkInvertOriginal = rootStyles.getPropertyValue('--colorLinkInvert');
  var $nav = document.getElementById('nav');
  var $navLinks = document.querySelectorAll('.nav-link');
  var $title = document.getElementById('title');
  var titleOriginal = $title.innerHTML;
  var $helloLinks = document.querySelectorAll('.nav-link, #jt, .hello a, .elsewhere-link');

  function addEventListeners() {
    Array.prototype.forEach.call($helloLinks, function($item) {
      $item.addEventListener('mouseenter', eventHelloLinkEnter);
      $item.addEventListener('mouseleave', eventHelloLinkLeave);
    });
  }

  function removeEventListeners() {
    Array.prototype.forEach.call($helloLinks, function($item) {
      $item.removeEventListener('mouseenter', eventHelloLinkEnter);
      $item.removeEventListener('mouseleave', eventHelloLinkLeave);
    });
  }

  function eventHelloLinkEnter(event) {
    setTitle(event.target);
  }

  function eventHelloLinkLeave(event) {
    unsetTitle();
  }

  function setTitle($el) {
    var title = $el.dataset.title;
    $title.innerHTML = title;
    $title.classList.add('is-hovering');
    var color = $el.dataset.color;
    if (color) {
      $root.style.setProperty(`--colorLink`, color);
    }
    if ($el.dataset.invert) {
      $root.style.setProperty(`--colorLinkInvert`, 'rgba(0,0,0,0.71)');
    } else {
      $root.style.setProperty(`--colorLinkInvert`, '#fff');
    }
  }

  function unsetTitle() {
    $title.innerHTML = titleOriginal;
    $title.classList.remove('is-hovering');
    $root.style.setProperty(`--colorLink`, colorLinkOriginal);
    $root.style.setProperty(`--colorLinkInvert`, colorLinkInvertOriginal);
  }

  function doneResizing() {
    if (window.innerWidth > 800) {
      addEventListeners();
    } else {
      removeEventListeners();
    }
  }
  doneResizing();

  var resizeId;
  window.addEventListener('resize', function(event) {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
  });

  /* Image lazy load */
  var bLazy = new Blazy();

  /* Back to top */
  var $top = document.getElementById('top');

  if ($top) {
    $top.addEventListener('click', function(event) {
      window.scrollTo(0,0);
    });
  }

});
