/**
 * @module makr
 */
var makr = makr || {
  config: {
    MAX_COMPONENTS: 32,
    MAX_SYSTEMS: 32
  }
};

if (typeof module !== 'undefined') {
  module.exports = makr;
}
