document.addEventListener('DOMContentLoaded', function() {

  var bLazy = new Blazy();

  var $root = document.documentElement;
  var bodyBackgroundOriginal = $root.style.getPropertyValue('--bodyBackground');
  var colorLinkOriginal = $root.style.getPropertyValue('--colorLink');
  var $nav = document.getElementById('nav');
  var $navLinks = document.querySelectorAll('.nav-link');
  var $title = document.getElementById('title');
  var titleOriginal = $title.innerHTML;
  var $helloLinks = document.querySelectorAll('#jt, .hello a');

  Array.prototype.forEach.call($navLinks, function($item) {
    var backgroundColor = $item.dataset.backgroundColor;
    var color = $item.dataset.color;
    $item.addEventListener('mouseenter', function(event) {
      // $root.style.setProperty(`--bodyBackground`, backgroundColor);
      $root.style.setProperty(`--colorLink`, color);
      setTitle(this);
    });
  });

  $nav.addEventListener('mouseleave', function(event) {
    // $root.style.setProperty(`--bodyBackground`, bodyBackgroundOriginal);
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

  // var $root = document.documentElement;
  // var $content = document.getElementById('content');
  // var $menuLinks = document.querySelectorAll('.menu-link');

  // Array.prototype.forEach.call($menuLinks, function($item) {
  //   $item.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     console.log('OIJOIJO');

  //     var target = $item.dataset.page;
  //     var ajaxTarget = `/ajax/${target}.html`;
  //     setPage(target);

  //     // getHTML(ajaxTarget, function(response) {
  //     //   removeClasses($menuLinks, 'is-active');
  //     //   $item.classList.add('is-active');
  //     //   // var $newContent = response.getElementById('content');
  //     //   var newTitle = response.title;
  //     //   var newContent = response.documentElement.innerHTML;
  //     //   $content.innerHTML = newContent;
  //     // });
  //   });
  // });

});

function setPage(page) {
   history.replaceState('', document.title, `${page}.html`);
}

function removeClasses($items, className) {
  Array.prototype.forEach.call($items, function($item) {
    $item.classList.remove(className);
  });
}

function getHTML(url, callback) {
  if ( !window.XMLHttpRequest ) return;

  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (callback && typeof(callback) === 'function') {
      callback(this.responseXML);
    }
  }
  xhr.open('GET', url);
  xhr.responseType = 'document';
  xhr.send();
};
