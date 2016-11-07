//跨浏览器的事件处理程序
//为使大多数浏览器一致运行，只需关注冒泡阶段；（ie8以下不支持事件流和事件捕获）
var Eventutil = {
	addHandler: function (element,type,handler){
		if (element.addEventListener){   //DOM2级事件处理程序
			element.addEventListener(type,handler,false);
		}
		else if (element.attachEvent){   //IE事件处理程序
			element.attachEvent("on"+type,handler);
		}
		else{
			element["on"+type] = handler; //DOM 0级事件处理程序
		}
	}
	//跨浏览器的事件对象
	getEvent: function (event){
		return event ? event :window.event;
	}
	getTarget: function (event){
		return event.target || event.srcElement;
	}
	preventDefault: function (event){
		if (event.preventDefault){
		event.preventDefault();
		}
		else {
		event.returnValue = false;
		}
	}
	removeHandler: function (element,type,handler){
		if (element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}
		else if (element.detachEvent){
			element.detachEvent("on"+type,handler);
		}
		else {
			element["on"+type] = null;
		}
	}
	stopPropagation: function (event){
		if (event.stopPropagation){
		event.stopPropagation();
		}
		else {
		event.cancelBubble = true;
		}
	}
}
//注意事项：
//IE事件处理程序是在 全局作用域 内运行，this=window；其它的是在其所属元素的作用域内运行；
//DOM 0级事件处理程序同一事件只能添加一个处理函数，DOM 2级，IE 同一事件可以添加多次不同处理函数；
//IE事件处理函数多个处理程序执行顺序是与其添加顺序相反；
//removeEventListener, detachEvent 无法移除添加的匿名函数；
