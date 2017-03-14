(function(){
	function showSize(){
		var size_right = document.getElementsByClassName("size_right")[0];
		var show_size = document.getElementsByClassName("show_size")[0];
		var btn_close = document.getElementsByClassName("btn_close")[0];
		var ul3_size = document.getElementsByClassName("ul3_size")[0];
		var aSpan = ul3_size.getElementsByTagName("span");
		var btn_select = document.getElementsByClassName("imgtext_top")[0];
		var btn_span = btn_select.getElementsByTagName("span");
		var contents = document.getElementsByClassName("ul_contents");
		var btn_span_old = btn_span[btn_span.length-1];
		var old = aSpan[0];

		for(var i = 0; i < btn_span.length; i++){
			btn_span[i].index = i;
		}
		size_right.addEventListener("touchstart",function(){
			show_size.classList.remove("none");
		});
		btn_close.addEventListener("touchstart",function(){
			show_size.classList.add("none");
		});
		ul3_size.addEventListener("touchstart",function(event){
			var event = event || window.event;
			var target = event.target || event.srcElement;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
			var eleName = target.nodeName.toLowerCase();
			if(eleName == "span"){
				old.classList.remove("active");
				target.classList.add("active");
				old = target;

			}
			//show_size.classList.add("none");
		});
		btn_select.addEventListener("touchstart",function(event){
			var event = event || window.event;
			var target = event.target || event.srcElement;
			for(var i = 0; i < contents.length; i++){
		}
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
			var names =  target.nodeName.toLowerCase();
			if(names == "span"){
				btn_span_old.classList.remove("active");
				target.classList.add("active");
				contents[btn_span_old.index].classList.add("none");
				contents[target.index].classList.remove("none");
				btn_span_old = target;
			}
		});
	}
	showSize();
}());