$("[data-fancybox]").fancybox({
	loop: false,
	buttons: [
		"zoom",
		"share",
		"slideShow",
		"fullScreen",
		// "download",
		"thumbs",
		"close",
	],
	animationEffect: "zoom-in-out",
	transitionEffect: "slide",
});

$(function () {
	// Rectangle demo start------------------------
	$(".demo1").svgpopup({
		figure: "rectangle",
		fill: "#fcbf02",
		randomize: false,
	});
	// Rectangle demo end --------------------------
});

$(".img-area").hiSlide({
	auto: false,
});

// $(".slider").jasCarousel();

$(".slider").jasCarousel({
	// or 'vertical'
	mode: "horizontal",

	// transition delay
	delay: 1500,

	// autoplay
	auto: false,

	// autoplay direction
	autoDirection: "next",

	// navigation options
	navigation: true,
	prevText: "prev",
	nextText: "next",

	// margin in pixels
	margin: 150,

	// custom perspective
	perspective: 1100,

	// slide front face?
	slideFrontFace: false,

	// move on slide click?
	moveOnSlideClick: false,

	// animation speed
	speed: 2000,
});

$("#myTimeline").albeTimeline(data, {
	language: "fr-FR",
	formatDate: "DD dd MMMM yyyy",
});

var sharer = new SelectionSharer("p");

$(function () {
	$.scrollUp({
		topSpeed: 300,
	});
});

$("#foreground").mouseParallax({ moveFactor: 10 });

$(function () {
	$(".flipster").flipster({
		start: "center",
		style: "carousel",
		enableKeyboard: true, // Enable left/right arrow navigation
		enableMousewheel: true, // Enable scrollwheel navigation (up = left, down = right)
		enableTouch: true,
	});
});

Sticksy.initializeAll(".js-sticky-widget", { listen: true });
// ... the same as
// new Sticksy("#container1 .block.js-sticky-widget");
// new Sticksy("#container2 .block.js-sticky-widget");
// new Sticksy("#container3 .block.js-sticky-widget");
// new Sticksy("#container4 .block.js-sticky-widget");
