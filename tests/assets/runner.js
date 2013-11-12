require.config({
	'paths': {
		'reqwest': '../../js/common/libs/reqwest',
		'services': '../../js/modules/search/services',
		'models': '../../js/modules/search/models'
	}
});

require(['mocha'], function(){

	mocha.setup('bdd');

	require([
		'specs/spec-search-service.js',
		'specs/spec-search-input.js'
	], function() {
		mocha.run();
	});

});