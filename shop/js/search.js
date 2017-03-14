(function(){
	var oReset = document.getElementById("reset");
	var text = document.getElementById("search_text");

	oReset.addEventListener("touchstart",function(){
		text.value = '';
	})
}());

(function(){
	var oText = document.getElementById("search_text");
	var oDelete = document.getElementById("delete");
	var oUl = document.getElementById("search_contents");
	var oFrom = document.getElementsByTagName("form")[0];
	var Arr = ["羽绒服","毛呢外套","水杯","打底裤","茶壶","面膜","保温杯","宽松毛衣女","剃须刀","核桃夹子","3M口罩"];
	
	localforage.getItem("mycookie").then(function(value){
		if(value){
			var html = ""
			for(var i = 0; i<value.length; i++){
				html +="<li>"+value[i]+"</li>";
			}
			oUl.innerHTML = html;
		}
	})
	oDelete.addEventListener("touchstart",function(){
		oUl.innerHTML="";
		localforage.setItem("mycookie",[]);
	})

	oFrom.addEventListener("submit",function(){
		var item = oText.value.trim();
		if(item){
			localforage.getItem("mycookie",function(err,value){
				if(value==null){
					Arr.push(item);
					localforage.setItem("mycookie",Arr);
				}else {
					Arr = value;
					if(Arr.indexOf(item)<0){
						Arr.unshift(item);
						if(Arr.length > 5){
							Arr.length = 5;
						}
						localforage.setItem("mycookie",Arr);
					}
				}
				console.log(Arr);
			})
		}
	});
}())
