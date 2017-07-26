//home function
var homeFn = {

    init : function(){
        publicFn.coverShade();
        //publicFn.hashScroller();

        this.erSwp();
    },

    erSwp : function(){
        var swp_er = new Swiper('#erSwp',{
            autoplay : 5000,
            autoplayDisableOnInteraction : false,
            speed : 800,
            loop : true,
            onSlideChangeStart : function() {
                pgntActive();
            }
        });

        var slides_len = swp_er.slides.length-2;
        var pgnt = $(swp_er.container).find('.st-pgnt');
        pgnt.empty();

        for( var a=0; a<slides_len; a++ ) {
            pgnt.append( '<span></span>' );
        }

        pgntActive();

        pgnt.find('span').on('mouseover click',function(){
            var _ts = $(this);
            swp_er.swipeTo(_ts.index(),800);
        });

        $(swp_er.container).hover(function(){
            swp_er.stopAutoplay();
        },function(){
            swp_er.startAutoplay();
        });

        function pgntActive() {
            pgnt.find('span').removeClass('active').eq(swp_er.activeLoopIndex).addClass('active');
        }

    }

};
$(function(){
    //publicFn.init();

    //switch( $('#scriptRequire').attr('data-page') ) {
    //
    //    //home
    //    case 'home' : homeFn.init();
    //        break;
    //
    //}
    //利用插件生成二维码,生成的二维码在canvas中
    $('#qrDiv').qrcode({
        width: 198,
        height:198,
        text: "https://www.baidu.com/"
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

    //获取网页中的canvas对象


    var mycanvas1=document.getElementsByTagName('canvas')[1];

    //将转换后的img标签插入到html中


    var img1 = convertCanvasToImage(mycanvas1);
    //img=img.addClass("qrcode");

    $('#imgDiv').append(img1);//imgDiv表示你要插入的容器id




});

