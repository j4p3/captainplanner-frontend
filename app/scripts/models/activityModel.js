App.Activity = Ember.Object.extend({
  place: null,
  day_section: null,

  init: function () {
    console.log("new Activity initialized with place " + this.place.name);
    this.set('place', App.Place.create(this.place));
    this.set('day_section', this.day_section);
    App.Activity.store[this.id] = this;
  }
});

App.Activity.reopenClass({
//  SET CLASS METHODS & PROPERTIES

  store: {}, //  LOOKUP INDEX

  //  RETURN A SPECIFIC ACT., ALL ACT., OR FALSE IF NO ACT. EXISTS
  find: function (id) {
    console.log("App.Activity finding id " + id);

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