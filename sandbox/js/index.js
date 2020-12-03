// NAVIGATION FIXED
$(function() {
  var nav = $('.drawer-navbar');
  var logo = $('.drawer-brand');
  var navul = $('.drawer-menu');


	//表示位置
	var navTop = nav.offset().top+200;
	//ナビゲーションの高さ（シャドウの分だけ足してます）
	var navHeight = nav.height()+10;
	var showFlag = false;
	nav.css('top', -navHeight+'px');
	//ナビゲーションの位置まできたら表示
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		if (winTop >= navTop) {
			if (showFlag == false) {
				showFlag = true;
				nav
					.addClass('fixed')
					.stop().animate({'top' : '0px'}, 200, function(){
					logo.css('display', 'block');
					navul.css('margin-left', '200px');
					});
				// );
			}
		} else if (winTop <= navTop) {
			if (showFlag) {
				showFlag = false;
				nav.stop().animate({'top' : -navHeight+'px'}, 200, function(){
					nav.removeClass('fixed');
					logo.css('display', 'none');
					navul.css('margin-left', '0px');
				});
			}
		}
	});
});




// $(function() {
// 	var offset = $('.drawer-navbar').offset();
// 	// var offset = offset+80;
// 	// var navTop = nav.offset().top+80;
//
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > offset.top) {
//             $('.drawer-navbar').addClass('fixed');
//         } else {
//             $('.drawer-navbar').removeClass('fixed');
//         }
//     });
// });


// $(function() {
// 		var nav = $('.drawer-nav');
// 		// var logo = $('.backRoot');
//
// 		//表示位置
// 		var navTop = nav.offset().top;
// 		//ナビゲーションの高さ（シャドウの分だけ足してます）
// 		//var navHeight = nav.height()+10;
// 		var navHeight = nav.height();
// 		var showFlag = false;
// 		nav.css('top', 0+'px');
// 		// logo.css('display', 'none');
// 		//ナビゲーションの位置まできたら表示
// 		$(window).scroll(function () {
// 				var winTop = $(this).scrollTop();
// 				if (winTop >= navTop) {
// 						if (showFlag == false) {
// 								showFlag = true;
// 								nav
// 									.addClass('fixednav')
// 									.stop().animate({'top' : '0px'}, 500, function(){
// 									logo.css('display', 'block');
// 									});
// 						}
// 				} else if (winTop <= navTop) {
// 						if (showFlag) {
// 								showFlag = false;
// 								nav.stop().animate({'top' : -navHeight+'px'}, 500, function(){
// 									nav.removeClass('fixednav');
// 									logo.css('display', 'none');
// 								});
// 						}
// 				}
// 		});
// });
