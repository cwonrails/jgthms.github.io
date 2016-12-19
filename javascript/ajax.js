
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
