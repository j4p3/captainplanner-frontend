App.ItineraryView = Ember.View.extend({
    didInsertElement: function () {
    console.log("DIDINSERT: ITINERARY");
  },
  itineraryTabs: Ember.View.extend({
      didInsertElement: function () {
    console.log("DIDINSERT: ITINERARYTABS");
  },
    templateName: 'itinerary/_itineraryTabs',
    classNames: ['nav', 'nav-tabs'],
    tagName: 'ul'
  })

});