Template.index.events({
  "click #resetData": function(e, t) {
    Meteor.call("resetData", function(err, res) {
      alert("Data Reset");
    });
  }
})
