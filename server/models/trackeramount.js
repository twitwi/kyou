// Generated by CoffeeScript 1.6.3
var TrackerAmount, americano, date_helpers;

americano = require('americano-cozy');

date_helpers = require('../lib/date');

module.exports = TrackerAmount = americano.getModel('TrackerAmount', {
  tracker: String,
  date: Date,
  amount: Number
});

TrackerAmount.destroyAll = function(tracker, callback) {
  var params;
  params = {
    startkey: [tracker.id],
    endkey: [tracker.id + "0"]
  };
  return TrackerAmount.requestDestroy('byDay', params, callback);
};