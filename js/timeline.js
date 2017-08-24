$(document).ready(function(){
	$(".szpt-timeline").height($(window).height());
	$(".szpt-timeline .timeline .swiper-timeline .swiper-wrapper .swiper-slide .end-qrcode").width($(window).width() * 0.75);
	$(".szpt-timeline .timeline .swiper-timeline .swiper-wrapper .swiper-slide .end-qrcode").height($(window).width() * 0.75);

	$(window).resize(function(){
		$(".szpt-timeline").height($(window).height());
		$(".szpt-timeline .timeline .swiper-timeline .swiper-wrapper .swiper-slide .end-qrcode").width($(window).width() * 0.75);
		$(".szpt-timeline .timeline .swiper-timeline .swiper-wrapper .swiper-slide .end-qrcode").height($(window).width() * 0.75);
	});

	var timelineSwiper = new Swiper ('.swiper-timeline', {
		direction: 'vertical',
		loop: false,
		

		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	});


	$(".dayi-swiper").click(function(){
		$(this).addClass("ant-opacity");
	});
	$(".daer-swiper").click(function(){
		$(this).addClass("ant-opacity");
	});
	$(".dasan-swiper").click(function(){
		$(this).addClass("ant-opacity");
	});
	$(".leave-swiper").click(function(){
		$(this).addClass("ant-opacity");
		$(this).attr("style","z-index:0;");
	});

});