function viewport(){
	var e = window, a = 'inner';
	if ( !( 'innerWidth' in window ) ){
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
} 
viewport();
$(window).resize(function(){
	viewport();	
});



head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

// cycle init

	$(".js-slider").cycle({
		timeout: 4000,
		slides: '> div',
		speed: 800,
		pager: '.cycle-pager'
	});

// select
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            select_list.hide();
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
                return false;
            });
            $(".help").on('click', function(event){
                $(".js-select-list").hide();
                event.stopPropagation();
            });
        });

    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });

// menu dropdown
	
	function menu_dropdown() {
		var btn = $(".js-menu-btn");
		var menu = $(".js-menu");
		var window_width = viewport().width;
		
		if (window_width <= 1024){
			menu.hide();
			btn.show();	
			btn.on('click', function(){
				$(this).toggleClass('is-active');
				menu.toggleClass('is-open').toggle();
			});
		}
		else{
			menu.show();
			btn.hide();
		}
	}
	menu_dropdown();

// menu scroll hide

	function menu_hide(){
		if($(window).scrollTop() > 122){
			$(".header").addClass('is-hidden');
		}
		else{
			$(".header").removeClass('is-hidden');
		}
	}
	menu_hide();

//menu navigation
		
		function scrollNav(){
    	    $('.js-section').each(function(){
    	        var pos = $(this).offset().top;
    	        var id = $(this).attr('id');
    	        if( $(window).scrollTop() >= (pos - 89)){
    	            $('.menu__list li a').removeClass('is-active');
    	            $('[href = #'+id+']').addClass('is-active');
    	        }
    	    });
    	}

		$(".menu__list a").click(function (){
    	    var page = $(this).attr("href");
    	
    	    $('html, body').animate({
    	        scrollTop: $(page).offset().top - 145
    	    }, 500);
    	    return false;
    	});
	


	$(window).scroll(function(){
    	menu_hide();
    });

	$(window).resize(function(){
    	menu_dropdown();
    });
});