$(document).ready(function(){
	
	$(".btn").click(function(){
		$(".side").addClass("move");
		$(this).addClass("newFull");
		
	});
		
     $(".right").click(function(){
		$(".side").removeClass("move");
		$(".btn").removeClass("newFull");

		
	});
	// dropmenu
	 $(".menu ul li").hover(function(){
        $(this).find(".subList").slideDown(200);
    },function(){
        $(this).find(".subList").slideUp(200);
    });
});