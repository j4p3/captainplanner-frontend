App.PlaceView = Ember.View.extend({
  didInsertElement: function () {
    console.log('PlaceView: inserted');
    console.dir(this.get('controller'));
  },

  infoView: Ember.View.extend({
    templateName: 'place/info',
    classNames: ['info']
  }),

  reviewView: Ember.View.extend({
    templateName: 'place/reviews',
    classNames: ['reviews']
  }),

  littleMapView: Ember.View.extend({
    templateName: 'place/little-map',
    classNames: 'little-map',

    didInsertElement: function () {
      console.log('littleMapView: inserted map element');
      console.dir(this);
      console.dir(this.get('parentView').get('model'));
      this.waitForController();
    },

    waitForController: function (toExecute) {
      //  POSTPONE SETMAP UNTIL THE CONTROLLER IS LOADED
      console.log('PlaceView: waiting for Controller to load');
      var view = this;

      if (view.get('controller.loaded')) {
        console.log('PlaceView: Controller loaded');
        view.setMap();
      } else {
        setTimeout(function () {
          view.waitForController();
        }, 500);
      }
    },

    setMap: function () {
      console.log('littleMapView: setting map with settings');
      console.dir(this.get('parentView').get('controller.mapSettings'));
      var mapSettings = this.get('parentView').get('controller.mapSettings');

      var map = new google.maps.Map(
        this.get('element'),
        mapSettings.myOptions
      );
      mapSettings.directionsDisplay.setMap(map);
      mapSettings.marker.setMap(map);
    }
  })
});