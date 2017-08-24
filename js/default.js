$(document).ready(function(){

	// 微信对话
	$(".enter-wechat").click(function(){
		$(".coverpage").addClass("ant-opacity");
		var wechatcover = setTimeout(function(){
			$(".coverpage").attr("style","display:none;");
			clearTimeout(wechatcover);
		},1000);

		n = 0;
		var sendmsg = setInterval(function(){	
			if(n <= 6){
				$(".wechat-msg-box .media-list").find("li").eq(n).removeAttr("style");
				n = n + 1;
			}
			if(n > 6 & n <= 7){
				clearInterval(sendmsg);
				$(".wechat-part .wechat-talk .input-group .year-sec").removeAttr("disabled");
				$(".wechat-part .wechat-talk .input-group .year-sec").addClass("shakeborder");
				$(".wechat-part .wechat-talk .input-group select.year-sec").change(function(){
					if($(".wechat-part .wechat-talk .input-group select.year-sec option:selected").text() != ""){
						$(".wechat-part .wechat-talk .input-group .year-sec").removeClass("shakeborder");
						$(".sendit").addClass("shakeborder");
						$(".sendit").click(function(){
							$(".wechat-part .wechat-talk .input-group .year-sec").attr("disabled","disabled");
							$(".sendit").removeClass("shakeborder");
							$(".schoolyear span").text($(".wechat-part .wechat-talk .input-group select.year-sec option:selected").text());

							$(".wechat-msg-box .media-list").find("li").eq(n).removeAttr("style");
							n = n + 1;
							$(".wechat-part .wechat-talk .input-group .year-sec").removeClass("shakeborder");
							if(n > 7 & n <= 11){
								var sendmsgtwo = setInterval(function(){
									$(".wechat-msg-box .media-list").find("li").eq(n).removeAttr("style");
									n = n + 1;
									//console.log(n +"是第二轮判断");
									if(n>9 & n<=11){
										clearInterval(sendmsgtwo);
										$(".wechat-part .wechat-talk .input-group .year-sec").attr("style","display:none;");
										$(".wechat-part .wechat-talk .input-group .xueyuan-sec").removeAttr("style");
										$(".wechat-part .wechat-talk .input-group .xueyuan-sec").addClass("shakeborder");

										$(".wechat-part .wechat-talk .input-group select.xueyuan-sec").change(function(){

											if($(".wechat-part .wechat-talk .input-group select.xueyuan-sec option:selected").text() != ""){
												$(".wechat-part .wechat-talk .input-group .xueyuan-sec").removeClass("shakeborder");
												$(".sendit").addClass("shakeborder");
												$(".sendit").click(function(){
													$(".wechat-part .wechat-talk .input-group .xueyuan-sec").attr("disabled","disabled");
													$(".sendit").removeClass("shakeborder");
													$("span.xueyuan").text($(".wechat-part .wechat-talk .input-group select.xueyuan-sec option:selected").text());

													var sendmsgthree = setInterval(function(){
														$(".wechat-msg-box .media-list").find("li").eq(n).removeAttr("style");
														n = n + 1;
														$(".wechat-part .wechat-talk .input-group .xueyuan-sec").removeClass("shakeborder");
														if(n>11){
															clearInterval(sendmsgthree);
															var ringme = setTimeout(function(){
																$(".video-talk").attr("style","z-index:3;");
																$(".video-talk").addClass("opacity");
																clearTimeout(ringme);
															},1000);
														}
													},500);
												});
											};
										});
									}		
								},500)
							}
						});
					}
				});
			}		
		},500);
	});

	$(".wechat-part").height($(window).height());
	$(".wechat-msg-box").attr("style","min-height:" + ($(window).height()) + "px;padding-top:" + ($(".wechat-part .navbar").height() + 10) + "px;padding-bottom:" + ($(".wechat-talk").height() + 10) + "px;");
	$(".coverpage").height($(window).height());
	$(".wechat-part .video-talk .video-talk-table .video-talk-tr .video-talk-td .thumbnail .video-portal").height($(".wechat-part .video-talk .video-talk-table .video-talk-tr .video-talk-td .thumbnail .video-portal").width());
	$(".swiper-page").height($(window).height());

	$(window).resize(function(){
		$(".wechat-part").height($(window).height());
		$(".wechat-msg-box").attr("style","min-height:" + ($(window).height()) + "px;padding-top:" + ($(".wechat-part .navbar").height() + 10) + "px;padding-bottom:" + ($(".wechat-talk").height() + 10) + "px;");
		$(".coverpage").height($(window).height());
		$(".wechat-part .video-talk .video-talk-table .video-talk-tr .video-talk-td .thumbnail .video-portal").height($(".wechat-part .video-talk .video-talk-table .video-talk-tr .video-talk-td .thumbnail .video-portal").width());
		$(".swiper-page").height($(window).height());
	});




	$(".call-me i.iconfont").click(function(){
		$(".wechat-part").attr("style","display:none;");
		$(".swiper-page").removeAttr("style");
		$(".swiper-page").height($(window).height());
		// 校门开场
		var mySwiper = new Swiper ('.swiper-memories', {
			direction: 'vertical',
			loop: false,
			// autoplay:1000,
	    	effect : 'fade',
			// 如果需要分页器
			pagination: '.swiper-pagination',
	    
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
		});
	});

	$(".end-swiper").click(function(){
		$(".tags-page").attr("style","position:fixed;z-index:1;");
		$(".tags-page").addClass("opacity");
		
		var freshman = setTimeout(function(){
			$(".freshman-bg").addClass("ant-opacity");
			$(".freshman-bg").next().addClass("opacity");
			var freshmanbg = setTimeout(function(){
				$(".freshman-bg").attr("style","display:none;");

				clearTimeout(freshmanbg);
			},1000);
			clearTimeout(freshman);
		},1500);
	});

	//填空页
	$(".godaer").click(function(){
		$(".dayi-page").removeClass("opacity");
		var daerTime = setTimeout(function(){
			$(".dayi-page").attr("style","display:none;");
			clearTimeout(daerTime);
		},500);
		$(".daer-page").removeAttr("style");
		var dasanTime = setTimeout(function(){
			$(".daer-page").addClass("opacity");
			clearTimeout(dasanTime);
		},500);
	});


	$(".dayishijianone").change(function(){
		if($(".dayishijianone").val() == "dayidiy1"){
			$(".user-defined-dayi-one").removeAttr("style");
		}else{
			$(".user-defined-dayi-one").attr("style","display:none;");
		}
	});
	$(".dayishijiantwo").change(function(){
		if($(".dayishijiantwo").val() == "dayidiy2"){
			$(".user-defined-dayi-two").removeAttr("style");
		}else{
			$(".user-defined-dayi-two").attr("style","display:none;");
		}
	});
	$(".dayishijianthree").change(function(){
		if($(".dayishijianthree").val() == "dayidiy3"){
			$(".user-defined-dayi-three").removeAttr("style");
		}else{
			$(".user-defined-dayi-three").attr("style","display:none;");
		}
	});

	$(".daershijianone").change(function(){
		if($(".daershijianone").val() == "daerdiy1"){
			$(".user-defined-daer-one").removeAttr("style");
		}else{
			$(".user-defined-daer-one").attr("style","display:none;");
		}
	});
	$(".daershijiantwo").change(function(){
		if($(".daershijiantwo").val() == "daerdiy2"){
			$(".user-defined-daer-two").removeAttr("style");
		}else{
			$(".user-defined-daer-two").attr("style","display:none;");
		}
	});
	$(".daershijianthree").change(function(){
		if($(".daershijianthree").val() == "daerdiy3"){
			$(".user-defined-daer-three").removeAttr("style");
		}else{
			$(".user-defined-daer-three").attr("style","display:none;");
		}
	});

	$(".dasanshijianone").change(function(){
		if($(".dasanshijianone").val() == "dasandiy1"){
			$(".user-defined-dasan-one").removeAttr("style");
		}else{
			$(".user-defined-dasan-one").attr("style","display:none;");
		}
	});
	$(".dasanshijiantwo").change(function(){
		if($(".dasanshijiantwo").val() == "dasandiy2"){
			$(".user-defined-dasan-two").removeAttr("style");
		}else{
			$(".user-defined-dasan-two").attr("style","display:none;");
		}
	});
	$(".dasanshijianthree").change(function(){
		if($(".dasanshijianthree").val() == "dasandiy3"){
			$(".user-defined-dasan-three").removeAttr("style");
		}else{
			$(".user-defined-dasan-three").attr("style","display:none;");
		}
	});



	$(".godasan").click(function(){
		$(".daer-page").removeClass("opacity");
		var dasanTime = setTimeout(function(){
			$(".daer-page").attr("style","display:none;");
			clearTimeout(dasanTime);
		},500);
		$(".dasan-page").removeAttr("style");
		var dasiTime = setTimeout(function(){
			$(".dasan-page").addClass("opacity");
			clearTimeout(dasiTime);
		},500);
	});



	$(".goyihan").click(function(){
		$(".dasan-page").removeClass("opacity");
		var yihanTime = setTimeout(function(){
			$(".dasan-page").attr("style","display:none;");
			clearTimeout(yihanTime);
		},500);
		$(".yihan-page").removeAttr("style");
		var doneTime = setTimeout(function(){
			$(".yihan-page").addClass("opacity");
			clearTimeout(doneTime);
		},500);
	});


	$(".xuanyihan .youyihan").click(function(){
		$(".xuanyihan").attr("style","display:none;");
		$(".yihan-part").removeAttr("style");
		$(".yihan-part .tags-page-td p").html("遗憾再深，却没什么卵用");
	});
	$(".xuanyihan .meiyihan").click(function(){
		$(".xuanyihan").attr("style","display:none;");
		$(".yihan-part").removeAttr("style");
		$(".yihan-part .tags-page-td p").html("无憾大学三年");
	});

	$(".slide-next").attr("style","left:" + ($(window).width()/2 - $(".slide-next").width()/2) + "px;")
});