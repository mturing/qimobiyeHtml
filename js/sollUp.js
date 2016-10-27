
/*$(".team-grids .grid-image").mouseover(function(){
	alert("悬停");
})*/
$(document).ready(function(){
	$(".team-grids .grid-image").each(function(){
		$(this).mouseover(function(){
			
			$(this).find(".p-mask").css("top","80%");
			//$(this).find(".p-mask").slideUp();
			//alert($(this).find(".p-mask").css("top"));
		})
		$(this).mouseout(function(){
			$(this).find(".p-mask").css("top","90%");
		})
	})
	
})