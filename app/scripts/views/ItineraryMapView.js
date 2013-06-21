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
      var view = this;
      var path = [];
      console.log(this.get('element'));

      //  SET MAP & POINTS
      var map = new google.maps.Map(
        this.get('element'),
        mapSettings.myOptions
      );
      mapSettings.directionsDisplay.setMap(map);

      //  SET WINDOW
      var infoWindow = new google.maps.InfoWindow({
        content: null
      });

      //  SET PINS
      mapSettings.markers.forEach(function (marker) {
        marker.setMap(map);
        path.push(marker.position);
        view.listen(map, marker, infoWindow);
      });

      console.dir(path);
      //  SET POLYLINE
      var lineTrace = new google.maps.Polyline({
        path: path,
      });
      lineTrace.setMap(map);
    },

    listen: function (map, marker, infoWindow) {
      //  HANDLE DOM INTERACTION ON MAP

      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map,marker);
        infoWindow.setContent(marker.title);
        //  POTENTIAL FOR EMBER.HANDLEBARS.COMPILE(TEMPLATE), IF DATA IS ACCESSIBLE FROM THERE
      });
    },

    infoWindowView: Ember.View.extend({
      templateName: 'infoWindow',
      classNames: ['info-window']
    })
  })
});