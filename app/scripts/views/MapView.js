App.MapView = Ember.View.extend({
  foo: 'bar',
  map: null,
  didInsertElement: function () {
    this._super();
    console.log('Map element rendered, our element is ');
    console.dir(this);

    this.setMap();
    //  @todo DON'T RESET MAP ON LOAD
  },

  getMapSettings: function () {
    console.log('MapController getting map variables');

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
    console.log('MapController getting map markers');

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
    console.log('MapController setting map');
    console.log("in setmap, the target element is ");
    console.dir(this.element);

    var settings = this.getMapSettings();
    var markers = this.getMapMarkers(settings);

    //  SET MAP & POINTS
    var map = new google.maps.Map(this.element,
        settings['myOptions']);
    settings['directionsDisplay'].setMap(map);
  },

  getRoute: function () {

  }
});