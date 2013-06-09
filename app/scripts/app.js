/*global Ember */

App = Ember.Application.create({ LOG_TRANSITIONS: true });

/* Order and include as you please. */
require('app/scripts/models/*');
require('app/scripts/routes/*');
require('app/scripts/components/*');
// require('app/scripts/controllers/*');
// require('app/scripts/views/*');
