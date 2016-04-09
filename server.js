// Generated by CoffeeScript 1.10.0
var RealtimeAdapter, americano, initTrackers, port;

americano = require('americano');

initTrackers = require('./server/init/trackers');

RealtimeAdapter = require('cozy-realtime-adapter');

process.env.TZ = 'UTC';

port = process.env.PORT || 9260;

americano.start({
  name: 'kyou',
  port: port
}, function(err, app, server) {
  var realtime;
  realtime = RealtimeAdapter(server, ['sleep.create', 'sleep.delete', 'steps.create', 'steps.delete']);
  return initTrackers(app);
});
