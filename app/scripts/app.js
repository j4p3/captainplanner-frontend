/*global Ember */

var App = window.App = Ember.Application.create({ LOG_TRANSITIONS: true });

/* Order and include as you please. */
require('app/scripts/routes/*');
require('app/scripts/controllers/*');
require('app/scripts/models/*');
require('app/scripts/components/*');
// require('app/scripts/libs/*');
require('app/scripts/views/*');

App.api = App.API.create();