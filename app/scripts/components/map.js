App.initMap = function () {
  var myOptions = {
    center: new google.maps.LatLng(22.300, 114.168),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  App.map = new google.maps.Map($("#map-canvas")[0],
      myOptions);
  google.maps.event.addListener(App.map, 'click', function(event){
    App.mapController.handleClick(event);
  });
}

$(window).load( function() { App.initMap(); });