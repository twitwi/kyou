// Generated by CoffeeScript 1.6.3
var mails, moods, tasks, trackers;

moods = require('./moods');

tasks = require('./tasks');

mails = require('./mails');

trackers = require('./trackers');

module.exports = {
  'trackerId': {
    param: trackers.loadTracker
  },
  'tasks/:day': {
    get: tasks.all
  },
  'mails/:day': {
    get: mails.all
  },
  'moods/:day': {
    get: moods.all
  },
  'moods/mood/:day': {
    get: moods.day,
    put: moods.updateDay
  },
  'basic-trackers': {
    get: trackers.allBasicTrackers
  },
  'trackers': {
    get: trackers.all,
    post: trackers.create
  },
  'trackers/:trackerId': {
    put: trackers.update,
    del: trackers.destroy
  },
  'trackers/:trackerId/day/:day': {
    get: trackers.day,
    put: trackers.updateDayValue
  },
  'trackers/:trackerId/amounts/:day': {
    get: trackers.amounts
  }
};