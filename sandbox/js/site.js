$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});



// $(function () {
// 	var scrollElm = (function() {
// 		if('scrollingElement' in document) {
// 			return document.scrollingElement;
// 		}
// 		if(navigator.userAgent.indexOf('WebKit') != -1) {
// 			return document.body;
// 		}
// 		return document.documentElement;
// 	})();
//
// 	$('a[href^="#"]').not('.noscroll').on('click', function() {
// 		var speed = 300;
// 		var easing = 'swing';
// 		var href= $(this).attr("href");
// 		$(scrollElm).animate({
// 			scrollTop: $(href == "#" ? 'html' : href).offset().top
// 		}, speed, easing);
// 		return false;
// 	});
//
//
//
// });



// $(function(){
// });


	// const TIME = 1000;
	// const BUFFER = 0;
	//
	// $('a[href^="#"]').on('click', function(e) {
	//
	// 		const target = $(this.hash);
	// 		if (!target.length) return ;
	//
	// 		const zm = parseInt( $('body').css('zoom') ) || 1; // zoom対策
	// 		const targetY = $(target).offset().top - BUFFER;
	// 		$('html,body').stop().animate({scrollTop: targetY * zm}, TIME, 'swing');
	//
	// 		// ハッシュ書き換え
	// 		window.history.pushState(null, null, this.hash);
	//
	// 		// デフォルトの処理はキャンセル
	// 		return false;
	// });
// });



// $(function(){
// 	$('a[href^=#]').click(function(){
// 		var speed = 500;
// 		var href= $(this).attr("href");
// 		var target = $(href == "#" || href == "" ? 'html' : href);
// 		var position = target.offset().top;
// 		$("html, body").animate({scrollTop:position}, speed, "swing");
// 		return false;
// 	});
// });


// var _ua = (function(u){
// 	return {
// 	Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
// 		|| u.indexOf("ipad") != -1
// 		|| (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
// 		|| (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
// 		|| u.indexOf("kindle") != -1
// 		|| u.indexOf("silk") != -1
// 		|| u.indexOf("playbook") != -1,
// 	Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
// 		|| u.indexOf("iphone") != -1
// 		|| u.indexOf("ipod") != -1
// 		|| (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
// 		|| (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
// 		|| u.indexOf("blackberry") != -1
// 	}
// })(window.navigator.userAgent.toLowerCase());


//スマートフォン：HAMBURGER-NAV
// if(_ua.Mobile){
// 	document.write('<meta name="viewport" content="width=device-width, maximum-scale=1.0">');
// 	document.write('<link rel="stylesheet" href="css/meanmenu.css">');
// 	document.write('<script src="js/jquery.meanmenu.js"></script>');
// 	document.write('<link rel="stylesheet" href="css/mobile.css">');




	// document.write('<link href="css/mobile-nav.css" rel="stylesheet">');
	// document.write('<script src="js/jquery.fs.naver.js"></script>');
	// document.write('<script src="js/mobile-hamburger.js"></script>');
	//document.write('<script src="js/mobile-animation.js"></script>');
	//document.write('<script src="js/site-mobile2-1.js"></script>');

//タブレット
// }else if(_ua.Tablet){

	// document.write('<meta name="viewport" content="width=1100; user-scalable = yes">');
	// document.write('<link href="css/wide.css" rel="stylesheet">');
	// document.write('<link href="css/mobile-nav.css" rel="stylesheet">');
	// document.write('<script src="js/jquery.meanmenu.js"></script>');
	// document.write('<script src="js/jquery.fs.naver.js"></script>');
	// document.write('<script src="js/mobile-hamburger.js"></script>');

//PC-WIDE
// }else{
// 	//document.write('<meta name="viewport" content="width=1000; user-scalable = yes">');
// 	document.write('<meta name="viewport" content="width=device-width, maximum-scale=1.0">');
// 	document.write('<link href="css/wide.css" rel="stylesheet">');
	// document.write('<script src="js/wide-animation.js"></script>');
	// document.write('<script src="js/wide-navigation.js"></script>');




	// document.write('<link href="css/mobile-nav.css" rel="stylesheet">');
	// document.write('<script src="js/jquery.meanmenu.js"></script>');
	// document.write('<script src="js/jquery.fs.naver.js"></script>');
	// document.write('<script src="js/mobile-animation.js"></script>');
	// document.write('<script src="js/mobile-hamburger.js"></script>');



}
