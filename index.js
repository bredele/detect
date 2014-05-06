
/**
 * Support user agents.
 * @type {Array}
 */

var agents = {
  'cw': [/Chrom(e|ium)\/([0-9]+)\./, 2],
  'ff': [/Firefox\/([0-9]+)\./, 1]
};


var webrtc = (window.webkitRTCPeerConnection || window.mozRTCPeerConnection);


/**
 * Expose 'detect'
 */

module.exports = detect;


/**
 * detect constructor.
 * @api public
 */

function detect(cb, feedback) {
  if(webrtc) cb();
  else feedback();
  return !!webrtc;
}


detect.version = function(type) {

};