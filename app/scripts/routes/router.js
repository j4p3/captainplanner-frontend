App.Router.map(function () {
	this.resource('itinerary', function () {
    this.route('list');
    this.route('map');
    this.route('alts');
  });
  this.route('activity', { path: 'activity/:activity_id'});
  this.route('place', { path: 'place/:place_id'});
});