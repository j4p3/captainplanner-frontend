App.PlaceRoute = Ember.Route.extend({
  model: function (place_id) {
    console.log('PlaceRoute: getting model');
    // debugger;
    console.log(place_id);
    return App.Place.find(place_id);
  },
  setupController: function(controller, model) {
    console.log('PlaceRoute: setting up controller');
    controller.set('model', model);
  }
});