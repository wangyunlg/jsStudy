//偏移量
//offsetHeight :元素在垂直空间上占用的空间大小，包含元素的高度（内容+padding），上下边框，水平滚动条的高度
//offsetTop :元素的外边框距包含元素（offsetParent）的内边框的距离
//offsetParent：居元素最近的具有定位的祖元素，若无，则指向body；
//元素距页面的左偏移量
function getElementLeft (element){
	var actualLeft = element.offsetLeft;
	var current =element.offsetParent;
	while (current != null){
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}
//元素距页面顶部的偏移量
function getElementTop (element){
	var actualTop = element.offsetTop;
	var current =element.offsteParent;
	while (current != null){
		actualTop += current.offsetTop;
		current = current.offsetParent; 
	}
	return acrualTop;
}


//元素的客户区大小：元素的内容+padding，不包含滚动条大小；
//clientWidth = content + 左右padding；
//确定浏览器的窗口的大小：
//document.documentElement 或者 document.body(IE7之前)；
function getViewPort (){
	//BackCompat  混杂模式；
	//CSS1Compat 标准模式
	if (document.compatMode == "BackCompat"){
		return {width:document.body.clientWidth,
			height:document.body.clientHeight};
	}
	else {
		return {width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight};
	}
}
//以上属性都是只读的，每次访问都要重新进行计算，（会影响性能）



//滚动大小
//有些元素自动添加滚动条（html），其他元素需要CSS属性设置overflow;
//scrollHeight:元素内容的实际总高度；
//scrollTop:隐藏在内容区域上方的像素数；
//带有滚动条的页面的垂直总高度: document.documentElement.scrollHeight;
//一个准确获取网页客户区的宽高、滚动条宽高、滚动条Left和Top的代码：
if (document.compatMode == "BackCompat") {
cWidth = document.body.clientWidth;
cHeight = document.body.clientHeight;
sWidth = document.body.scrollWidth;
sHeight = document.body.scrollHeight;
sLeft = document.body.scrollLeft;
sTop = document.body.scrollTop;
}
else { //document.compatMode == \"CSS1Compat\"
cWidth = document.documentElement.clientWidth;
cHeight = document.documentElement.clientHeight;
sWidth = document.documentElement.scrollWidth;
sHeight = document.documentElement.scrollHeight;
sLeft = document.documentElement.scrollLeft == 0 ? document.body.scrollLeft : document.documentElement.scrollLeft;
sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
}
//谷歌浏览器不支持document.documentElement.scrollTop，值=0;