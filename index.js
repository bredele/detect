
/**
 * Modules dependencies.
 * @api privtae
 */

var deus = require('deus');


/**
 * Support user agents.
 * @type {Array}
 */

var agents = {
  'mf': [/Firefox\/([0-9]+)\./, 1],
  'cw': [/Chrom(e|ium)\/([0-9]+)\./, 2]
};


var webrtc = (window.webkitRTCPeerConnection && 2 ||
  window.mozRTCPeerConnection && 1);


/**
 * Expose 'detect'
 */

module.exports = deus('string', 'function', detect);


/**
 * Detect webrtc support (only on chrome
 * and firefox).
 *
 * @param {String} agent
 * @param {Function} cb 
 * @param {Function} feedback
 * @return {Boolean}
 * @api public
 */

function detect(type, cb, feedback) {
  var bool = !!webrtc;
  if(type) bool = detect.type(type);
  //NOTE: this is ugly!
  if(bool) cb && cb();
  else feedback && feeback();
  return bool;
}


/**
 * Detect browser's type and 
 * return true if equal to navigator's agent.
 * 
 * @param  {String} type 
 * @return {Boolean}  
 */

detect.type = function(type) {
  var agent = agents[type];
  //NOTE: it'll probably change with browsers versions
  return !!(agent && (webrtc === agent[1]));
};
