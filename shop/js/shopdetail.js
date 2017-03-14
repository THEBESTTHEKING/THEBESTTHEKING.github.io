(function(){
	//创建正在加载
	function createElements(){
		var oDiv = document.createElement("div");
		var oSpan = document.createElement("span");
		var oImg = document.createElement("img");
		var fragmentElement = document.createDocumentFragment();
		var oContent = document.getElementsByClassName("content")[0];

		oDiv.className = "loading";
		oSpan.innerHTML = "正在加载";
		oImg.src="../img/icon_loading.png";
		oDiv.appendChild(oImg);
		oDiv.appendChild(oSpan);
		fragmentElement.appendChild(oDiv);
		oContent.appendChild(fragmentElement);
		return oDiv;
	}

	//检测正在加载在窗口显示加载内容
	function checkLoad(){
		var oContent = document.getElementsByClassName("content")[0];
		var loadDiv = createElements();
		var loadTop = 0;
		loadDiv.isFinish = false;
		var win_h = window.innerHeight;
		oContent.addEventListener("scroll",isShow,false);
		function isShow(){
			loadTop = loadDiv.getBoundingClientRect().top;
			if(loadTop<win_h && !loadDiv.isFinish){
				ajaxLoad(loadDiv);
				isFinish = true;
			}
		}
	}

	function ajaxLoad(loadDiv){
		var oUl = document.getElementsByClassName("ul1")[0];
		var xhr = new XMLHttpRequest();
		xhr.open("get","shopdetail.json",true);
		xhr.onreadystatechange = function(){
			console.log("sss");
			if(xhr.readyState == 4 && xhr.status ==200){
				var str = xhr.responseText;
				var obj = JSON.parse(str);
				var html = "";
				for(var key in obj){
					html += '<li>'+
					'<a href="#">'+
						'<img src="'+obj[key]["img"]+'" alt="">'+
					'</a>'+
					'<p>'+obj[key]["text"]+'</p>'+
					'<div class="menoy">￥<span>'+obj[key]["money"]+'</span></div>'+
				'</li>';
				}
				setTimeout(function(){
					oUl.insertAdjacentHTML("beforeEnd",html);
					loadDiv.isFinish = false;
				},2000);
			
			}
		}
		xhr.send(null);
	}

	checkLoad();

}())