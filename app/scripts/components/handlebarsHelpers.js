Ember.Handlebars.helper('capitalize', function(value, options) {
  console.log("Capitalize Helper: capitalizing " + value);
  if (value) {
    var capitalized = value.charAt(0).toUpperCase() + value.substr(1);
    return capitalized;
  } else {
    console.log("Capitalize Helper: no value included");
  }
});