App.ItineraryListController = Ember.ObjectController.extend({
  submitting: false,
  submit: function () {
    var activities = this.get('model').get('activities');
    
  }
});