var Tap = (function($) {
	"use strict";

	function defaults(settings) {
		var d = Tap.defaultSettings,
			i;
		for (i in d) if (d.hasOwnProperty(i)) {
			settings[i] = settings[i] !== undefined ? settings[i] : d[i];
		}

		return settings;
	}

	function Tap(settings) {
		this.settings = settings = defaults(settings);

		if (settings.add !== null) {
			var aEL = HTMLElement.prototype.addEventListener,
				add = settings.add;

			HTMLElement.prototype.addEventListener = function(eventName, callback) {
				add.apply(this, arguments);

				aEL.apply(this, [eventName, function() {
					if (settings.before) {
						settings.before.apply(this, arguments);
					}

					callback.apply(this, arguments);

					if (settings.after) {
						settings.after.apply(this, arguments);
					}
				}]);
			};
		}
	}

	Tap.prototype = {};

	Tap.defaultSettings = {
		add: null,
		before: null,
		after: null
	};

	return Tap;
})(jQuery);