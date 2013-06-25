App.ItineraryMapController = Ember.ObjectController.extend({
  mapSettings: {},
  loaded: false,
  
  init: function () {
    this._super();
    console.log('ItineraryMapController: initializing');
    this.mapConfig();
  },

  getMapSettings: function () {
    console.log('ItineraryMapController: getting map variables');

    this.mapSettings.markers = [];
    this.mapSettings.directionsService = new google.maps.DirectionsService();
    this.mapSettings.directionsDisplay = new google.maps.DirectionsRenderer();
    this.mapSettings.myOptions = {
      center: new google.maps.LatLng(
        this.get('model').activities[0].place.lat,
        this.get('model').activities[0].place.lng),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    console.dir(this.get('mapSettings'));
  },

  getMapMarkers: function () {
    //  CREATE MAP MARKERS FOR CURRENT ITINERARY, RETURN AS OBJECT ARRAY
    console.log('ItineraryMapController: getting map markers');
    var mapSettings = this.get('mapSettings');
    var controller = this;
    var i = 0;

    this.get('model').activities.forEach( function (item) {
      i+=1;
      var image = '../../markers/'+i+'.png';
      latLng = new google.maps.LatLng(item.place.lat, item.place.lng);

      var marker = new google.maps.Marker({
        position: latLng,
        icon: image,
        title: item.place.name,
        id: item.place.id
      });
      mapSettings.markers.push(marker);
    });

    this.set('mapSettings', mapSettings);
    console.dir(this.get('mapSettings.markers'));
  },

  mapConfig: function () {
    //  SETUP MAP (TRIGGERED ONCE, WAIT UNTIL MODEL LOAD)
    console.log('ItineraryMapController: mapConfig polling for model load');

    if (this.get('model.loaded')) {
      console.log('ItineraryMapController: mapConfig configuring map settings');
      console.dir(this.get('model.loaded'));
      this.getMapSettings();
      this.getMapMarkers();
      this.set('loaded', true);
    } else {
      console.dir(this.get('model'));
      var controller = this;
      setTimeout(function () {
        controller.mapConfig();
      }, 500);
    }
    
  },

  getRoute: function () {

  }
});