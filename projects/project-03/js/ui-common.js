// JavaScript Document
$(document).ready(function() {
	"use strict";
    //GNB
	$('#gnb .gnb-nav > ul > li > h2').on("mouseenter focus", function(){
		$('#gnb').addClass('gnb-open');
	});
	$('.btn-menu-open').on("click", function(){
		$('#gnb').toggleClass('gnb-open');
	});
	$('#gnb').mouseleave(function() {
		$(this).removeClass('gnb-open');
	});
});


$(document).ready(function() {
	"use strict";
    //Family Site
	$('#footer .link-site').find('.btn').click(function(){
		$('.family-site').slideToggle('300');
	});
});

/* Accordian_FAQ */
$(function(){
	/* accordian_ty */
	$.fn.accordian_ty = function(){
		var tar = $(this).closest('.list');
		var foldingChk = tar.hasClass('on');
		if (foldingChk){
			tar.removeClass('on');
		} else {
			tar.siblings('.list').removeClass('on');
			tar.addClass('on');
		}
	};	
	$('.accordian_ty .list .btn').click(function(){
		$(this).accordian_ty();
		return false;
	});
});	

$(document).ready(function() {
	"use strict";
    //FAQ
	$('.faqList .question').find('a').click(function(){		
		$(this).parents().parents().toggleClass('open');
	
	});
})

//FAQ_Backup 1
$(document).ready(function(){
    $(".faqList1 .answer").hide();
    $(".faqList1 .question").click(function() {
		$(".answer").hide(); // 모든 답변을 닫고
        $(this).next(".answer").slideToggle("fast"); // next 로 
		$(this).parents().parents().toggleClass('open');
        //$(this).toggleClass("active");		
		//$(this).parent().toggleClass('open');
		//$(this).next('.cate_con').toggle();
    });
});

//FAQ_Backup 2
$(document).ready(function(){
	$(".faqList3 .question").click(function(){
		$(this).next().toggle("fast");
	});
});




$(document).ready(function() {
	"use strict";
    //tab_area
	$('.tab_area .item').find('a').click(function(e){
		e.preventDefault();
		var $wrap = $(this).closest('.inner');
		var $parent = $(this).closest('li');
		var $index = $wrap.find('.tab_area li').index($parent);
		
		$(this).parents().addClass('active');
		$(this).parents().siblings('li').removeClass('active');
		
		$wrap.find('.tab_contents').hide().eq($index).show();
	});
});

