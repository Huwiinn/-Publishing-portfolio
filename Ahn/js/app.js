$(function(){
    $('.top_bars').click(function(){
        $('.top_bars').hide();
        $('#menu').addClass('show');
        $('#menu .btn_close').addClass('show');
    })

    $('#menu .btn_close').click(function(){
        $('#menu').removeClass('show');
        $('.top_bars').show();
    });

    $(document).scroll(function () {
		/********FIRST SECTION**************/
		if ($(this).scrollTop() >= $("#main_search").position().top - 300) {
		$("#main_search_wrap").removeClass("active");
		$("#main_search_wrap").addClass("active");
		} else {
		$("#main_search_wrap").removeClass("active");
		}
	});

    $('.spanBtn').click(function(){
        $('.depth2').removeClass('off');
        $('.depth2').addClass('on');
    })
})

