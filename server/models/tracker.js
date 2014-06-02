// Generated by CoffeeScript 1.7.1
var Tracker, TrackerAmount, americano, date_helpers;

americano = require('americano-cozy');

date_helpers = require('../lib/date');

TrackerAmount = require('./trackeramount');

module.exports = Tracker = americano.getModel('Tracker', {
  name: String,
  description: String
});

Tracker.prototype.getAmount = function(day, callback) {
  var params;
  params = {
    key: [this.id, day.format('YYYY-MM-DD')]
  };
  return TrackerAmount.request('byDay', params, function(err, trackerAmounts) {
    if (err) {
      return callback(err);
    } else if (trackerAmounts.length !== 0) {
      return callback(null, trackerAmounts[0]);
    } else {
      return callback();
    }
  });
};

Tracker.prototype.getAmounts = function(callback) {
  var params;
  params = {
    startKey: [this.id, null],
    endKey: [this.id, '0']
  };
  return TrackerAmount.request('byDay', params, callback);
};
