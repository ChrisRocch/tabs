$(function(){
	$('#tabs ul li').click(function(){

		var href = $(this).children().attr('href');

		// cache celui qui est actif
		$('#tabs div.active').removeClass('active').toggle();
		$('#tabs ul li.active').removeClass('active');

		//affiche  celui qui est cliqué
		$(href).addClass('active').fadeToggle();
		$(this).addClass('active');
	});
});