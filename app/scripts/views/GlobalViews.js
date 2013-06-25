//  GENERIC, GLOBAL SCOPE COMPONENTS & VARS

App.DisplayModal = false;
App.ModalType = 'modal-wait';

App.Modal = Ember.View.extend({
  //  GENERIC APP-WIDE MODAL
  //  TO CREATE A MODAL, DEFINE A NEW PROPERTY WITH ITS CONTENT, SET ITS NAME AS THE MODAL STATE
  init: function () {
    this._super();
    this.set('templateName', App.get('ModalType'));
  },
  didInsertElement: function () {
    console.log("DIDINSERT: MODAL");
  },
  templateName: null,
  classNames: ['modal'],
  templateNameChanged: function () {
    this.rerender();
  }.observes('templateName'),

  click: function (evt) {
    console.dir(evt.target);
    if (evt.target.id === 'close') { App.set('DisplayModal', false) }
  },

  submitButtonView: Ember.View.extend({
    tagName: 'button',
    classNames: ['email', 'small'],

    click: function () {
      console.log('GlobalViews: modal submit clicked');
      this.get('parentView').set('input', '');

      //  THIS COULD BE MORE DYNAMIC.
      App.api.submitItinerary(this.get('parentView').get('input'));
      

      App.set('ModalType', 'modal-wait');
      this.get('parentView').set('templateName', 'modal-wait');

      setTimeout(function () {
        App.set('DisplayModal', false);
      }, 2000);
      return false;
    }
  }),
});

App.EmailButtonView = Ember.View.extend({
  classNames: ['email'],
  tagName: 'button',
  click: function () {
    console.log('emailButton clicked');
    App.set('ModalType', 'modal-email');
    App.set('DisplayModal', true);
  }
});
