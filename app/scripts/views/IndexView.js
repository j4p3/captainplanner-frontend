App.IndexView = Ember.View.extend({

  itineraryButton: Ember.View.extend({
    tagName: 'button',

    click: function () {
      console.log('IndexView: itineraryButton clicked');
      var id = this.templateData.keywords.itinerary.id;
      var id = 2; //  TEMPORARY HARDCODE SOLUTION

      if (!App.Itinerary.find(id)) {
        console.log('IndexView: that itinerary does not exist. Creating.');
        App.Itinerary.create(id);
        this.get('controller').send('waitOn', id);
      } else {
        console.log('IndexView: that itinerary exists or has finished loading');
        App.Router.router.transitionTo('itinerary.list');
      }
    }
  })
});