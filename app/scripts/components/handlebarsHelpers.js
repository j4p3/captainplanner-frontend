

Ember.Handlebars.helper('capitalize', function(value, options) {
  // console.log("Capitalize Helper: capitalizing");
  if (value) {
    var capitalized = value.charAt(0).toUpperCase() + value.substr(1);
    return capitalized;
  } else {
    console.log("Capitalize Helper: no value included");
  }
});

Ember.Handlebars.helper('time_since', function(date) {
  // console.log("Time Since Helper: formatting");
  return moment(date).fromNow();
});

Ember.Handlebars.helper('star', function(rating) {
  // console.log("Stars Helper: activating");
  // console.log("Stars Helper: rating is " + rating + typeof(rating));

  var stars = parseInt(rating, 10);

  // console.log("Stars Helper: parsed rating is " + stars + typeof(stars));

  var star = '<i class="icon-star"></i>';
  var empty = '<i class="icon-star-empty"></i>';
  var buffer = [];


  for (var i=1;i<=5;i++) {
    if (i<=stars) { buffer.push(star); }
    else { buffer.push(empty); }
  }

  return new Handlebars.SafeString(
    buffer.join("")
  );
});