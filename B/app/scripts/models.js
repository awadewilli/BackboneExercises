var Backbone = require('backbone');
var $ = require('jquery');


var FormModel = Backbone.Model.extend({
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/awadewilliB/'
});

var FormData = Backbone.Model.extend({
  defaults:{
    'firstname':'Muffin',
    'lastname':'Man',
    'address':'Dreary Lane',
    'phone':'1-800-000-000'
  },
});

module.exports =
{
  'FormModel':FormModel,
  'FormData':FormData
};
