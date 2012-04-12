$(document).ready(function() {
  	
	$('#nav_menu').children('ul').children('li').first().addClass('red');

	$('#nav_menu').children('ul').children('li').click(function(){
		$('#nav_menu').children('ul').children('li').removeClass('red');
		$(this).addClass('red');
	});
	
	$('#legs').mouseenter(function(){
		$('#human').hide();
		$('#down').show();
		$('#link_legs').show();
	}).mouseleave(function(){
		$('#human').show();
		$('#down').hide();
		$('.link').hide();
	});
	
	$('#lower_body').mouseenter(function(){
		$('#human').hide();
		$('#abs').show();
		$('#link_middle').show();
	}).mouseleave(function(){
		$('#human').show();
		$('#abs').hide();
		$('.link').hide();
	});
	
	$('.arms').mouseenter(function(){
		$('#human').hide();
		$('#middle').show();
		$('#link_arms').show();
	}).mouseleave(function(){
		$('#human').show();
		$('#middle').hide();
		$('.link').hide();
	});
	
	$('#upper_body').mouseenter(function(){
		$('#human').hide();
		$('#up').show();
		$('#link_up').show();
	}).mouseleave(function(){
		$('#human').show();
		$('#up').hide();
		$('.link').hide();
	});
	
	$('.arms').click(function(){
		$('.link_2').hide();
		$('#link_arms_2').show();
	});
	$('#upper_body').click(function(){
		$('.link_2').hide();
		$('#link_up_2').show();
	});
	$('#legs').click(function(){
		$('.link_2').hide();
		$('#link_legs_2').show();
	});
	$('#lower_body').click(function(){
		$('.link_2').hide();
		$('#link_middle_2').show();
	});
});