// Generated by CoffeeScript 1.10.0
var americano;

americano = require('cozydb');

module.exports = {
  name: "FatWeight",
  color: "#9C7890",
  description: "Your fat mass, in grams.",
  model: americano.getModel('weight', {
    date: Date
  }),
  requestName: 'fatWeight',
  request: {
    map: function(doc) {
      return emit(doc.date.substring(0, 10), doc.fatWeight);
    },
    reduce: function(key, values, rereduce) {
      return sum(values) / values.length;
    }
  }
};
