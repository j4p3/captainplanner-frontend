App.ItineraryListView = Ember.View.extend({
  //  GENERAL LIST PROPERTIES & ACTIONS

  itemView: Ember.View.extend({
    //  ITEM-SPECIFIC PROPERTIES. REPRESENT INDIVIDUAL ARRAY ELEMENTS OF ItineraryModel
    tagName: 'div',
    templateName: 'itinerary/_itineraryItem',
    animating: false,
    classNameBindings: ['animating:animated', 'animating:shake'],

    id: function () {
      return this.templateData.keywords.activity.id;
    }.property('id'),

    section: function () {
      return this.templateData.keywords.activity.day_section.id;
    }.property('section'),

    isRestaurant: function () {
      if (this.templateData.keywords.activity.place.place_category.id === 2) {
        return true;
      } else {
        return false;
      }
    }.property('isRestaurant'),

    click: function () {
      console.dir(this.get('controller').get('model'));
    },

    didInsertElement: function () {
    console.log("DIDINSERT: ITEM");
  },

    isSectionStart: function () {
      //  IS THIS THE FIRST ITEM OF ITS day_section IN THE ARRAY?
      var thisSection = this.get('section');
      var activities = this.get('controller').get('activities');
      var thisIndex = -1;
      var firstInstance = -1;

      //  CHECK INDEX OF FIRST ACTIVITY WITH THIS ITEM'S DAY SECTION
      for (var i=0; i<activities.length; i++) {
        if (activities[i].day_section.id === thisSection) {
          firstInstance = i;
          break;
        }
      }
      //  CHECK INDEX OF THIS ACTIVITY
      for (var r=0; r<activities.length; r++) {
        if (activities[r].id === this.get('id')) {
          thisIndex = r;
          break;
        }
      }

      //  COMPARE INDECES TO DETERMINE WHETHER THIS ITEM IS FIRST
      if (thisIndex === firstInstance) {
        return true;
      } else {
        return false;
      }
    }.property('isSectionStart'),

    sectionClass: function () {
      //  RETURNS CSS CLASS TO BE APPENDED TO PLACE
      if (this.get('isSectionStart')) {
        switch (this.get('section')) {
          case 1:
            return 'morning';
            break;
          case 2:
            return 'lunch';
            break;
          case 3:
            return 'afternoon';
            break;
          case 4:
            return 'dinner';
            break;
          case 5:
            return 'evening';
            break;
        }
      } else {
        return null;
      }
    }.property('sectionClass'),

    //  ITEM-SPECIFIC ACTIONS
    didInsertElement: function () {
      var view = this;
      this.get('controller').on('reorderFailure', function () {
        view.shake();
      });
    },

    shake: function () {
    //  GENERIC ANIMATING FUNCTION
      var view = this;
      view.set('animating', true);
      setTimeout(function () {
        view.set('animating', false);
      }, 500);
    },

    editToggle: Ember.View.extend({
      //  TURN EDIT MODE ON OR OFF
      tagName: 'button',
      classNames: ['editToggle'],
      click: function () {
        console.log('ItineraryListView: reorder requested in View');
        this.get('controller').send('editToggle');
        return false;
      }
    }),

    remove: Ember.View.extend({
      //  REMOVE ACTIVITY FROM ITINERARY
      tagName: 'button',
      classNames: ['remove'],

      click: function () {
        var targetActivity = this.get('parentView').templateData.keywords.activity.id;
        console.log('ItineraryListView: remove '+ targetActivity);
        this.get('controller').send('remove', targetActivity);
        //  PREVENT EVENT FROM BUBBLING UP TO PARENT VIEWS
        return false;
      }
    }),

    //  CHILD VIEWS
    editControls: Ember.View.extend({
      //  DURING EDIT MODE, DEFINE/LISTEN FOR THESE VIEWS/EVENTS
      templateName: 'itinerary/_editControls',

      //  CHILD VIEWS
      editToggle: Ember.View.extend({
        //  TURN EDIT MODE ON OR OFF
        tagName: 'button',
        classNames: ['editToggle'],
        click: function () {
          console.log('ItineraryListView: reorder requested in View');
          this.get('controller').send('editToggle');
          return false;
        }
      }),

      up: Ember.View.extend({
        //  MOVE ACTIVITY UP IN ITINERARY
        tagName: 'span',
        classNames: ['arrow', 'up'],

        click: function () {
          var targetActivity = this.get('parentView').templateData.keywords.activity.id;
          console.log('ItineraryListView: move '+ targetActivity + ' up');
          this.get('controller').send('up', targetActivity)

          return false; //  PREVENT EVENT FROM BUBBLING UP TO PARENT VIEWS
        }
      }),

      down: Ember.View.extend({
        //  MOVE ACTIVITY DOWN IN ITINERARY
        tagName: 'span',
        classNames: ['arrow', 'down'],

        click: function () {
          var targetActivity = this.get('parentView').templateData.keywords.activity.id;
          console.log('ItineraryListView: move '+ targetActivity + ' down');
          this.get('controller').send('down', targetActivity)

          return false; //  PREVENT EVENT FROM BUBBLING UP TO PARENT VIEWS
        }
      })
    })
  })
});