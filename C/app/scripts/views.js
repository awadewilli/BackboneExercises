var Backbone = require('backbone');
var $ = require('jquery');
var handlebars = require('handlebars');
var sidebar = require ('./templates/sidebar.hbs');
var reader = require ('./templates/reader.hbs');
var listItem = require ('./templates/listitem.hbs');
var Posts = require('./models').PostCollection;


var PostList = Backbone.View.extend({

tagname:'ul',
initialize:function(){
  this.listenTo(this.collection, "add", this.renderChild);

},

render:function(){
return this;
},
renderChild: function(model){
 var itemView = new PostListItem({model: model});
 this.$el.append(itemView.render().el);

}
});

var PostListItem = Backbone.View.extend({
  tagname:'li',
  template:listItem,
  events : {
    click : "showBlog"
  },

  initialize:function(){

  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
  showBlog:function(model){
    var showReader = new Reader({model:this.model});
    $('.reader-wrapper').html(showReader.render().el);

  }
});

var Reader = Backbone.View.extend({
  tagname : 'div',
  template : reader,
  initialize:function(){

    },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

module.exports={
  "PostList":PostList,
  "PostListItem":PostListItem,
  "Reader":Reader
};
