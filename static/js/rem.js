/**
 * [自适应代码]
 * @Author   郑君婵
 * @DateTime 2017-10-27
 */
(function(doc, win) {
  var docEl = doc.documentElement,
    dpr = 1,
    scale = 1 / dpr;

  var metaEl = doc.createElement('meta');
  metaEl.name = "viewport";
  metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale;

  docEl.firstElementChild.appendChild(metaEl);

  var recalc = function() {
    var deviceWidth = docEl.clientWidth ? docEl.clientWidth : window.screen.width;

    if (deviceWidth > 640) {
      deviceWidth = 640
    };

    docEl.style.fontSize = deviceWidth / 7.5 + 'px';

    window.rem = deviceWidth / 7.5;
  };

  recalc();
})(document, window);
