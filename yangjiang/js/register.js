$(function() {
	$("#btn").click(function() {
		var div = $("#moveDiv");
		if(div.hasClass("dest")) {
		div.removeClass("dest").animate({left: -210}, 1000); 
		} else {
		div.addClass("dest").animate({left: 0}, 1000); 
		}
	})

}); 