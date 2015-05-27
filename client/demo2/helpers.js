Template.registerHelper("isReady", function(sub) {
  var instance = Template.instance();
  
  if (instance.subscriptions)
    return instance.subscriptions[sub].ready();
  else
    return false;
});
