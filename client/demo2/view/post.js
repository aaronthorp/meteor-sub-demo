Template.demo2_post.onCreated(function() {
  var instance = this;
  var params = Router.current().params;

  instance.subscriptions = [];

  instance.addCommentToggle = new ReactiveVar(false);

  instance.subscriptions['post'] = instance.subscribe("post", params._id);
  instance.subscriptions['comments'] = instance.subscribe("comments", params._id);

  instance.autorun(function() {
    var post = Posts.findOne();
    instance.view.parentView.dataVar.set(post);
    instance.currentData = post;
    instance.data = post;
  });

});

Template.demo2_post.helpers({
  comments: function() {
    return Comments.find();
  },
  isAddComment: function() {
    var instance = Template.instance();
    return instance.addCommentToggle.get();
  }
});

Template.demo2_post.events({
  "click #addComment": function(event, instance) {
    instance.addCommentToggle.set(true);
  },
  "click #saveComment": function(event, instance) {
    // do comment save stuff here...
    instance.addCommentToggle.set(false);
  },
  "click #cancelComment": function(event, instance) {
    instance.addCommentToggle.set(false);
  }
});
