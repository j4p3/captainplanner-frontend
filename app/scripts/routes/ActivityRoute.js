App.ActivityRoute = Ember.Route.extend({
  model: function (params) {
    console.log('ActivityRoute getting model');
    console.dir(App.Activity.find(31));
    return App.Activity.find(31);
  }
});