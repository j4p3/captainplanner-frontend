App.mapController = Em.Object.create({
	markersForMapBinding: "App.markers.content",
	markersDisplayed: [],
	handleClick: function (x) {
		this.markersForMap.pushObject( App.Marker.create({latLng: x.latLng}) );
	},
	pushItem: function (item) {
		this.markersForMap.pushObject( App.Marker.create({lat: item.place.lat, lng: item.place.lng}))
	},
	markersForMapDidChange: function () {
		var that = this;
		$.each(this.markersDisplayed, function (i, m) {m.setMap(null);});
		$.each(this.markersForMap, function  (i, ll) {
			var marker = new google.maps.Marker({
				position: ll.get('latLng')
			});
			ll.marker = marker;
			google.maps.event.addListener(marker, 'click', function() {
				ll.markerClick();
			});
			that.markersDisplayed.pushObject(marker);
			marker.setMap(App.map);
			ll.markerClick();
		});
	}.observes('markersForMap.@each')
});