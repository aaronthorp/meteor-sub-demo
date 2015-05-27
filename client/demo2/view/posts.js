Template.demo2_posts.onCreated(function() {
  var instance = this;
  instance.subscribe("posts");

  instance.autorun(function() {
    var post = Posts.find();
    instance.view.parentView.dataVar.set(post);
  });

});
