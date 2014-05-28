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
		pager: '.cycle-pager'
	});



});