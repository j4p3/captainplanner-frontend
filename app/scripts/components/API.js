App.API = Ember.Object.extend({
  //  FUNCTIONS & API CLASS WRAPPERS FOR CPTP BACKEND

  //  SECTION: ITINERARY SUBMISSION FOR EMAIL
  submitItinerary: function (email) {
    //  SEND ITINERARY OBJECT TO CPTP BACKEND
    console.log('App.API: submitting Itinerary with email ' + email);
    var req = this.compileSubmissionRequest(this.getSubmissionData(), email);
    $.ajax({
      type: 'POST',
      url: req.url,
      data: req.data,
      success: req.success,
      dataType: req.dataType
    });
  },

  compileSubmissionRequest: function (itineraryArray, email) {
    //  GENERATE REQUEST HASH FOR $.POST
    //  CURRENTLY ASSUMES ONE-DAY ITINERARY - NEST ANOTHER FORLOOP FOR MULTIDAY
    console.log('App.API: compiling request hash');
    console.dir(itineraryArray);
    var request = {};
    var tmp = {}
    request.url = 'http://captain-planner-dev.herokuapp.com/mvp/email';
    request.type = 'POST';
    request.data = {};
    request.data.email = email;
    request.data.itinerary = {};
    request.data.itinerary.days = [];
    request.data.itinerary.days[0] = {};
    request.data.itinerary.days[0].date = 20130301;
    request.data.itinerary.days[0].itinerary_day_id = 1;
    request.data.itinerary.days[0].activities = [];
    for (var i=0;i<itineraryArray.length;i++) {
      console.log('App.API: iterating forloop');
      tmp = {};
      tmp.place_id = itineraryArray[i].place.id;
      tmp.day_section_id = itineraryArray[i].day_section.id;
      console.dir(tmp);
      console.dir(request);
      request.data.itinerary.days[0].activities.push(tmp);
    }
    request.success = this.requestCompleted;
    request.dataType = 'json';
    request.data = JSON.stringify(request.data);
    console.dir(request);
    return request;
  },

  getSubmissionData: function (itineraryID) {
    //  RETURN THE APPROPRIATE ARRAY OR OBJECT TO BE DIGESTED INTO REQUEST
    console.log('App.API: getting data');
    itineraryID = itineraryID || 2;
    return App.Itinerary.find(itineraryID).activities;
  },

  requestCompleted: function (data) {
    console.log('App.API: request successful');
    console.dir(data);
  }
  //  END ITINERARY SUBMISSION FOR EMAIL
});