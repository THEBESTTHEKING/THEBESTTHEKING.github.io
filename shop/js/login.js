(function(){
	var oUser = document.getElementsByName("username")[0];
	var oPwd = document.getElementsByName("password")[0];
	var oCode = document.getElementsByName("codes")[0];
	var oSend = document.getElementsByName("send")[0];
	var oBtn = document.getElementsByClassName("toggle")[0];
	var oSpen = oBtn.getElementsByTagName("span")[0];
	var oToggle = true;

	var patten_email = /^(\w-*\.*)+@(\w-?)+(\w-?)+(\.\w{2,})+$/;
	var patten_phone = /^1\d{10}$/;
	var patten_user = /^[a-zA-Z]\w{3,15}$/;
	var patten_pwd = /^[\w\-]{6,16}$/;

	oBtn.onclick = function(){
		if(oToggle){
			oSpen.className = "right";
			oBtn.style.background = "red";
			oPwd.setAttribute("type","text");
			oToggle = false;
		}else{
			oSpen.className = "";
			oBtn.style.background = "white";
			oPwd.setAttribute("type","password");
			oToggle = true;
		}
	}
	oSend.onclick = function(){
		var oUser_value = oUser.value.trim();
		var oPwd_value = oPwd.value.trim();
		var oCode_value = oCode.value.trim();

		if(!oUser_value || !patten_email.test(oUser_value)){
			alert("用户名输入非法");
			return false;
		}else if(!patten_pwd.test(oPwd_value)){
			alert("密码输入非法");
			return false;
		}else if(oCode_value.length != 4){
			alert("验证码必须是四位");
			return false;
		}else{
			alert("loading")
		}
	}

}())