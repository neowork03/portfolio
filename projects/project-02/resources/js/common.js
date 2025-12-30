//*** Common ***//
// select
$(document).ready(function() { // ready function start

	// select
	basicSelect();
	
}); // ready function end

function basicSelect() {
	var selects = $('.select'),
			targets = selects.children('select');

	targets.on({
		'focus': function() {
			//$(this).parents('.select').addClass('focus');
		},
		'blur': function() {
			//$(this).parents('.select').removeClass('focus');
			$(this).parents('.select').removeClass('active');
		}
	});
	targets.change(function() {
		var selected = $(this).children('option:selected').text();

		$(this).siblings('.trigger').children('span').text(selected);
		$(this).parent().removeClass('focus');
	});
	targets.on('click', function() {
		$(this).parents('.select').toggleClass('active');
	});
}

//*** UI ***//
// left menu
$(function(){
	$("#snb .nav > li > a").on("click", function(e){
		if($(this).parent().has("ul")) {
			//e.preventDefault();
		}
	});

	$(".nav > li a").on("click", function(e){
		$(".nav > li a").removeClass("selected");
		if(!$(this).hasClass("selected")) {
			$(this).addClass("selected");
			$(this).parent().addClass("selected").siblings().removeClass("selected");
		}
	});
});

// main 숫자 애니메이션
$(function(){
	$('.present .count').each(function(){
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		},{
			duration: 600,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			},
		});
	});
});

//상세정보 열고 닫기
$(function(){
	$(".col_btn > a.open").on("click", function(e){
		$(".cont").removeClass("collapse");
		if(!$(this).hasClass("collapse")) {
			$(this).addClass("collapse");
		}
		$(".sec_01 .btn_wrap").hide();
		$(this).hide()
		$(".col_btn > a.close").css('display','inline-block');
		$(".notice_reg").css({'height':'32px','overflow':'hidden'});
	});
	$(".col_btn > a.close").on("click", function(e){
		$(".cont").addClass("collapse");
		$(this).hide()
		$(".col_btn > a.open").css('display','inline-block');
		$(".notice_reg").css({'height':'auto','overflow':'auto'});
	});
});

//작성하기 버튼클릭
$(function(){
	$(".write button").on("click", function(e){
		$(".cont").addClass("collapse");
		$(".sec_02").show();
	});
});
