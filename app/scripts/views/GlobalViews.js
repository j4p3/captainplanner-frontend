App.submitting = null;

App.EmailButtonView = Ember.View.extend({
  classNames: ['email'],
  tagName: 'button',
  click: function () {
    console.log('emailButton clicked');
    App.set('submitting', true);
  }
});

App.EmailModalView = Ember.View.extend({
  templateName: 'submitForm',
  classNames: ['modal', 'email-widget'],
  email: null,
  submitted: false,

  emailSubmitButtonView: Ember.View.extend({
    tagName: 'button',
    classNames: ['email', 'small'],
    click: function () {
      console.log('GlobalViews (email submission): submitting email');
      var view = this;
      App.submit(this.get('parentView').get('email'));
      this.get('parentView').set('email', '');
      this.get('parentView').set('submitted', true);
      setTimeout(function () {
        App.set('submitting', false);
        view.get('parentView').set('submitted', false);
      }, 2000);
      return false;
    }
  }),

  closeSubmission: Ember.View.extend({
    tagName: 'span',
    classNames: ['close'],
    click: function () {
      App.set('submitting', false);
    }
  })
});

App.LoaderWidgetView = Ember.View.extend({
  templateName: '_loaderWidget',
  classNames: ['loader', 'widget']
});

App.LoaderModalView = Ember.View.extend({
  templateName: '_loaderWidget',
  classNames: ['loader', 'modal']
});

App.submit = function (email) {
    console.log("delivering itinerary to backend");
    $.post({
    url: "http://captain-planner-dev.herokuapp.com/mvp/email",
    data: JSON.stringify({
      email: email,
      itinerary: {
        days: {
          activities: [
            {
              place_id: App.Itinerary.find(2).activities[0].place.id,
              day_section_id: App.Itinerary.find(2).activities[0].day_section.id
            },
            {
              place_id: App.Itinerary.find(2).activities[1].place.id,
              day_section_id: App.Itinerary.find(2).activities[1].day_section.id
            },
            {
              place_id: App.Itinerary.find(2).activities[2].place.id,
              day_section_id: App.Itinerary.find(2).activities[2].day_section.id
            },
            {
              place_id: App.Itinerary.find(2).activities[3].place.id,
              day_section_id: App.Itinerary.find(2).activities[3].day_section.id
            },
            {
              place_id: App.Itinerary.find(2).activities[4].place.id,
              day_section_id: App.Itinerary.find(2).activities[4].day_section.id
            },
            {
              place_id: App.Itinerary.find(2).activities[5].place.id,
              day_section_id: App.Itinerary.find(2).activities[5].day_section.id
            },
          ]
        }
      }
    }),
    success: App.success,
    dataType: "json"
  });
}

App.success = function () {
  //  do nothing
  console.log('success');
}

