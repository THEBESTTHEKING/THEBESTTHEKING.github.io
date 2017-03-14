//文字滚动
(function(){
	var oUl = document.getElementById("ul1");
	var aLi = oUl.getElementsByTagName("li");
	var HEIGHT = aLi[0].offsetHeight;
	var COUNT = aLi.length;
	var number = 0;

	setInterval(doSomething,3000);
	function doSomething(){
		number--;
		if(number<=-COUNT){
			number = 0;
		}
		console.log(number);
		oUl.style.top = number*HEIGHT+"px";
	}
}());
//猜你喜欢无限加载
(function(){
	var oContent = document.getElementsByClassName("content")[0];
	var oFooter = document.getElementsByTagName("footer")[0];
	var oWindow_Height = window.innerHeight - oFooter.offsetHeight;
	var oUl = document.getElementById("love_list");
	var isFinish = false;

	function addLoading(content){
		var oFragment = document.createDocumentFragment();
		var oWrap = document.createElement("div");
		var oImg = document.createElement("img");
		var oSpan = document.createElement("span");

		oSpan.innerHTML = "正在加载！";
		oImg.src = "../img/icon_loading.png";
		oWrap.className = "loading";

		oWrap.appendChild(oImg);
		oWrap.appendChild(oSpan);
		oFragment.appendChild(oWrap);
		content.appendChild(oFragment);
		return oWrap;
	}
	var oLoading = addLoading(oContent);
	var loadingTop = 0;

	oContent.addEventListener("scroll",isShow,false)
	function isShow(){
		loadingTop = oLoading.getBoundingClientRect().top;
		if(loadingTop < oWindow_Height && !isFinish){
			ajaxLoading();
			isFinish = true;
		}
	}
	function ajaxLoading(){
		var ajax = new XMLHttpRequest();
		ajax.open("get","goods.json",true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				var text = ajax.responseText;
				var json = JSON.parse(text);
				var html = "";
				for(var attr in json){
					html += "<li><div><a href='#'><img src='"+json[attr]["img"]+"' alt=''></a></div><div class='love_text'><a href='#'>"+json[attr]["text"]+"</a></div><div class='gold'><i>￥</i>"+json[attr]["price"]+"<s>￥"+json[attr
					]["oldprice"]+"</s></div></li>";
				}
				setTimeout(function(){
					oUl.insertAdjacentHTML("beforeEnd",html);
					isFinish = false;
				},2000);
			}
		}
		ajax.send(null);
	}
}());