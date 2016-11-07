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
	},
	//跨浏览器的事件对象
	getEvent: function (event){
		return event ? event :window.event;
	},
	getTarget: function (event){
		return event.target || event.srcElement;
	},
	//阻止默认事件
	preventDefault: function (event){
		if (event.preventDefault){
		event.preventDefault();
		}
		else {
		event.returnValue = false;
		}
	},
	//提供 mouseover,mouseout事件的相关元素的信息
	getRelatedTarget: function (event){
		if (event.relatedTarget){
		return event.relatedTarget;
		}
		else if (event.fromElement){
		return event.fromElement;
		}
		else if (event.toElement){
		return event.toElement;
		}
		else {
		return null;
		}
	},
	//获取鼠标按键的button值，0-左键；1-滚轮；2-右键；
	getButton: function (event){
		if (document.implementation.hasFeature("MouseEvents","2.0")){
		return event.button;
		}
		else {
			//IE8以下的不支持DOM的button属性
		  switch (event.button){
			  case 0:
			  case 1:
			  case 3:
			  case 5:
			  case 7:
				  return 0;break;
			  case 2:
			  case 6:
				  return 2;break;
			  case 4:
				  return 1;
		  }
		}
	},
	//滚轮事件：
	//Firefox：DOMMouseScroll事件（老版本）/wheel(新版本)，有关滚轮的信息保存在detail属性中，向前滚=>-3的倍数，向后滚=>3 的倍数；
	//其他浏览器：mouseWheel事件，滚轮信息保存在wheelDelta中，向前滚=>120的倍数，向后滚=>-120 的倍数
	getWheelDelta: function (event){
		if (event.wheelDelta){
			return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
		}
		else {
			return -event.detail*40;
		}
	},
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
	},
	//阻止事件冒泡
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
