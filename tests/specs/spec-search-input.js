define(['chai', 'models/search-input'], function(chai, SearchInput) {

	var assert = chai.assert;

	describe('search input', function () {

		var input, element;

		beforeEach(function () {
			element = document.createElement('input');
			element.setAttribute('type', 'text');
		});

		afterEach(function () {
			input.dispose();
			input = undefined;
			element = undefined;
		});

		it('create', function () {
			input = new SearchInput(element);
			assert.isDefined(input);
			assert.instanceOf(input, SearchInput);
			assert.equal(input.element, element);
		});

		it('trigger callback on value change', function (done) {
			input = new SearchInput(element, function() {
				done();
			});
			var event = document.createEvent('KeyboardEvent');
			event.initEvent('keyup', true, true, window, false, false, false, false, 40, 0);
			element.dispatchEvent(event);
		});

		it('trigger manual', function (done) {
			input = new SearchInput(element, function() {
				done();
			});
			input.trigger('query');
		});

//		it('listeners are removed', function (done) {
//			input = new SearchInput(element, function() {
//				done();
//			});
//			input.dispose();
//			var event = document.createEvent('HTMLEvents');
//			event.initEvent('keyup');
//			element.dispatchEvent(event);
//			setTimeout(function() {
//				done();
//			}, 200);
//		});

		it('dispose search input', function () {
			input = new SearchInput(element);
			input.dispose();
			assert.isUndefined(input.element);
		});

	});

});

