App.ItineraryView = Ember.View.extend({
  itineraryTabs: Ember.View.extend({
    templateName: 'itinerary/_itineraryTabs',
    classNames: ['nav', 'nav-tabs'],
    tagName: 'ul'
  })

});