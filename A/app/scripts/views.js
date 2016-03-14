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
  'collection .add' : 'reloadPage'
},

createPost: function(e){
  e.preventDefault();
  var postDetails = this.$el.serializeObject();
  console.log(postDetails);
  this.collection.create(postDetails);
},

render: function(){
return this;

}

});




module.exports= FormView;
