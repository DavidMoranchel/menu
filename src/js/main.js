$('.btn-menu').click(function () {
	if ($('.btn-sub-menu').hasClass('active-sub-menu')) {
		$('.btn-sub-menu').removeClass('active-sub-menu')
		$('.btn-menu').removeClass('active-menu');
		$('.hamburger').html('menu');
	}else{
		$('.btn-sub-menu').addClass('active-sub-menu')
		$('.btn-menu').addClass('active-menu');
		$('.hamburger').html('close');
	}
});
// $(".btn-menu").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
// 	console.log('acaboooo');
// });