App.ItineraryListController = Ember.ObjectController.extend({
  controllerFoo: 'bar',
  editing: false,

  eventHappened: function (id) {
    console.log("ItineraryListController: event registered on activity " + id);
    App.Itinerary.find(2).set('modelFoo', 'barometer');
  },

  editToggle: function () {
    console.log('ItineraryListController: edit state changed to ' + !this.editing);
    this.set('editing', !this.editing);
  },

  down: function (activityID) {
    console.log('ItineraryListController: move ' + activityID + ' down');
    var activities =  this.get('model').get('activities');
    var index = -1;
    for (var i=0; i<activities.length; i++) {
      if (activities[i].id === activityID) {
        index = i;
        this.reorderArray(index, 1);
        break;
      }
    }
  },

  up: function (activityID) {
    console.log('ItineraryListController: move ' + activityID + ' up');
    var activities =  this.get('model').get('activities');
    for (var i=0; i<activities.length; i++) {
      if (activities[i].id === activityID) {
        index = i;
        this.reorderArray(index, -1);
        break;
      }
    }
  },

  reorderArray: function (itemIndex, direction) {
    console.log("ItineraryListController: executing reorder");
    var activities =  this.get('model').get('activities');

    var destination = itemIndex + direction;
    if (destination < 0 || destination > activities.length) {
      console.log("item cannot be moved to that slot");
    } else {
      console.log("moving item " + itemIndex + " to " + destination);
      var tmp = activities[destination];
      activities[destination] = activities[itemIndex];
      activities[itemIndex] = tmp;
      this.get('model').set('activities', activities);
    }
    App.Router.router.transitionTo('itinerary.map');
    App.Router.router.transitionTo('itinerary.list');
  },

  remove: function (activityID) {
    console.log('ItineraryListController: remove ' + activityID);
    var activities =  this.get('model').get('activities');

    for (var i=0; i<activities.length; i++) {
      if (activities[i].id === activityID) {
        index = i;
        activities.splice(index, 1);
        App.Router.router.transitionTo('itinerary.map');
        App.Router.router.transitionTo('itinerary.list');
        break;
      }
    }
  }
});