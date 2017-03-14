(function(){
	var content = document.getElementsByClassName("content")[0];
	var oUl = document.getElementsByClassName("ul1")[0];
	var window_H = window.innerHeight;
	var loadDiv = null;
	var loadTop = 0;
	var isFinish = false;
	function createLoading(){
		var createDiv = document.createElement("div");
		var createImg = document.createElement("img");
		var createSpan = document.createElement("span");
		var createFramElement = document.createDocumentFragment();
		createImg.src = "../img/icon_loading.png";
		createSpan.innerHTML = "正在加载！";
		createDiv.className = "loading";
		createDiv.appendChild(createImg);
		createFramElement.appendChild(createDiv);
		console.log(content);
		content.appendChild(createFramElement);
		return createDiv;
	};
	loadDiv = createLoading();
	content.addEventListener("scroll",function(){

		loadTop = loadDiv.getBoundingClientRect().top;
		console.log(loadTop,window_H);
		if(loadTop<window_H && !isFinish){
			isFinish = true;
			ajaxLoading();
		}

	},false);
	function ajaxLoading(){
		var xhr = new XMLHttpRequest();
		xhr.open("get","shoplist.json",true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState ==4 && xhr.status ==200){
				var text = xhr.responseText;
				var obj = JSON.parse(text);
				var html = "";
				for(var attr in obj){
					html += '<li>'+
								'<div class="prev">'+
									'<a href="#"><img class="shop_Img" src="'+obj[attr]["shop_Img"]+'" alt=""></a>'+
									'<div class="prev_center">'+
										'<h3 class="shop_name">'+obj[attr]["shop_name"]+'</h3>'+
										'<div class="info">销量 <span class="out_count2">'+obj[attr]["out_count2"]+'</span>  共 <span class="all_count2">'+obj[attr]["all_count2"]+'</span>件商品</div>'+
									'</div>'+
									'<a class="a_into" href="javascript:void(0);"> <div class="into">进店看看</div></a>'+
								'</div>'+
								'<div class="next">'+
									'<a href="#">'+
										'<img class="img1" src="'+obj[attr]["img1"]+'" alt="">'+
										'<span class="text1">'+obj[attr]["text1"]+'</span>'+
									'</a>'+
									'<a href="#">'+
										'<img class="img2" src="'+obj[attr]["img2"]+'" alt="">'+
										'<span class="text2">'+obj[attr]["text2"]+'</span>'+
									'</a>'+
									'<a href="#">'+
										'<img class="img3" src="'+obj[attr]["img3"]+'" alt="">'+
										'<span class="text3">'+obj[attr]["text3"]+'</span>'+
									'</a>'+
									'<a href="#">'+
										'<img class="img4" src="'+obj[attr]["img4"]+'" alt="">'+
										'<span class="text4">'+obj[attr]["text4"]+'</span>'+
									'</a>'+
								'</div>'+
							'</li>';
				}
				setTimeout(function(){
					oUl.insertAdjacentHTML("beforeEnd",html);
					isFinish = false;
				},2000);
			}
		}
		xhr.send(null);
	}
}());