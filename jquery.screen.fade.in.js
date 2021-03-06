(function ($, global, undefined) {

	$.fn.screenFadeIn = function (customSettings) {

		var screenFadeInSettings = {
			fadeDuration: "slow",
			maxImageLoadTime: 3000 //in milliseconds

		};

		var settings = {};

		$.extend(true, settings, screenFadeInSettings, customSettings);

		var fadeIn = function ($elem) {

			$elem.animate(
				{
					opacity: 1
				}, 
				{
					step: function (now, fx) {
						$elem.css("transform", "scale(" + now + ")");
					},
					duration: settings.fadeDuration
				}, 'linear');
		};

		$(this).children().each(function (index) {

			var $this = $(this);

			$this.css("transform", "scale(0)");
			$this.css("opacity", "0");

			var delay = parseInt(Math.random() * settings.maxImageLoadTime);

			global.setTimeout(function () {

				fadeIn($this);

			}, delay);

		});
	};

	return this;

})(jQuery, window);
