App.PlaceController = Ember.ObjectController.extend({
  mapSettings: {},
  loaded: false,

  init: function () {
    console.log('PlaceController: initialized');
    this.mapConfig();
  },

  mapConfig: function () {
    console.log('PlaceController: mapConfig polling for model load');

    if (this.get('model.loaded')) {
      console.log('PlaceController: mapConfig configuring map settings');
      console.dir(this.get('model.loaded'));
      this.getMapSettings();
      this.set('loaded', true);
    } else {
      console.dir(this.get('model'));
      var controller = this;
      setTimeout(function () {
        controller.mapConfig();
      }, 500);
    }
  },

  getMapSettings: function () {
    console.log('PlaceController: getting map variables');
    console.dir(this.get('model'));

    var latitude = this.get('model.lat');
    var longitude = this.get('model.lng');
    var latLng = new google.maps.LatLng(latitude, longitude)

    this.mapSettings.marker = new google.maps.Marker({
        position: latLng,
        title: this.get('model.name'),
      }),
    this.mapSettings.directionsService = new google.maps.DirectionsService();
    this.mapSettings.directionsDisplay = new google.maps.DirectionsRenderer();
    this.mapSettings.myOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    console.dir(this.get('mapSettings'));
  },
});