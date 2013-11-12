define([
	'reqwest'
], function(reqwest) {

	var SearchService = function() {
		this.url = 'http://mercury.itv.com/api/json/dotcom/programme/searchatoz/';
	};

	SearchService.prototype.search = function(query, successCallback) {
		if (query) {
			reqwest({
				url: this.url + query,
				type: location.host === 'localhost' ? 'jsonp' : 'json', // todo: make something better with a config
				method: 'get',
				contentType: 'application/json',
				success: successCallback,
				error: function(err) {
					// todo: handle error
				}
			})
		}
	};

	SearchService.prototype.dispose = function() {
		this.url = undefined;
	};

	return SearchService;

});

