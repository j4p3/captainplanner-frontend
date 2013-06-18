App.EmailButtonView = Ember.View.extend({
  tagName: 'button',
  classNames: ['email'],
  click: function () {
    console.log('emailView clicked');
    this.get('controller').send('submit');
  }
});