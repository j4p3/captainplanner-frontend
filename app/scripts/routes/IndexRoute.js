App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    console.log('IndexRoute: setting up Controller');
    controller.set('model', controller.loadItineraries());
  }
});