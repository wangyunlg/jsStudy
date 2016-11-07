var addMouseWheelHandler = function(){
    if (document.addEventListener) {
        document.addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
        document.addEventListener('wheel', MouseWheelHandler, false); //Firefox
        document.addEventListener('DOMMouseScroll', MouseWheelHandler, false); //Old Firefox
    } else {
        document.attachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
    }
},
removeMouseWheelHandler = function(){
    if (document.addEventListener) {
        document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
        document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
        document.removeEventListener('DOMMouseScroll', MouseWheelHandler, false); //old Firefox
    } else {
        document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
    }
},
stopDefault = function(e) { 
    //W3C
    if ( e && e.preventDefault ) 
        e.preventDefault(); 
    //IE 
    else
        window.event.returnValue = false; 
    return false; 
},
MouseWheelHandler = function(e) {//滚动后的处理函数
    stopDefault(e);
    var e = e || window.event,
        value = e.wheelDelta || -e.deltaY || -e.detail,
        delta = Math.max(-1, Math.min(1, value));
    if (delta < 0) {//scrolling down
         
     
    }else {//scrolling up
         
    }
};
 
//调用
addMouseWheelHandler();