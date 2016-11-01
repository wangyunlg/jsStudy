function getQueryStringArgs (){
	//去的查询字符串并去掉开头问号
	var qs = (location.search.length > 0) ? location.search.substring(1) : "";
	//存储数据的对象
	var args = {};
	//取得每一项
	var items = qs.length ? qs.split("&") : [];
	var item = null,
		name = null,
		value = null;
	for (var i = 0; i < items.length; i ++){
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.lenght > 0) {
			args[name] = value;
		}
	}
	return args;
}