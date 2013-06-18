App.ItineraryListRoute = Ember.Route.extend({
  model: function () {
    console.log('ItineraryListRoute: getting model');
    return App.Itinerary.find(2);
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  }
});