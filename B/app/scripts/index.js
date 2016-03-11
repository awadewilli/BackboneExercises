var Backbone = require('backbone');
var $ = require('jquery');
var FormModel = require('./models').FormModel;
var FormData = require('./models').FormData;
var FormDataView = require('./views').FormDataView;

var form = new FormModel();
var formView = new FormDataView({model:form});

$('.form-wrapper').html(formView.render().el);
