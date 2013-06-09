App.initMap = function () {
  //  DECLARE VARIABLES
  console.log("initializing map");
  var points = [];
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  $("#map-canvas").css('height', '350px');
  $("#map-canvas").css('width', '800px');


  //  MAP OPTIONS
  var myOptions = {
    center: new google.maps.LatLng(App.day.items[0].place.lat, App.day.items[0].place.lng),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //  SET MAP & POINTS
  App.map = new google.maps.Map($("#map-canvas")[0],
      myOptions);
  directionsDisplay.setMap(App.map);
  var latLng = new google.maps.LatLng;

  App.day.items.forEach( function (item) {
    console.log("setting map marker");
    latLng = new google.maps.LatLng(item.place.lat, item.place.lng)
    console.log(latLng);
    var marker = new google.maps.Marker({
      position: latLng
    });
    marker.setMap(App.map);
    points.push(latLng);
  });

  function getRoute () {
    //  SETUP REQUEST VARS
    console.log("getting route, initial point should be " + points[0]);
    var start = new google.maps.LatLng;
    var end = new google.maps.LatLng;
    start = points[0];
    console.log("getting route, initial point is " + start);
    end = points[points.length-1];
    var wypts = [];
    for (var i=0; i<points.length; i++) {
      wypts.push({
        location: points[i],
        stopover: true
      });
    }

    //  COMPILE REQUEST VARIABLES
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
      waypoints: wypts,
      optimizeWaypoints: false
    }

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  getRoute();
}