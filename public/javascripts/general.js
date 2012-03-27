$(document).ready(function() {
  	
	$('#nav_menu').children('ul').children('li').first().addClass('red');

	$('#nav_menu').children('ul').children('li').click(function(){
		$('#nav_menu').children('ul').children('li').removeClass('red');
		$(this).addClass('red');
	});

});