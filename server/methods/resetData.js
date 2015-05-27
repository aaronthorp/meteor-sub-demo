Meteor.methods({
  resetData: function() {
    Posts.remove({});
    Comments.remove({});

    var chance = new Chance();

    for(var i = 0; i < 100; i++) {
      var post = {
        user: {
          _id: chance.fbid(),
          name: chance.name(),
          email: chance.email()
        },
        title: chance.sentence({words: 5}),
        body: chance.paragraph({sentences: 10}),
        timestamp: chance.hammertime()
      };

      var id = Posts.insert(post);

      for(var j = 0; j < 10; j++) {
        var comment = {
          post: {_id: id},
          user: {
            _id: chance.fbid(),
            name: chance.name(),
            email: chance.email()
          },
          comment: chance.sentence(),
          timestamp: chance.hammertime()
        }
        Comments.insert(comment);
      }
    }
    console.log("Data loaded");

  }
})
