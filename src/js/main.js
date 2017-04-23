$('.btn-menu').click(function () {
	if ($('.btn-menu').hasClass('active-btn-menu')) {
		$(this).removeClass('active-btn-menu');
	}else{
		$(this).addClass('active-btn-menu');
	}
});
