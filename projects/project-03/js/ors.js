;(function($){
	$(function () {
		$('input, textarea').placeholder(); 
		if($('input').hasClass('datepicker')) uiDatePicker();
		browserChk();
		$(window).resize(function(){
			stickyFixedAct();
			
			var winWidth = $(window).width();
			if(winWidth < 769){
				$(window).scroll(function(){
					var win = $(window);
						winTop = win.scrollTop();
						stepArea = $('.step_area');

					if(winTop > 470){
						stepArea.addClass('fixed');
						$('#step01').css({'padding-top':'135px'});
					}
					else{
						stepArea.removeClass('fixed');
						$('#step01').css({'padding-top':'0'});
					}
				});
			}
		});
		$(window).on('load', function () {
			stickyFixedAct();
			var winWidth = $(window).width();
			if(winWidth < 769){
				$(window).scroll(function(){
					var win = $(window);
						winTop = win.scrollTop();
						stepArea = $('.step_area');

					if(winTop > 470){
						stepArea.addClass('fixed');
						$('#step01').css({'padding-top':'135px'});
					}
					else{
						stepArea.removeClass('fixed');
						$('#step01').css({'padding-top':'0'});
					}
				});
			}
		});
		toggleList();
		selectList();
		familySite();
		var $fileBox = null;
		fileUpload();
		allMenuPc();
		allMenuMo();
		infoLayer();
		$('.cate_area .tit').keydown(function(key){
			if(key.keyCode == 13){
	            $(this).addClass('current');
	        }
		});//스케이트메인 강습신청 키보드이동
		$('.icon_info a.icon, a.pc_allmenu').keydown(function(key){
			if(key.keyCode == 13){
	            $(this).addClass('current');
	        }
		});//레이어팝업 키보드이동
	});
})(jQuery);

/* browser check */
function browserChk (){
	var filter = "win16|win32|win64|mac|macintel"; 
	if ( navigator.platform ) { 
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
			//mobile 
			selectMainMobile();

			$(window).scroll(function(){
				var win = $(window);
					winTop = win.scrollTop();
					winHeight = win.height();
					stepArea = $('.step_area');
					stepBox = $('.step_box');

				if(winTop > 470){
					stepArea.addClass('fixed');
					$('#step01').css({'padding-top':'135px'});
				}
				else{
					stepArea.removeClass('fixed');
					$('#step01').css({'padding-top':'0'});
				}
				stepBox.each(function(idx){
					var stepTop = $(this).offset().top; 
					if(winTop + winHeight - winHeight/2 > stepTop){
						$('.app_step li').eq(idx).addClass('on').siblings().removeClass('on');
					}
				});
			});
			stepNavMo()
		} else { 
			//pc 
			selectMainPc();
			
			$(window).scroll(function(){
				var win = $(window);
					winTop = win.scrollTop();
					winHeight = win.height();
					stepArea = $('.step_area');
					stepBox = $('.step_box');

				if(winTop > 968){
					stepArea.addClass('fixed');
					$('#step01').css({'padding-top':'200px'});
				}
				else{
					stepArea.removeClass('fixed');
					$('#step01').css({'padding-top':'0'});
				}
				stepBox.each(function(idx){
					var stepTop = $(this).offset().top; 
					if(winTop + winHeight - winHeight/2 > stepTop){
						$('.app_step li').eq(idx).addClass('on').siblings().removeClass('on');
					}
				});
			});
			stepNavPc()
		} 
	}
}

function selectMainPc() {
	var selectBtn = $('.cate_area .tit');
	var selectCon = $('.cate_area .cate_con');
	var selectClose = $('.cate_area .btn_close');

	selectCon.hide();
	selectBtn.click(function(){
		$(".online_area .select_type.open a.tit").trigger("click");
		
		$(this).next('.cate_con').show();
		$(this).next('.cate_con').attr("tabindex", 0).focus();
		$(this).parent().addClass('open');
		return false;
	});
	selectClose.click(function(){
		$(this).parent('.cate_con').hide();
		$(this).parent().parent().removeClass('open');
		$(".current").focus();
		$(".current").removeClass('current');
		return false;
	});
}

function selectMainMobile() {
	var selectBtn = $('.cate_area .tit');
	var selectCon = $('.cate_area .cate_con');
	var selectClose = $('.cate_area .btn_close');

	selectClose.hide();
	selectCon.hide();

	selectBtn.click(function(){
		$(".online_area .select_type.open a.tit").trigger("click");
		
		$(this).parent().toggleClass('open');
		$(this).next('.cate_con').toggle();
		return false;
	});
}

/* sticky fixed */
function stickyFixedAct (){
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
			stickyMain = $('.skate_main .sticky_area');
			stickySub = $('.page_sub .sticky_area');
		
		if (scroll >= 669) {
			stickyMain.addClass('fixed');
			//$('.info_area01').css('padding-top','190px');
		} else {
			stickyMain.removeClass('fixed');
			//$('.info_area01').css('padding-top','100px');
		}
		if (scroll >= 522) {
			stickySub.addClass('fixed');
			$('.location_area').css('padding-top','129px');
		} else {
			stickySub.removeClass('fixed');
			$('.location_area').css('padding-top','40px');
		}
	});
}

/* toggle table */
function toggleList() {
	var toggleBtn = $('.training_box .arrow');
	var toggleCon = $('.training_box .con_area');
	
	//toggleCon.hide();
	toggleBtn.click(function(){
		$(this).toggleClass('close');
		$(this).parent().next('.con_area').toggle();
		if( $(this).text() == '닫기' ) {
			$(this).text('보기');
			//$(this).addClass('btn-fold').removeClass('btn-unfold');
		} else {
			if ($(this).text() == '보기') {
				$(this).text('닫기');
				//$(this).addClass('btn-unfold').removeClass('btn-fold');
			}
		}
		return false;
	});
}

/* design select */
function selectList() {
	var selectBtn = $('.select_time .tit, .select_type .tit');
	var selectCon = $('.select_time .select_con, .select_type .cate_con');
	
	selectCon.hide();
	selectBtn.click(function(){
		$(".online_area .cate_area.open a.btn_close").trigger("click");
		$(this).parent().toggleClass('open');
		$(this).next('.select_con, .cate_con').toggle();
		return false;
	});
}

/* family site */
function familySite() {
	var familyBtn = $('.con_site .tit_site');
	var familyCon = $('.con_site .list_site');
	
	familyCon.hide();
	familyBtn.click(function(){
		$(this).parent().toggleClass('open');
		$(this).next('.list_site').toggle();
		return false;
	});
}

/* 파일업로드 */
function fileUpload() { 
	$fileBox = $('.c_input_file'); 
	fileLoad(); 
}
function fileLoad() { 
	$.each($fileBox, function(idx){ 
		var $this = $fileBox.eq(idx),
			$btnUpload = $this.find('[type="file"]'),
			$label = $this.find('.file_label'); 
		
		$btnUpload.on('change', function() { 
			var $target = $(this), 
				fileName = $target.val(), 
				$fileText = $target.siblings('.file_name'); 
			$fileText.val(fileName); 
		}) 
		
		$btnUpload.on('focusin focusout', function(e) { 
			e.type == 'focusin' ? 
				$label.addClass('file_focus') : $label.removeClass('file_focus'); 
		}) 
	}) 
}

function stepNavPc(){
	$('.app_step > li > a.link01').on('click',function(e){
		e.preventDefault();
		$('#step01').animatescroll({padding:240});
	});
	$('.app_step > li > a.link02').on('click',function(e){
		e.preventDefault();
		$('#step02').animatescroll({padding:240});
	});
	$('.app_step > li > a.link03').on('click',function(e){
		e.preventDefault();
		$('#step03').animatescroll({padding:240});
	});
	$('.app_step > li > a.link04').on('click',function(e){
		e.preventDefault();
		$('#step04').animatescroll({padding:240});
	});
}

function stepNavMo(){
	$('.app_step > li > a.link01').on('click',function(e){
		e.preventDefault();
		$('#step01').animatescroll({padding:190});
	});
	$('.app_step > li > a.link02').on('click',function(e){
		e.preventDefault();
		$('#step02').animatescroll({padding:190});
	});
	$('.app_step > li > a.link03').on('click',function(e){
		e.preventDefault();
		$('#step03').animatescroll({padding:190});
	});
	$('.app_step > li > a.link04').on('click',function(e){
		e.preventDefault();
		$('#step04').animatescroll({padding:190});
	});
}

/* PC 전체메뉴 불러오기 */
function allMenuPc() {
	var allMenu = $('a.pc_allmenu');
		allMenuCon = $('.allmenu_area');
		allMenuClose = $('.allmenu_area .btn_close');
	
	allMenuCon.hide();
	allMenu.on('click', function(){
		allMenuCon.show();
		allMenuCon.attr("tabindex", 0).focus();
		return false;
	});

	allMenuClose.on('click', function(){
		$(".current").focus();
		$(".current").removeClass('current');
		allMenuCon.hide();
		return false;
	});
}

/* 모바일 전체메뉴 불러오기 */
function allMenuMo() {
	var allMenu = $('a.mo_allmenu');
	var allMenuClose = $('.btn_close');
	var dimBack = $('.btn_allmenu_close');
	
	allMenu.click(function(){
		$($(this).attr('href')).addClass('open');
		$('body').css('overflow', 'hidden');
		$("body #wrap").on('touchmove', function(e){e.preventDefault()}); //스크롤방지
		$('.btn_allmenu_close').show();
	});
	allMenuClose.click(function(){
		$('.allmenu_area_mo').removeClass('open');
		$('body').css({overflow:'auto'});
		$("body #wrap").off('touchmove'); //스크롤 방지 해제
		$(".btn_allmenu_close").hide();
	});
	dimBack.click(function(){
		$('.allmenu_area_mo').removeClass('open');
		$('body').css({overflow:'auto'});
		$("body #wrap").off('touchmove'); //스크롤 방지 해제
		$(this).hide();
	});
}

/* info layer */
function infoLayer() {
	var infoIc = $('.icon_info a.icon');
		infoCon = $('.icon_info .layer_area');
		infoClose = $('.icon_info .close');
	
	infoCon.hide();
	infoIc.on('click', function(){
		$(this).next('.layer_area').show();
		infoCon.attr("tabindex", 0).focus();
		return false;
	});

	infoClose.on('click', function(){
		$(".current").focus();
		$(".current").removeClass('current');
		$(this).parent('.layer_area').hide();
		return false;
	});
}

function uiDatePicker(){
	$(".datepicker").datepicker({
		closeText			: '닫기',
		showButtonPanel		:true,
		showOn				: 'button',
		buttonImage			: '../images/common/icon_calendar.gif',
		buttonText			: '날짜선택',
		buttonImageOnly		: false,
		showMonthAfterYear	: true,
		changeYear			: false,
		changeMonth			: false,
		dateFormat			: 'yy.mm.dd',
		monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
		dayNamesMin			: ['일','월','화','수','목','금','토']
	});
}