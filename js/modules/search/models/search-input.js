define([], function() {

	var SearchInput = function(element, callback) {
		this.element = element;
		this.callback = callback;
		this.inputChange = this.inputChangeHandler.bind(this);
		this.setListeners();
	};

	SearchInput.prototype.inputChangeHandler = function(event) {
		var value = event.currentTarget.value.trim();
		clearTimeout(this.throttle);
		if (value === '') {
			this.trigger(value);
		}
		else {
			this.throttle = setTimeout(function() {
				this.trigger(value);
			}.bind(this), 500);
		}
	};

	SearchInput.prototype.trigger = function(query) {
		if (typeof this.callback !== 'undefined') {
			this.callback(query);
		}
	};

	SearchInput.prototype.setListeners = function() {
		if (this.element) {
			this.element.addEventListener('keyup', this.inputChange);
		}
	};

	SearchInput.prototype.removeListeners = function() {
		if (this.element) {
			this.element.removeEventListener('keyup', this.inputChange);
		}
	};

	SearchInput.prototype.dispose = function() {
		clearTimeout(this.throttle);
		this.removeListeners();
		this.element = undefined;
		this.callback = undefined;
		this.inputChange = undefined;
	};

	return SearchInput;

});