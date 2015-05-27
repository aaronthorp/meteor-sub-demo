Template.demo2_posts.onCreated(function() {
  var instance = this;
  instance.subscribe("posts");
});

Template.demo2_posts.helpers({
  posts: function() {
    return Posts.find();
  }
});
