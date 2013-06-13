App.ItineraryRoute = Ember.Route.extend({
  model: function () {
    console.log('ItineraryRoute getting model');
    console.dir(App.Itinerary.find(1));
    return App.Itinerary.find(1);
  }
});