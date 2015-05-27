Template.demo2_post.onCreated(function() {
  var instance = this;
  var params = Router.current().params;

  instance.subscriptions = [];

  instance.add = new ReactiveVar(false);

  instance.subscriptions['post'] = instance.subscribe("post", params._id);
  instance.subscriptions['comments'] = instance.subscribe("comments", params._id);
});

Template.demo2_post.helpers({
  post: function() {
    return Posts.findOne();
  },
  comments: function() {
    return Comments.find();
  },
  isAddComment: function() {
    var instance = Template.instance();
    return instance.add.get();
  }
});

Template.demo2_post.events({
  "click #addComment": function(event, instance) {
    instance.add.set(true);
  },
  "click #saveComment": function(event, instance) {
    // do comment save stuff here...
    instance.add.set(false);
  },
  "click #cancelComment": function(event, instance) {
    instance.add.set(false);
  }
});
