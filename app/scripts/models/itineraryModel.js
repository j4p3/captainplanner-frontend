App.Itinerary = Ember.Object.extend({
//  SET INSTANCE METHODS & PROPERTIES
//  note - itinerary creation assumes an array of activities

  // activities: null,  // POINTS TO ACTIVITIES MODEL
  // id: null,            // MATCHES ITINERARY API URI
  //  @todo INITIALIZE THESE WITH INSTANCE VALUES

  init: function () {
    this._super();
    console.log("new Itinerary initialized with first item " + this.activities[0].place.name); console.dir(this.activities);

    //  STORE FOR find()
    this.set('id', 2);  //  @todo SET DYNAMICALLY
    App.Itinerary.store[this.get('id')] = this;

    //  CREATE ACTIVITIES OBJECTS
    this.activities.forEach(function (activity) {
      App.Activity.create(activity);
    });
  }
});

App.Itinerary.reopenClass({
//  SET CLASS METHODS & PROPERTIES

  store: {}, //  LOOKUP INDEX

  //  RETURN A SPECIFIC ITIN, ALL ITINS, OR FALSE IF NO ITIN EXISTS
  find: function (id) {
    console.log("App.Itinerary finding id " + id);

    if (this.store[id]) {
      return this.store[id];
    } else if (id) {
      return false;
    } else {
      return this.store;
    }
    return this.store[id];
  }
});