var Backbone = require('backbone');
var $ = require('jquery');

var Post = Backbone.Model.extend({

 defaults:{
   'title':'Blog 1',
   'author':'John Doe',
   'post':'post',
   'paragraph':'Lipsum'
 }

});

var PostCollection = Backbone.Collection.extend({
  model:Post,
  url:'http://tiny-lasagna-server.herokuapp.com/collections/awadewilli'
});



module.exports={
  'Post':Post,
  'PostCollection':PostCollection
};
