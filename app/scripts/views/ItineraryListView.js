App.ItineraryListView = Ember.View.extend({
  viewFoo: 'bar',
  tagName: 'span',

  itemView: Ember.View.extend({
    itemFoo: 'bar',
    baz: true,
    tagName: 'div',
    templateName: '_itineraryItem',

    id: function () {
      return this.templateData.keywords.activity.id;
    }.property('id'),

    isRestaurant: function () {
      if (this.templateData.keywords.activity.place.place_category.id === 1) {
        return true;
      } else {
        return false;
      }
    }.property('isRestaurant'),

    editToggle: Ember.View.extend({
      templateName: '_editButton',
      click: function () {
        console.log('ItineraryListView: reorder requested in View');
        this.get('controller').send('editToggle');
        return false;
      }
    }),

    editControls: Ember.View.extend({
      templateName: '_editControls',
      click: function () {
        console.log('something clicked in editcontrols');
        console.dir(this.get('id'));
        console.dir(this.get('element'));
      },

      up: Ember.View.extend({
        templateName: '_up',
        click: function () {
          var targetActivity = this.get('parentView').templateData.keywords.activity.id;
          console.log('ItineraryListView: move '+ targetActivity + ' up');
          this.get('controller').send('up', targetActivity);
          return false;
        }
      }),
      down: Ember.View.extend({
        templateName: '_down',
        click: function () {
          var targetActivity = this.get('parentView').templateData.keywords.activity.id;
          console.log('ItineraryListView: move '+ targetActivity + ' down');
          this.get('controller').send('down', targetActivity);
          return false;
        }
      }),
      remove: Ember.View.extend({
        templateName: '_remove',
        click: function () {
          var targetActivity = this.get('parentView').templateData.keywords.activity.id;
          console.log('ItineraryListView: remove '+ targetActivity);
          this.get('controller').send('remove', targetActivity);
          return false;
        }
      }),
    }),
  })
});