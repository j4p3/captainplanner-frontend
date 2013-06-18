App.ItineraryListController = Ember.ObjectController.extend(Ember.Evented, {
  editing: false,

  editToggle: function () {
    //  MANAGE EDITING/NON-EDITING STATE
    console.log('ItineraryListController: edit state changed to ' + !this.editing);
    this.set('editing', !this.editing);
  },

  remove: function (activityID) {
    //  REMOVE VIEW'S ACTIVITY ITEM FROM ITINERARY MODEL
    console.log('ItineraryListController: remove ' + activityID);
    var activities =  this.get('model').get('activities');
    activities.splice(this.getIndex(activityID), 1);
    this.refresh();
  },

  down: function (activityID) {
    //  MOVE VIEW'S ACTIVITY ITEM DOWN IN ITINERARY MODEL ARRAY
    console.log('ItineraryListController: move ' + activityID + ' down');
    this.reorderArray(this.getIndex(activityID), 1);
  },

  up: function (activityID) {
    //  MOVE VIEW'S ACTIVITY ITEM UP IN ITINERARY MODEL ARRAY
    console.log('ItineraryListController: move ' + activityID + ' up');
    this.reorderArray(this.getIndex(activityID), -1);
  },

  getIndex: function (activityID) {
    //  GENERIC INDEX FINDER FOR ACTIVITIES IN ITINERARY MODEL'S ARRAY
    var activities =  this.get('model').get('activities');
    var index = -1; //  DEFAULTS TO FALSY IF NOT FOUND

    for (var i=0; i<activities.length; i++) {
      if (activities[i].id === activityID) {
        index = i;
        break;
      }
    }
    return index;
  },

  reorderArray: function (itemIndex, direction) {
    //  GENERIC ARRAY-REORDERING FUNCTION
    console.log("ItineraryListController: executing reorder");
    var activities =  this.get('model').get('activities');
    var destination = itemIndex + direction;

    if (destination < 0 || destination >= activities.length) {
      //  IN BOUNDARY CONDITIONS
      console.log('ItineraryListController: item cannot be moved to that slot, triggering reorderFailure');
      this.trigger('reorderFailure');

    } else {
      //  IN ACCEPTABLE CONDITIONS
      console.log("ItineraryListController: moving item " + itemIndex + " to " + destination);
      var originItem = activities[itemIndex];
      var destinationItem = activities[destination];

      //  REORDER METHOD BASED ON day_section OF ACTIVITIES BEING MOVED
      if (originItem.day_section.id === destinationItem.day_section.id) {
        //  SAME DAY SECTION -> SWAP ACTIVITIES
        console.log('same day section shift');
        activities[destination] = activities[itemIndex];
        activities[itemIndex] = destinationItem;

      } else if (destinationItem.day_section.id === 2 || destinationItem.day_section.id === 4) {
        //  MOVING ACROSS MEAL TIME -> SWAP ACTIVITIES AND CHANGE ORIGIN day_section
        console.log('cross mealtime shift');
        var i = destination;
        var mealID = destinationItem.day_section.id;

        while (activities[i] && activities[i].day_section.id === mealID) {
          //  ITERATE THROUGH ARRAY PAST MEAL(S)
          i += direction;
        }

        if (i < 0) {
          //  MOVING ACTIVITY PAST MEAL TO START OF ARRAY
          activities[itemIndex].day_section = { id: 1, name: "Morning" };
          activities.unshift(activities.splice(itemIndex, 1)[0]);

        } else if (i > activities.length - 1) {
          //  MOVING ACTIVITY PAST MEAL TO END OF ARRAY
          activities[itemIndex].day_section = { id: 5, name: "Evening" };
          activities.push(activities.splice(itemIndex, 1)[0]);

        } else {
          //  ANY OTHER POSITION
          //  ACTIVITY WILL BE REMOVED FROM ARRAY - MUST ADJUST DESTINATION INDEX
          var destinationIndex = i - direction;
          activities[itemIndex].day_section = activities[i].day_section;
          activities.splice(destinationIndex, 0, activities.splice(itemIndex, 1)[0]);
        }

      } else {
        //  MOVING ACROSS NON MEAL TIME, DIFFERENT DAY SECTIONS -> CHANGE ORIGIN day_section
        console.log('cross day_section shift, non meal');
        originItem.day_section = destinationItem.day_section;
        activities[itemIndex] = originItem;
      }

      this.get('model').set('activities', activities);
      this.refresh();
    }
  },

  refresh: function () {
    //  GENERIC VIEW-REFRESHING TEMP HACK DUE TO NEW EMBER ROUTER
    App.Router.router.transitionTo('itinerary.map');
    App.Router.router.transitionTo('itinerary.list');
  }
});