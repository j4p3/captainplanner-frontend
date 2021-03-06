App.Itinerary = Ember.Object.extend({
//  SET INSTANCE METHODS & PROPERTIES

  //  @todo INITIALIZE THESE WITH INSTANCE VALUES
  loaded: false,
  activities: null,

  init: function () {
    console.log('Itinerary: initializing');
    this._super();
    this.id = this.id || 2;
    console.log('id ' + this.id);

    //  CHECK IF THIS ITINERARY ALREADY LOADED
    if (!App.Itinerary.find(this.id)) {
      //  NOT YET LOADED
      this.load(this.id);
    } else {
      console.log('Itinerary: object at ' + this.id + ' already exists');
    }
  },

  load: function (itineraryID) {
    //  POPULATE A NEW ITINERARY
    var itineraryID = itineraryID || 2;
    var itinerary = this;
    var activities = [];
    itineraryID = 2;  //  @ TODO ELIMINATE FOR MULTI ITINERARIES
    console.log('Itinerary: loading new itinerary at ' + itineraryID);

    $.getJSON('http://captain-planner-dev.herokuapp.com/mvp/itinerary/2/1').then( function (response) {
      console.log('Itinerary: Activities loaded from server');
      response.activities.forEach(function (item) {
        var activity = App.Activity.create(item)
        console.log('Itinerary: creating activity: ');
        console.dir(activity);
        activities.push(activity);
        });

      //  SET ITINERARY'S PROPERTIES
      itinerary.setProperties({ id: itineraryID, activities: activities });

      //  STORE FOR find()
      App.Itinerary.store[itinerary.get('id')] = itinerary;
      itinerary.set('loaded', true);
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