// Generated by CoffeeScript 1.9.3
var americano;

americano = require('cozydb');

module.exports = {
  name: "Tasks",
  color: "#800000",
  description: "This tracker counts the tasks marked as done in your Cozy. The date used to\nbuild the graph is the completion date.",
  model: americano.getModel('Task', {
    completionDate: Date
  }),
  request: {
    map: function(doc) {
      var date, dateString, dd, mm, yyyy;
      if ((doc.completionDate != null) && doc.done) {
        date = new Date(doc.completionDate);
        yyyy = date.getFullYear().toString();
        mm = (date.getMonth() + 1).toString();
        if (mm.length === 1) {
          mm = "0" + mm;
        }
        dd = date.getDate().toString();
        if (dd.length === 1) {
          dd = "0" + dd;
        }
        dateString = yyyy + '-' + mm + '-' + dd;
        return emit(dateString, 1);
      }
    },
    reduce: function(key, values, rereduce) {
      return sum(values);
    }
  }
};
