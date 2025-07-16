M.AutoInit();

// Parallax
(function($){
	$(function(){

		$('.sidenav').sidenav();
		$('.parallax').parallax();

	}); // end of document ready
})(jQuery); // end of jQuery name space

// Tooltip
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.tooltipped');
	var instances = M.Tooltip.init(elems, function(){});
});

// Carousel
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.carousel');
	var instances = M.Carousel.init(elems, function(){});
});

// Slider
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.slider');
	var instances = M.Slider.init(elems, function(){});
});

// Modal
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, function(){});
});










