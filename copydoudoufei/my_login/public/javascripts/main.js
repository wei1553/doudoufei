$(function(){
	
	
	//  外部ejs导入
	$(".click_1").click(function(){
		$(".sec_rig").children().remove();
			$.ajax({
				type:"get",
				url:"/list_page1",
				async:true,
				success : function(res){
					$(".sec_rig").html(res)
				}
			});
		})
	
	$(".click_2").click(function(){
		$(".sec_rig").children().remove();
			$.ajax({
				type:"get",
				url:"/list_page2",
				async:true,
				success : function(res){
					$(".sec_rig").html(res)
				}
			});
		})
	
	
	//   二级菜单
	$(".ul1>li").each(function(index,value){
		$(this).click(function(event){
			$(this).css({"background":"#303030 url(../images/menu_1.png) no-repeat 6px 0px"});
			if($(".ul2").css("display") == "none"){
				$(".ul2").css("display","block");
			} else {
				$(".ul2").css("display","none");
			}
			event.stopPropagation();
		})
	})	
})

