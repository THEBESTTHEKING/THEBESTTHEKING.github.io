//价格高低排序
(function(){
	$("#otoggle").on("click",function(){
		$("#select").toggle();
	});
}());

//ajax的加载
(function(){
	function createLoading(){
		var oDiv = $("<div class='loading'><img src='../img/icon_loading.png'/><span>正在加载!</span></div>");
		$("body").append(oDiv);
		return oDiv;
	}
	var loading = createLoading()[0];
	var loadTop = 0;
	var isFinish = false;
	$(window).on("scroll",function(){
		loadTop = loading.getBoundingClientRect().top;
		if(loadTop < $(window).height() && !isFinish){
			isFinish = true;
			$.ajax({
				type:"GET",
				url:"goodslist2.json"
			}).done(function(json){
				var html = "";
				for(var attr in json){
					html += '<li><a href="#"><img src="'+json[attr]["img"]+'" alt=""></a><div class="info"><p><a href="#">'+json[attr]["text"]+'</a></p><div class="runcase">包邮</div><i class="smail">￥</i>'+json[attr]["price"]+' <s>￥'+json[attr]["oldprice"]+'</s></div></li>';
				}
				setTimeout(function(){
					$("#ul1").append($(html));
					isFinish = false;
				},2000)
			});
		}
	})
}());

//回到顶部
(function(){
	$("#list_change").on("touchstart",function(){
		//$('body,html').animate({ scrollTop: 0 }, 500); 
	});
	$("#to_top").on("touchstart",function(){
		$('body,html').animate({ scrollTop: 0 }, 500); 
	});
}());