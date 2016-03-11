var Backbone = require('backbone');
var $ = require('jquery');
var FormModel = require('./models').FormModel;
var FormData = require('./models').FormData;
var handlebars = require('handlebars');

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var FormDataView = Backbone.View.extend({
 tagName:"form",
 template:handlebars.compile($('#user-form').html()),

 initialize:function(){
   this.render();
 },

  events:{
    'submit':'addFormData'
  },

  addFormData:function(e){
    e.preventDefault();
    var formData = this.$el.serializeObject();
    console.log(formData);
    this.model.set(formData);
    this.model.save(formData);
  },

  render:function(){
    this.$el.html(this.template);
    return this;
  }


});

module.exports = {'FormDataView':FormDataView};
