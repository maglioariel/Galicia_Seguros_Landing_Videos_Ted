;$(function() {
	var tilesCount = 3;
	var $overlay = $(".overlay");
	var $overlayVideoWrapper = $overlay.find(".videoWrapper");
	if ($(window).width() <= 768) {
		tilesCount = 2
	}

	$overlay.add(".close").on("click", function () {
		$overlay.fadeOut();
	});

	$overlay.find(".overlay-content").on("click", function (e) {
		e.stopPropagation();
	});

	jQuery('.carousel li').on("click", function () {
		var $this = $(this);
		$overlay.fadeIn();
		$overlayVideoWrapper.html('<iframe class="video" src="' + $this.find("img").attr("data-url") + '" frameborder="0" allowtransparency />')
	});

	jQuery('.carousel').slick({
		infinite: true,
		slidesToShow: tilesCount,
		slidesToScroll: tilesCount,
		prevArrow: '.arrow-prev',
		nextArrow: '.arrow-next'
	});

});