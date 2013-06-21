App.ActivityRoute = Ember.Route.extend({
  redirect: function (params) {
    console.log('ActivityRoute: REDIRECTING to');
    console.dir(params.place);
    // var place = App.Place.find(params.place.id);
    // place.one('didLoad', this, function () {
    //     this.transitionTo('places.place', place);
    // });
    this.transitionTo('places.place', params.place);
  }
});