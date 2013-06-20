App.ItineraryMapController = Ember.ObjectController.extend({
  mapSettings: null,
  rendered: false,
  tagName: 'div',
  classNames: ['big-map'],
  init: function () {
    this._super();

    console.log('ItineraryMapController: init');
  },

  getMapSettings: function () {
    console.log('ItineraryMapController getting map variables');

    //   MAP VARIABLES
    var mapSettings = {};

    mapSettings['markers'] = [];
    mapSettings['directionsService'] = new google.maps.DirectionsService();
    mapSettings['directionsDisplay'] = new google.maps.DirectionsRenderer();
    mapSettings['latLng'] = new google.maps.LatLng;
    mapSettings['myOptions'] = {
      center: new google.maps.LatLng(App.Itinerary.find(2).activities[0].place.lat, App.Itinerary.find(2).activities[0].place.lng),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

      return mapSettings;
  },

  getMapMarkers: function (settings) {
    //  CREATE MAP MARKERS FOR CURRENT ITINERARY, RETURN AS OBJECT ARRAY
    console.log('ItineraryMapController: getting map markers');

    App.Itinerary.find(2).activities.forEach( function (item) {
      latLng = new google.maps.LatLng(item.place.lat, item.place.lng)
      var marker = new google.maps.Marker({
        position: latLng
      });
      settings.markers.push(marker);
    });
    return settings;
  },

  setMap: function () {
    //  BEGIN & END HERE - THIS IS THE CONTROL FLOW FUNCTION
    console.log('ItineraryMapController: setting map');
    console.log("in setmap, the target element is ");
    console.dir(this.element);

    var settings = this.getMapSettings();
    var markers = this.getMapMarkers(settings);

    //  SET MAP & POINTS
    if (this.rendered) {
      var map = new google.maps.Map(this.element,
        settings['myOptions']);
      settings['directionsDisplay'].setMap(map);
    }
  },

  getRoute: function () {

  }
});