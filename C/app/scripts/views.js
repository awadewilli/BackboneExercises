var Backbone = require('backbone');
var $ = require('jquery');
var handlebars = require('handlebars');

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};
