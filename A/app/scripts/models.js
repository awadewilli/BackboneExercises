var Backbone = require('backbone');
var $ = require('jquery');

var Post = Backbone.Model.extend({

  defaults: {
    title:'sample title',
    post: 'sample post'
  }

});


var PostCollection = Backbone.Collection.extend({

model:Post,
url: 'http://tiny-lasagna-server.herokuapp.com/collections/awadewilli'

});

module.exports= {
  'Post': Post,
  'PostCollection': PostCollection
};
