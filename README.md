ITV Search Module
=================

### Locations

The search module is located in:

	/js/modules/search

The tests are located in:

	/tests/specs
	
The demo is on the root of the repo:

	/index.html
	
### Installation

	$ npm install
	$ grunt install grunt-cli -g
	
### Compile partials

	$ grunt htmlConvert
	
Compile on file change:

	$ grunt watch

### Run the demo

The repo must be running on a local server: localhost on port 80 to avoid CORS issues.

	/index.html
	
### Run the tests

The repo must be running on a local server: localhost on port 80 to avoid CORS issues.

	/tests/index.html
	
### Run the tests using karma

	$ npm instal karma -g
	$ npm install mocha -g
	$ grunt karma

