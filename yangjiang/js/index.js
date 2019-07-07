// $(function() {
// 	$("#btn").click(function() {
// 		var div = $("#moveDiv");
// 		if(div.hasClass("dest")) {
// 		div.removeClass("dest").animate({left: -210}, 1000); 
// 		} else {
// 		div.addClass("dest").animate({left: 0}, 1000); 
// 		}
// 	})

// }); 
function clearAllCookie() {
	sessionStorage.clear()
	window.location.href = "activity.html";
// var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
// if(keys) {
// 	for(var i = keys.length; i--;)
// 		document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
// }
}

function showCover() {
	leftmenuShowable = false;
	clearTimeout(coverTimer);
	$('#cover-background').addClass('cover background-full-over');
	$(document.body).css({
		"overflow-y": "hidden"
	});
}

var coverTimer;
var leftmenuShowable = true;
function hideCover() {
	leftmenuShowable = true;
	// $('#cover-background').removeClass('cover');
	$('#left-menu-box').addClass('left-menu-hide');
	// $("#dialog-tip").hide();
	// $("#dialog-confirm").hide();
	clearTimeout(coverTimer);
	coverTimer = setTimeout(function () {
		$('#cover-background').removeClass('background-full-over');
		$(document.body).css({
			"overflow-y": "auto"
		});
	}, 300);
}

function showLeftMenu() {
	if (!leftmenuShowable) return;
	$('#left-menu-box').removeClass('left-menu-hide');
	showCover();
}