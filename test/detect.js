
/**
 * Test dependencies.
 */

var assert = require('assert');
var detect = require('..');

describe("webrtc", function() {

	it('should just return true if supports webrtc', function() {
		assert(detect());
	});

	it('should execute callback if supports webrtc', function(done) {
		detect(done);
	});

	it('should detect user agent', function(done) {
		detect('cw', done);
	});

});
