App.PlacesRoute = Ember.Route.extend({
  model: function (place_id) {
    console.log('PlacesRoute: getting model');
    // debugger;
    console.dir(place_id);
    return App.Place.find(place_id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});