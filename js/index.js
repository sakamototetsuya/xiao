$(function() {
	
	
//	推荐列表显隐控制
//	var open = 0;
//	$('.nav-item').hover(function() {
//		var x = $(this).index();
//		$('.items-hide ul').eq(x).show().siblings('ul').hide();
//		$('.items-hide').stop().slideDown();
//	}, function() {
//		$('.items-hide').stop().slideUp();
//	});

//	$('.nav').hover(function() {
//		$('.ctrl').mouseenter(function() {
//			var x = $(this).index();
//			$('.items-hide ul').eq(x).show().siblings('ul').hide();
//		});
//		$('.items-hide').stop().slideDown();
//	}, function() {
//		$('.items-hide').stop().slideUp();
//	});

	$('.ctrl').hover(function() {
		var x = $(this).index();
		$('.items-hide ul').eq(x).show().siblings('ul').hide();
		$('.items-hide').stop().slideDown();
//		$('.ctrl>a').mouseenter(function() {
//			$('.items-hide ul').eq(x).show().siblings('ul').hide();
//		});
		
	}, function() {
		$('.items-hide').stop().slideUp();
	});
	
	
//	轮播图
	$('.banner-item:first').addClass('show');
	var timer = setInterval(run, 2000),
	c = 0;
	function run() {
		c++;
		if(c == 5) {
			c = 0;
		}
		$('.banner-item').eq(c).fadeIn().siblings('li').fadeOut();
		$('.dot').eq(c).addClass('light').siblings('li').removeClass('light');
	};
	
	$('.banner').hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer = setInterval(run, 2000);
	});
	
	$('.dot').click(function() {
		var index = $(this).index();
		c = index;
		$('.banner-item').eq(c).fadeIn().siblings('li').fadeOut();
		$('.dot').eq(c).addClass('light').siblings('li').removeClass('light');
	});
	
//	商品列表
	var shopList = ['手机 电话卡','电视 盒子','笔记本 平板','家电 插线板','出行 穿戴','智能 路由器','电源 配件','健康 儿童','耳机 音箱','生活 箱包'];
	$('.banner').append(`
		<div class="shop-box">
			<ul class="shop-list">
			</ul>
		</div>
	`);
	for(var i = 0; i < 10; i++) {
		$('.shop-list').append(`
			<li class="shop-item">
				<a href="#"></a>
				<div class="shop-item-hide hide"></div>
			</li>
		`);
		$('.shop-item>a').eq(i).html(shopList[i]+'<span class="right">&gt;</span>');
	};
	
//		$.ajax({
//			type:"get",
//			url:"js/n.json",
//			async:true,
//			dataType:"json",
//			success:function(obj) {
//				for(var index = 0; index < $('.shop-item-hide').length; index++){
//					var k = -1;
//					for(var i = 0; i < obj[index].length; i++) {
//						if(i % 6 == 0 ) {
//							k++;
//							$('.shop-item-hide').eq(index).append(`
//								<ul class="shop-hide-child">
//									<li class="shop-hide-item">
//										<a>
//											<img class="pic"/>
//											<span class="shop-item-name"></span>
//										</a>
//									</li>
//								</ul>
//							`);
//						} else {
//							$('.shop-hide-child').eq(k).append(`
//								<li class="shop-hide-item">
//									<a>
//										<img class="pic"/>
//										<span class="shop-item-name"></span>
//									</a>
//								</li>	
//							`);
//						}
//						var hideWidth = $('.banner').width()-$('.shop-list').width()+1;
//						$('.shop-item-hide').width(hideWidth);
//						var ulWidth = hideWidth / 4;
//						$('.shop-hide-child').width(ulWidth);
//						var liHeight = 460 / 6;
//						$('.shop-hide-item').height(liHeight);
//						$('.pic').eq(i).prop({'src':obj[index][i].src});
//						$('.shop-item-name').eq(i).text(obj[index][i].name);
//					};
//				};
//			}
//		});

	function ajax(index){
		$.ajax({
			type:"get",
			url:"js/shop.json",
			async:true,
			dataType:"json",
			success:function(obj) {
				var k = -1;
				for(var i = 0; i < obj[index].length; i++) {
					if(i % 6 == 0 ) {
						k++;
						$('.shop-item-hide').eq(index).append(`
							<ul class="shop-hide-child">
								<li class="shop-hide-item">
									<a>
										<img class="pic"/>
										<span class="shop-item-name"></span>
									</a>
								</li>
							</ul>
						`);
					} else {
						$('.shop-hide-child').eq(k).append(`
							<li class="shop-hide-item">
								<a>
									<img class="pic"/>
									<span class="shop-item-name"></span>
								</a>
							</li>	
						`);
					}
					var hideWidth = $('.banner').width()-$('.shop-list').width()+1;
					$('.shop-item-hide').width(hideWidth);
					var ulWidth = hideWidth / 4;
					$('.shop-hide-child').width(ulWidth);
					var liHeight = 460 / 6;
					$('.shop-hide-item').height(liHeight);
					$('.pic').eq(i).prop({'src':obj[index][i].src});
					$('.shop-item-name').eq(i).text(obj[index][i].name);
				}
			}
		});
	};
	
	
	
	
//	鼠标滑入/滑出时显示/隐藏列表
	$('.shop-item').hover(function() {
		var index = $(this).index();
		$('.shop-item-hide').eq(index).addClass('show');
		ajax(index);
	}, function() {
		index = $(this).index();
		$('.shop-item-hide').eq(index).removeClass('show').empty();
	});	
	
	
	
	
	
	
	
	
});
