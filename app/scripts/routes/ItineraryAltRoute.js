App.ItineraryAltsRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionTo('itinerary.list');
  }
});