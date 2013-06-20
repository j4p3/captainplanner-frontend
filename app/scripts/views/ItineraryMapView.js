App.ItineraryMapView = Ember.View.extend({
  viewData: 'vfoo',
  init: function () {
    this._super();
    console.log('ItineraryMapView: init');
    // console.dir(this.get('controller')); //  THIS IS WHERE INIT SHOULD TAKE PLACE
  },
  didInsertElement: function () {
    console.log('ItineraryMapView: Map element rendered');
    this.get('controller').send('setMap');
  },
});