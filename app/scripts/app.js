/*global Ember */

var App = window.App = Ember.Application.create({ LOG_TRANSITIONS: true });

/* Order and include as you please. */
require('app/scripts/routes/*');
require('app/scripts/controllers/*');
require('app/scripts/models/*');
require('app/scripts/views/*');
require('app/scripts/components/*');

var test = App.Itinerary.create({ id: 2, activities: App.fixtures });
