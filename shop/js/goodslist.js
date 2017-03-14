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
				url:"goodslist.json"
			}).done(function(json){
				var html = "";
				for(var attr in json){
					html += "<li><a href='#'><img src='"+json[attr]["img"]+"' alt=''></a><p><a href='#'>"+json[attr]["text"]+"</a></p><div class='gold'><i class='smail'>￥</i>"+json[attr]["price"]+"<s>￥"+json[attr]["oldprice"]+"</s></div></li>";
				}
				setTimeout(function(){
					$("#ul1").append($(html));
					isFinish = false;
				},2000)
			});
		}
	})
}());
//筛选
(function(){
	$("#selector").on("touchstart",function(){
		$("aside").css("left",0);
		$(".content_img").addClass("hidden_content");
	})
	$(".null_left").on("touchstart",function(){
		$("aside").css("left","100%");
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
(function(){
	var oBtns = document.getElementsByClassName("selects");
	var oContents = document.getElementsByClassName("contents_2");
	var myrotate = document.getElementsByClassName("myrotate");
	for(var i = 0; i< oBtns.length; i++){
		oBtns[i].toggle = true;
		oBtns[i].index = i;
		oBtns[i].addEventListener("touchstart",function(){
			console.log(this.index)
			if(this.toggle){
				oContents[this.index].classList.remove("Heightnone");
				oContents[this.index].classList.add("autoHeight");
				myrotate[this.index].classList.add("myrotates");
				oBtns[this.index].toggle = false;
			}else{
				oContents[this.index].classList.remove("autoHeight");
				oContents[this.index].classList.add("Heightnone");
				myrotate[this.index].classList.remove("myrotates");
				oBtns[this.index].toggle = true;
			}
			for(var i = 0; i< oBtns.length; i++){
				if(this.index != i){
					oContents[i].classList.remove("autoHeight");
					oContents[i].classList.add("Heightnone");
					myrotate[i].classList.remove("myrotates");
					oBtns[i].toggle = true;
				}
			}
		})
	}
}());

(function(){
	var eight_info = document.getElementsByClassName("eight_info")[0];
	var aLi = eight_info.getElementsByTagName("li");
	var old = aLi[1];
	for(var i = 0; i<aLi.length; i++){
		eight_info.addEventListener("touchstart",function(event){
			var event = window.event || event;
			var target = event.target || event.srcElement;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.canceBubble = true;
			}
			var nodeNAME = target.nodeName.toLowerCase();
			if(nodeNAME == "li"){
				old.classList.remove("active");
				target.classList.add("active");
				old = target;
			}
		})
	}
}());