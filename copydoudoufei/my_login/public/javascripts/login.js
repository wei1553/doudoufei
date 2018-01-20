$(function(){
//  点击验证码切换
	$(".yan").click(function(){
		var newStr = new Array(4);	
		var str = new String("1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM");
		var sum = '';
		for(var i = 0;i < newStr.length;i ++){
			newStr[i] = str.charAt(random(0,61));	
			sum += newStr[i];  //去除验证码之间的逗号
		}
		function random(min,max){
		if(min > max){
			var t = min;
			min = max;
			max = t;
			}
		return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		$(this).html(sum);
	})
	
	

	
})