App.ItineraryMapView = Ember.View.extend({
  mapView: Ember.View.extend({
    classNames: ['big-map'],

    didInsertElement: function () {
      console.log('ItineraryMapView: Map element rendered');
      console.log("DIDINSERT: MAP");
      this.waitForController();
    },

    waitForController: function (toExecute) {
      //  POSTPONE SETMAP UNTIL THE CONTROLLER IS LOADED
      console.log('ItineraryMapView: waiting for Controller to load');
      var view = this;

      if (view.get('controller.loaded')) {
        console.log('ItineraryMapView: Controller loaded');
        view.setMap();
      } else {
        setTimeout(function () {
          view.waitForController();
        }, 500);
      }
    },

    setMap: function () {
      //  RENDER MAP (TRIGGERED ON EVERY NAVIGATION TO MAP)
      console.log('ItineraryMapView: setting map');
      var mapSettings = this.get('controller.mapSettings');
      console.log(this.get('element'));

      //  SET MAP & POINTS
      var map = new google.maps.Map(
        this.get('element'),
        mapSettings.myOptions
      );
      mapSettings.directionsDisplay.setMap(map);

      //  SET PINS
      mapSettings.markers.forEach(function (marker) {
        marker.setMap(map);
      })
    }
  })
});