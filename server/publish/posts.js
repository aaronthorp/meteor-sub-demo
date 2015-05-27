Meteor.publish("posts", function() {
  sleepFor(2000);
  return Posts.find();
});

Meteor.publish("post", function(post_id) {
  return Posts.find({_id: post_id});
});
