(function(){
	function getSize(){
		var oDom = document.documentElement;
		var oWidth = window.innerWidth;
		var oSize = oWidth / 10 + "px";
		oDom.style.fontSize = oSize;
		console.log(oSize);
	}
	getSize();
	window.onresize = function(){
		getSize();
	}
}())