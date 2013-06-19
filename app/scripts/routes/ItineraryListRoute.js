App.ItineraryListRoute = Ember.Route.extend({
  model: function (itinerary_id) {
    console.log('ItineraryListRoute: getting model');
    var itinerary_id = itinerary_id || 2;
    itinerary_id = 2;

    if (!App.Itinerary.find(itinerary_id)) {
      return App.Itinerary.create(itinerary_id);
    } else {
      return App.Itinerary.find(itinerary_id);
    }
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  }
});