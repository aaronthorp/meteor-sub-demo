Router.route("demo1_posts", {
  path: "/demo1",
  waitOn: function() {
    return this.subscribe("posts");
  }
});

Router.route("demo1_post", {
  path: "/demo1/:_id",
  waitOn: function() {
    return [
      this.subscribe("post", this.params._id),
      this.subscribe("comments", this.params._id)
    ];
  },
  onBeforeAction: function() {
    Session.set("postAddNewComment", false);
    this.next();
  }
});


// -------------

Router.route("demo1_source", {
  path: "/source/demo1"
});
