if (!Function.prototype.bind) {
	Function.prototype.bind = function bind(that) {
		var target = this;
		if (typeof target !== 'function') {
			throw new Error('Error, you must bind a function.');
		}
		var args = Array.prototype.slice.call(arguments, 1); // for normal call
		var bound = function () {
			if (this instanceof bound) {
				var F = function(){};
				F.prototype = target.prototype;
				var self = new F();
				var result = target.apply(
					self,
					args.concat(Array.prototype.slice.call(arguments))
				);
				if (Object(result) === result) {
					return result;
				}
				return self;
			} else {
				return target.apply(
					that,
					args.concat(Array.prototype.slice.call(arguments))
				);
			}
		};
		return bound;
	};
}

var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/(.*)spec-(.*)\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	'baseUrl': '/base',
	'paths': {
		'reqwest': 'js/common/libs/reqwest',
		'chai': 'tests/assets/chai',
		'services': 'js/modules/search/services',
		'models': 'js/modules/search/models'
	},
	deps: tests,
	callback: window.__karma__.start
});
