$(document).ready(function() {
  	
	$('#nav_menu').children('ul').children('li').first().addClass('red');

	$('#nav_menu').children('ul').children('li').click(function(){
		$('#nav_menu').children('ul').children('li').removeClass('red');
		$(this).addClass('red');
	});
	
	$('#body_sample').mouseenter(function(){
		$('#human').fadeOut('fast');
	}).mouseleave(function(){
		$('#human').show();
	});
	
	$('#legs').mouseenter(function(){
		$('#down').fadeIn('fast');
	}).mouseleave(function(){
		$('#down').fadeOut('fast');
	});
	
	$('#lower_body').mouseenter(function(){
		$('#abs').fadeIn('fast');
	}).mouseleave(function(){
		$('#abs').fadeOut('fast');
	});
	
	$('.arms').mouseenter(function(){
		$('#middle').fadeIn('fast');
	}).mouseleave(function(){
		$('#middle').fadeOut('fast');
	});
	
	$('#upper_body').mouseenter(function(){
		$('#up').fadeIn('fast');
	}).mouseleave(function(){
		$('#up').fadeOut('fast');
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