// Generated by CoffeeScript 1.9.3
var americano;

americano = require('cozydb');

module.exports = {
  name: "Expenses",
  color: "#297FB8",
  description: "Sum of every bank operations below 0 (all accounts).",
  model: americano.getModel('bankoperation', {
    date: Date
  }),
  request: {
    map: function(doc) {
      if (doc.amount < 0) {
        return emit(doc.date.substring(0, 10), -1 * doc.amount);
      }
    },
    reduce: function(key, values, rereduce) {
      return sum(values);
    }
  }
};
