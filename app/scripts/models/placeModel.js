App.Place = Ember.Object.extend({
  foo: 'bar',
  init: function () {
    console.log("new Place initialized: " + this.name);
    App.Place.store[this.id] = this;
  }
});

App.Place.reopenClass({
//  SET CLASS METHODS & PROPERTIES

  store: {}, //  LOOKUP INDEX

  //  RETURN A SPECIFIC ACT., ALL ACT., OR FALSE IF NO ACT. EXISTS
  find: function (id) {
    console.log("App.Place finding id " + id);

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