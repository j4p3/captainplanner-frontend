//  ROUTES

App.Router.map(function() {
  this.resource("itinerary", function(id) {
    this.resource("map");
    this.resource("list");
    this.resource("item", { path: "/:item_id"} );
  });
});

//  ROUTE HOOKS

App.ApplicationRoute = Ember.Route.extend({});

App.ItineraryRoute = Ember.Route.extend({});

App.ItemRoute = Ember.Route.extend({
  model: function (item_id) {
    console.log("seeking Item model");
    return App.day.items[item_id];
  }
});

App.MapRoute = Ember.Route.extend({});

App.ListRoute = Ember.Route.extend({
  model: function () {
    console.log("seeking Items model");
    return App.day.items;
  },

  events: {
    refresh: function(context) {
      console.log("refreshing list");
      this.transitionTo('list');
    }
  }
});