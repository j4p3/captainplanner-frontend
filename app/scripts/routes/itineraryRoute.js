App.ItineraryRoute = Ember.Route.extend({
  model: function (itinerary_id) {
    itinerary_id = itinerary_id || 2;
    itinerary_id = 2; //  BAD!
    console.log('ItineraryRoute: getting model');
    return App.Itinerary.find(itinerary_id);
  },
  setupController: function(controller, itinerary) {
    controller.set('model', itinerary);
  }
});