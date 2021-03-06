americano = require 'cozydb'

module.exports =
    name: "Weight"
    color: "#78909C"
    description: """
Your weight in grams."""
    model: americano.getModel 'weight', date: Date
    request:
        map: (doc) ->
            emit doc.date.substring(0,10), doc.weight
        reduce: (key, values, rereduce) ->
            sum(values) / values.length
