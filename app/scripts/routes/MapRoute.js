App.MapRoute = Ember.Route.extend({
  model: function () {
    console.log('MapRoute getting model');
    console.dir(App.Itinerary.find(2));
    return App.Itinerary.find(2);
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  }
});