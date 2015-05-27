Router.setTemplateNameConverter(function (str) { return str; });

Router.onAfterAction(function() {
  $(window).scrollTop(0);
});

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});

Router.route("index", {
  path: "/"
});
