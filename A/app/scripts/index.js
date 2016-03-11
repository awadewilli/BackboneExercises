var Backbone = require('backbone');
var $ = require('jquery');
var PostCollection = require('./models').PostCollection;

var FormView = require('./views');

var testCollection = new PostCollection();
var blogForm = new FormView({collection:testCollection, el:$('.blog-form')[0]});

// console.log(blogForm);
// console.log(testCollection);
