App.ItineraryMapRoute = Ember.Route.extend({
  model: function (itinerary_id) {
    console.log('ItineraryMapRoute: getting model');
    var itinerary_id = itinerary_id || 2;
    itinerary_id = 2; //  @TODO CHANGE WHEN MORE ITINS BECOME AVAILABLE

    if (!App.Itinerary.find(itinerary_id)) {
      return App.Itinerary.create(itinerary_id);
    } else {
      return App.Itinerary.find(itinerary_id);
    }
  },
  
  setupController: function (controller, model) {
    console.log('ItineraryMapRoute: setting up controller');
    controller.set('model', model);
  }
});