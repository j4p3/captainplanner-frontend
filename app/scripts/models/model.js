//  DATA MODELS

App.Itinerary = Ember.Object.extend({
  //  a day's itinerary, has 'items' array pointing to itinerary Item objects.
  init: function () {
    //  set the itinerary's items array and loading state
    console.log('Initializing new itinerary');
    items = Em.A();
    this.setProperties({ items: items, loaded: false });
  },

  load: function () {
    console.log('Loading itinerary');
    var itinerary = this;
    //  get data from server (assumed to be array of itinerary Item objects)
    $.getJSON('http://captain-planner-dev.herokuapp.com/mvp/itinerary/2/1').then( function (response) {
          response.forEach(function (item) {
            //  store each item as a member of the itinerary's items property
            itinerary.items.push(App.Item.create(item));
          });
        console.log('model loaded');
        itinerary.setProperties({ loaded: true });
        });
  },

  shiftUp: function (idToChange) {
    console.log("shiftUp executing foo on id "  + idToChange);
    var index = -1;
    for (var i=0; i<items.length; i++) {
      if (items[i].id === idToChange) {
        index = i;
        this.reorderArray(index, -1);
        break;
      }
    }
  },

  shiftDown: function (idToChange) {
    console.log("shiftDown executing foo on id "  + idToChange);
    var index = -1;
    for (var i=0; i<items.length; i++) {
      if (items[i].id === idToChange) {
        index = i;
        this.reorderArray(index, 1);
        break;
      }
    }
  },

  reorderArray: function (itemIndex, direction) {
    console.log("reordering items array");
    var destination = itemIndex + direction;
    if (destination < 0 || destination > items.length) {
      console.log("item cannot be moved to that slot");
    } else {
      console.log("moving item " + itemIndex + " to " + destination);
      var tmp = items[destination];
      items[destination] = items[itemIndex];
      items[itemIndex] = tmp;
    }
    App.Router.router.transitionTo('map');
    App.Router.router.transitionTo('list');
  },

  submit: function () {
    console.log("delivering itinerary to backend");
    $.post({
    url: "http://captain-planner-dev.herokuapp.com/mvp/email",
    data: JSON.stringify({
      email: App.EmailView.email,
      itinerary: {
        days: {
          activities: [
            {
              place_id: App.day.items[0].place_id,
              day_section_id: 1
            },
            {
              place_id: App.day.items[1].place_id,
              day_section_id: 2
            },
            {
              place_id: App.day.items[2].place_id,
              day_section_id: 3
            },
            {
              place_id: App.day.items[3].place_id,
              day_section_id: 3
            },
            {
              place_id: App.day.items[4].place_id,
              day_section_id: 4
            },
            {
              place_id: App.day.items[5].place_id,
              day_section_id: 5
            }
          ]
        }
      }
    }),
    dataType: "json"
  });
  },
  constructPost: function () {
    
    console.log("requesting " + requestData)
    return requestData;
  }
});

App.Item = Ember.Object.extend({
  //  an individual item on an itinerary, has a day_section and place object
  init: function () {
    console.log('Initializing new item with properties:');
    console.dir(this);
    // App.mapController.pushItem(this);
  }
});
