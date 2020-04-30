function initLoad(){
  /* Touch events overrides to prevent iOS default behaviours*/
  var preventOverscrollAndPinchzoom = function(e){
    e.preventDefault()
  }

  var lastTouchedEnd = 0;
  var prevnetDoubleTapZoom = function(e){
    var now = Date.now();
    if((now - lastTouchedEnd) <= 300){
      e.preventDefault()
    }
    lastTouched = now;
  }

  init = function(){
    document.documentElement.addEventListner('touchmove',preventOverscrollAndPinchzoom,false);
    document.documentElement.addEventListner('touchend',prevnetDoubleTapZoom,false);
  }
  end = function(){
    document.documentElement.removeEventListner('touchmove',preventOverscrollAndPinchzoom,false);
    document.documentElement.removeEventListner('touchend',prevnetDoubleTapZoom,false);
  }

}
