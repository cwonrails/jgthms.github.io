function jtv() {

  const d = document,
    bd = d.getElementsByTagName('body')[0],
    htm = d.getElementsByTagName('html')[0],
    win = window,
    imgs = d.querySelectorAll('.jtv'),
    totalImgs = imgs.length,
    supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;

  if (totalImgs <= 0) {
    return;
  }

  // build HTML
  for (let l = 0;l < totalImgs;l++) {

    const thisImg = imgs[l],
      layerElems = thisImg.querySelectorAll('.jtv-layer'),
      totalLayerElems = layerElems.length;

    if (totalLayerElems <= 0) {
      continue;
    }

    while (thisImg.firstChild) {
      thisImg.removeChild(thisImg.firstChild);
    }

    const containerHTML = d.createElement('div'),
      shineHTML = d.createElement('div'),
      shadowHTML = d.createElement('div'),
      layersHTML = d.createElement('div'),
      layers = [];

    thisImg.id = `jtv__${l}`;
    containerHTML.className = 'jtv-container';
    shineHTML.className = 'jtv-shine';
    shadowHTML.className = 'jtv-shadow';
    layersHTML.className = 'jtv-layers';

    for (let i = 0;i < totalLayerElems;i++) {
      const layer = d.createElement('div');
      layer.appendChild(layerElems[i]);
      layer.className = 'jtv-rendered-layer';
      layer.setAttribute('data-layer', i);
      layersHTML.appendChild(layer);

      layers.push(layer);
    }

    containerHTML.appendChild(shadowHTML);
    containerHTML.appendChild(layersHTML);
    containerHTML.appendChild(shineHTML);
    thisImg.appendChild(containerHTML);

    const w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
    thisImg.style.transform = `perspective(${ w * 3 }px)`;

    if (supportsTouch) {
      win.preventScroll = false;

      (function(_thisImg, _layers, _totalLayers, _shine) {
        thisImg.addEventListener('touchmove', function(e) {
          if (win.preventScroll) {
            e.preventDefault();
          }
          processMovement({e, touchEnabled: true, elem: _thisImg, layers: _layers, totalLayers: _totalLayers, shine: _shine});
        });
        thisImg.addEventListener('touchstart', function(e) {
          win.preventScroll = true;
          processEnter(e, _thisImg);
        });
        thisImg.addEventListener('touchend', function(e) {
          win.preventScroll = false;
          processExit(e, _thisImg, _layers, _totalLayers, _shine);
        });
      }(thisImg, layers, totalLayerElems, shineHTML));
    } else {
      (function(_thisImg, _layers, _totalLayers, _shine) {
        thisImg.addEventListener('mousemove', function(e) {
          processMovement({e, touchEnabled: false, elem: _thisImg, layers: _layers, totalLayers: _totalLayers, shine: _shine});
        });
        thisImg.addEventListener('mouseenter', function(e) {
          processEnter(e, _thisImg);
        });
        thisImg.addEventListener('mouseleave', function(e) {
          processExit(e, _thisImg, _layers, _totalLayers, _shine);
        });
      }(thisImg, layers, totalLayerElems, shineHTML));
    }
  }

  function processMovement({e, touchEnabled, elem, layers, totalLayers, shine}) {

    const bdst = bd.scrollTop || htm.scrollTop,
      bdsl = bd.scrollLeft,
      pageX = (touchEnabled) ? e.touches[0].pageX : e.pageX,
      pageY = (touchEnabled) ? e.touches[0].pageY : e.pageY,
      offsets = elem.getBoundingClientRect(),
      w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth, // width
      h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight, // height
      wMultiple = 320 / w,
      offsetX = 0.52 - (pageX - offsets.left - bdsl) / w, //cursor position X
      offsetY = 0.52 - (pageY - offsets.top - bdst) / h, //cursor position Y
      dy = (pageY - offsets.top - bdst) - h / 2, //@h/2 = center of container
      dx = (pageX - offsets.left - bdsl) - w / 2, //@w/2 = center of container
      yRotate = (offsetX - dx) * (0.07 * wMultiple), //rotation for container Y
      xRotate = (dy - offsetY) * (0.1 * wMultiple), //rotation for container X
      arad = Math.atan2(dy, dx); //angle between cursor and center of container in RAD
    let imgCSS = `rotateX(${ xRotate }deg) rotateY(${ yRotate }deg)`, //img transform
      angle = arad * 180 / Math.PI - 90; //convert rad in degrees

    //get angle between 0-360
    if (angle < 0) {
      angle = angle + 360;
    }

    //container transform
    if (elem.firstChild.className.indexOf(' over') !== -1) {
      imgCSS += ' scale3d(1.04,1.04,1.04)';
    }
    elem.firstChild.style.transform = imgCSS;

    //gradient angle and opacity for shine
    shine.style.background = `linear-gradient(${ angle }deg, rgba(255,255,255,${ (pageY - offsets.top - bdst) / h * 0.4 }) 0%,rgba(255,255,255,0) 80%)`;
    shine.style.transform = `${`${`translate3d(${ offsetX * totalLayers}` - 0.1 }px, ${ offsetY * totalLayers}` - 0.1 }px, 0)`;

    //parallax for each layer
    let revNum = totalLayers;
    for (let ly = 0;ly < totalLayers;ly++) {
      layers[ly].style.transform = `translate3d(${ (offsetX * revNum) * ((ly * 2.5) / wMultiple) }px, ${ (offsetY * totalLayers) * ((ly * 2.5) / wMultiple) }px, 0)`;
      revNum--;
    }
  }

  function processEnter(e, elem) {
    elem.firstChild.className += ' over';
  }

  function processExit(e, elem, layers, totalLayers, shine) {

    const container = elem.firstChild;

    container.className = container.className.replace(' over', '');
    container.style.transform = '';
    shine.style.cssText = '';

    for (let ly = 0;ly < totalLayers;ly++) {
      layers[ly].style.transform = '';
    }

  }

}

document.addEventListener('DOMContentLoaded', () => {
  jtv();
});
