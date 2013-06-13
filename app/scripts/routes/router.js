App.Router.map(function () {
	this.resource('itinerary', function() {
    this.route('list');
    this.route('map');
  });
  this.route('activity');
});