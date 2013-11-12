define([
	'services/search',
	'models/search-input',
	'views/search-result',
	'partials/partials'
], function(SearchService, SearchInput, SearchResult, partials) {

	var SearchModule = function(element, map) {
		this.element = element;
		this.map = map;
		this.init();
	};

	SearchModule.prototype.init = function() {
		this.createContent(partials['partials/search.tpl.html']);
	};

	SearchModule.prototype.createContent = function(htmlString) {
		this.element.innerHTML = htmlString;
		this.createService();
		this.createSearchInput();
		this.createSearchResult();
	};

	SearchModule.prototype.createService = function() {
		this.service = new SearchService();
	};

	SearchModule.prototype.createSearchInput = function() {
		var element = this.element.querySelector(this.map.input);
		if (element) {
			this.input = new SearchInput(element, this.search.bind(this));
		}
	};

	SearchModule.prototype.createSearchResult = function() {
		var element = this.element.querySelector(this.map.result);
		if (element) {
			this.results = new SearchResult(element);
		}
	};

	SearchModule.prototype.search = function(query) {
		if (!query) {
			this.results.clear();
		}
		else {
			this.service.search(query, function(data) {
				this.results.update(data);
			}.bind(this));
		}
	};

	SearchModule.prototype.dispose = function() {
		this.service.dispose();
		this.input.dispose();
		this.service = undefined;
		this.input = undefined;
	};

	return SearchModule;

});