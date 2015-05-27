Meteor.publish("comments", function(post_id) {
  sleepFor(3000);
  return Comments.find({"post._id": post_id});
});
