$(document).ready(function() {
	//Prevent Page Reload on all # links
	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});

	//placeholder ie 9 placeholder
	$('input, textarea').placeholder();

	// On scroll header small
	function smallHeader(){
		if($(window).scrollTop() > 0)
			$(".wrapper").addClass('small-header');
		else
			$(".wrapper").removeClass('small-header');

		if($("body").hasClass('menu-open'))
			$("html, body").removeClass('menu-open');
	}
	$(window).scroll(function(e) {
		smallHeader();
	});
	smallHeader();

	//placeholder
	$("[placeholder]").each(function () {
		$(this).attr("data-placeholder", this.placeholder);

		$(this).bind("focus", function () {
			this.placeholder = '';
		});
		$(this).bind("blur", function () {
			this.placeholder = $(this).attr("data-placeholder");
		});
	});


// owl Carousel
$('.banner .owl-carousel').owlCarousel({
	items:1,
	margin:0,
	center:true,
	dots:true,
	loop: true,
	nav:true,
	animateIn: 'fadeInDown',
	autoplayTimeout:2300,


});


// testimonials-slider
$('.testimonials-slider').owlCarousel({
	items:1,
	margin:0,
	center:true,
	dots:true,
	loop: true,
	// autoplay: true,
	animateIn: 'fadeInDown',
	autoplayTimeout:2300,

});


AOS.init({
	once: true,
	offset:50,
	duration:1500,
	disable: function() {
		var maxWidth = 991;
		return window.innerWidth < maxWidth;
	}
});

});