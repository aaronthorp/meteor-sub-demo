Template.demo1_post.helpers({
  post: function() {
    return Posts.findOne();
  },
  comments: function() {
    return Comments.find();
  },
  isAddComment: function() {
    return Session.get("postAddNewComment");
  }
});

Template.demo1_post.events({
  "click #addComment": function(event, instance) {
    Session.set("postAddNewComment", true);
  },
  "click #saveComment": function(event, instance) {
    // do comment save stuff here...
    Session.set("postAddNewComment", false);
  },
  "click #cancelComment": function(event, instance) {
    Session.set("postAddNewComment", false);
  }
});
