define(['chai', 'services/search'], function(chai, SearchService) {

	var assert = chai.assert;

	describe('search service', function () {

		var service;

		beforeEach(function () {
			service = new SearchService();
		});

		afterEach(function () {
			service.dispose();
			service = undefined;
		});

		it('create service', function () {
			assert.isDefined(service);
			assert.instanceOf(service, SearchService);
		});

		it('perform a search', function (done) {
			this.timeout(5000);
			service.search('a', function(data) {
				try {
					assert.isDefined(data);
					assert.isDefined(data.Parameters);
					assert.isDefined(data.Result);
					assert.isArray(data.Result);
					done();
				} catch(e) {
					done(e);
				}
			})
		});

		it('does not perform an empty search', function (done) {
			this.timeout(2000);
			service.search('', function() {
				try {
					done(new Error('Should not have perform a search'));
				} catch(e) {
					done(e);
				}
			});
			setTimeout(function(){
				done();
			}, 1500);
		});

		it('dispose', function () {
			service.dispose();
			assert.isUndefined(service.url);
		});

	});

});

