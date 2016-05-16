americano = require 'cozydb'

module.exports =
    name: "Weight - fat"
    color: "#9C7890"
    description: """
Your fat mass, in grams."""
    model: americano.getModel 'weight', date: Date
    request:
        map: (doc) ->
            emit doc.date.substring(0,10), doc.fatWeight
        reduce: (key, values, rereduce) ->
            sum(values) / values.length
