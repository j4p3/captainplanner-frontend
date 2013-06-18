App.ItineraryRoute = Ember.Route.extend({
  model: function () {
    console.log('ItineraryRoute: getting model');
    return App.Itinerary.find(2);
  },
  setupController: function(controller, itinerary) {
    controller.set('model', itinerary);
  }
});