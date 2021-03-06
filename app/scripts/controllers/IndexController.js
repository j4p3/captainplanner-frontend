App.IndexController = Ember.ObjectController.extend({
  itineraries: [],
  loaded: false,

  wait: function () {
    App.set('ModalType', 'modal-wait');
    App.set('DisplayModal', true);

    if (App.Itinerary.find(2).loaded) {
      console.log('model loaded');
      App.set('DisplayModal', false);
      App.Router.router.transitionTo('itinerary.list');
    } else {
      console.log('model not loaded');
      var controller = this;
      setTimeout(function () {
        controller.wait();
      }, 500);
    }
  },

  submit: function () {
    console.log('IndexController: time to load that itinerary');
  },

  loadItineraries: function () {
    console.log('IndexController: loading set of Itineraries');
    var itineraries = [];
    var indexController = this;

    if (!this.loaded) {
      $.getJSON('http://captain-planner-dev.herokuapp.com/mvp/itinerary?city=hong+kong').then( function (response) {
        console.log('IndexController: Itineraries loaded from server');
        response.plans.forEach(function (itinerary) {
          itineraries.push(itinerary);
          });
        indexController.setProperties({ itineraries: itineraries, loaded: true});
        return indexController.get('itineraries');
      });
    } else {
      console.log('IndexController: Itineraries preloaded, returning');
      return indexController.get('itineraries');
    }
  }
});