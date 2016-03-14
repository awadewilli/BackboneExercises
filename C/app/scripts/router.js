var $ = require('jquery');
var Backbone = require('backbone');

// Local
var views = require('./views');
var Posts = require('./models').PostCollection;
var SinglePost = require('./models').Post;

var Router = Backbone.Router.extend({

  initialize: function(){
      var postCollection = new Posts();
      var postList = new views.PostList({collection: postCollection});
      var postListItem = new views.PostListItem({collection: postCollection});
      var reader = new views.Reader({collection: postCollection});
      postCollection.fetch();

      $('.posts-wrapper').append(postList.render().el);


}

});

module.exports = new Router();
