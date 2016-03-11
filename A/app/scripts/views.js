var Backbone = require('backbone');
var $ = require('jquery');


$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var FormView = Backbone.View.extend({

events:{
  'submit' : 'createPost',
  'add' : 'reloadPage'
},

createPost: function(e){
  e.preventDefault();



  var postDetails = this.$el.serializeObject();
  console.log(this.$el);
  console.log(postDetails);
  this.collection.create(postDetails);
},


});




module.exports= FormView;
