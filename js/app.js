;"use strict";


//public function
var publicFn = {

	init : function(){
	},

	coverShade : function(){
		var shade = $('.st-cover-shade');
		var ico = $('.st-cover-menuico');
		var menu = $('.st-cover-menu');
		var vr=$('.st-cover-vr');

		ico.on('click',function(){
			if( shade.hasClass('active') ) {
				coverHide();
			} else {
				coverShow();
			}
		});

		var menu_a = menu.find('ul li a');

		menu_a.on('click',function(){
			var _ts = $(this);
			if( !_ts.hasClass('nohide') ) {
				coverHide();
			}else{
				vrShow();
			}
		});

		function coverHide() {
			shade.removeClass('active');
			setTimeout(function(){
				shade.removeClass('fixed');
			},300);
			menu.removeClass('active');
			setTimeout(function(){
				menu.hide(0);
			},200);
		}

		function coverShow() {
			shade.addClass('fixed').addClass('active');menu.show(0);
			setTimeout(function(){
				menu.addClass('active');
			},20);
		}

		function vrShow() {
			menu.hide(0);
			setTimeout(function(){
				menu.removeClass("active");
			},20)
			ico.hide();
			vr.show();
		}

	}

	//hashScroller : function(){
	//		var tag_a = $('.st-hash');
    //
	//		tag_a.click(function(ev){
	//			ev.preventDefault();
    //
	//			var _ts = $(this);
	//			var targ = $(_ts.attr('href'));
    //
	//			$('html,body').animate({
	//				scrollTop : targ.offset().top
	//			},1000);
	//		});
	//}

};



var homeFn = {

	init : function(){
		publicFn.coverShade();
		//publicFn.hashScroller();
	}



};



$(function(){
	publicFn.init();
	switch( $('#scriptRequire').attr('data-page') ) {

		//home
		case 'home' : homeFn.init();
			break;

	}

	$(function() {
		$("#top").on("click", function() {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop()>600){
			$(".toolbar").css({"display":"block"});
		}
		if($(window).scrollTop()<=600){
			$(".toolbar").css({"display":"none"});
		}
	});
	$('#maCanvas').qrcode({
		width: 130,
		height:130,
		text: "https://www.baidu.com/"
	});
	//从canvas中提取图片image
	function convertCanvasToImage(canvas) {
		//新Image对象，可以理解为DOM
		var image = new Image();
		// canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
		// 指定格式PNG
		image.src = canvas.toDataURL("image/png");
		return image;
	}
	var mycanvas0=document.getElementsByTagName('canvas')[0];
	var img0 = convertCanvasToImage(mycanvas0);
	$('#maImg').append(img0);

	$(" .mask .pull-right").click(function(event){
		event.preventDefault();
		$(this).removeClass("love-default").addClass("love-active");
	})

});




