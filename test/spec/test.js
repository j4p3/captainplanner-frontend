/*global describe, it */
'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });
})();


  // submit: function () {
  //   console.log("delivering itinerary to backend");
  //   $.post({
  //   url: "http://captain-planner-dev.herokuapp.com/mvp/email",
  //   data: JSON.stringify({
  //     email: App.EmailView.email,
  //     itinerary: {
  //       days: {
  //         activities: [
  //           {
  //             place_id: App.day.items[0].place_id,
  //             day_section_id: 1
  //           },
  //           {
  //             place_id: App.day.items[1].place_id,
  //             day_section_id: 2
  //           },
  //           {
  //             place_id: App.day.items[2].place_id,
  //             day_section_id: 3
  //           },
  //           {
  //             place_id: App.day.items[3].place_id,
  //             day_section_id: 3
  //           },
  //           {
  //             place_id: App.day.items[4].place_id,
  //             day_section_id: 4
  //           },
  //           {
  //             place_id: App.day.items[5].place_id,
  //             day_section_id: 5
  //           }
  //         ]
  //       }
  //     }
  //   }),
  //   dataType: "json"
  // });
  // },
  // constructPost: function () {
    
  //   console.log("requesting " + requestData)
  //   return requestData;
  // }