moods = require './moods'
dailynotes = require './dailynotes'
trackers = require './trackers'

module.exports =
    'trackerId': param: trackers.loadTracker
    'day': param: trackers.loadDay

    'moods/:day':
        get: moods.all
    'moods/mood/:day':
        get: moods.day
        put: moods.updateDay
    'basic-trackers':
        get: trackers.allBasicTrackers
    'trackers':
        get: trackers.all
        post: trackers.create
    'trackers/:trackerId':
        put: trackers.update
        del: trackers.destroy
    'trackers/:trackerId/raw-data':
        get: trackers.rawData
    'trackers/:trackerId/day/:day':
        get: trackers.day
        put: trackers.updateDayValue
    'trackers/:trackerId/amounts/:day':
        get: trackers.amounts
    'dailynotes/:day':
        get: dailynotes.day
        put: dailynotes.updateDay
    'dailynotes/':
        get: dailynotes.all
