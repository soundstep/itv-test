(function() {

	'use strict';

	require.config({
		'baseUrl': './js/modules/search',
		'paths': {
			'reqwest': '../../common/libs/reqwest',
			'soma-template': '../../common/libs/soma-template',
			'moment': '../../common/libs/moment.min'
		}
	});

	require(['./search'], function (SearchModule) {

		var element = document.querySelector('.search');

		var search = new SearchModule(element, {
			input: '.search-input',
			result: '.search-result'
		});

		// todo: create code to handle multiple search module in the same page

	});

})();
