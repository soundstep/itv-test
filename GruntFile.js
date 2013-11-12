module.exports = function (grunt) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
//		'http-server': {
//			dev: {
//				root: '',
//				port: 8282,
//				host: 'localhost',
//				cache: 0,
//				showDir : true,
//				autoIndex: true,
//				defaultExt: "html",
//				runInBackground: true
//			}
//		},
		htmlConvert: {
			options: {
				base: 'js/modules/search',
				indentString: '    ',
				indentGlobal: '    ',
				prefix: 'define([], function() {\n\n    \'use strict\';\n\n',
				suffix: '\n    return partials;\n\n});'
			},
			partials: {
				src: ['js/modules/search/partials/**/*.tpl.html'],
				dest: 'js/modules/search/partials/partials.js'
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				runnerPort: 9999,
				singleRun: true,
				background: false,
				browsers: ['PhantomJS']
			}
		},
		watch: {
			partials: {
				files: ['js/modules/search/partials/**/*.tpl.html'],
				tasks: ['htmlConvert'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-html-convert');
	grunt.loadNpmTasks('grunt-contrib-watch');
//	grunt.loadNpmTasks('grunt-http-server');

	// default
	grunt.registerTask('default', ['htmlConvert']);

};
