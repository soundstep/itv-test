define([
	'soma-template',
	'moment'
], function(template, moment) {

	var SearchResult = function(element) {
		this.element = element;
		this.template = template.create(element);
		this.scope = this.template.scope;
		this.scope.hasContentUrl = function(item) {
			return item && item.Programme && item.Programme.AddtionalContentUri;
		};
		this.scope.formatDate = function(date) {
			var dStr = date.replace('/Date(', '').replace(')/', '');
			var d = new Date(parseInt(dStr, 10));
			return moment(date).calendar();;
		};
	};

	SearchResult.prototype.update = function(data) {
		if (data && data.Result && data.Result.length > 0) {
			this.scope.results = data.Result[0].Details;
			this.template.render();
		}
	};

	SearchResult.prototype.clear = function() {
		this.scope.results = undefined;
		this.template.render();
	};

	return SearchResult;

});