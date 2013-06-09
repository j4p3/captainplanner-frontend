//  ROUTES

App.Router.map(function() {
  this.resource("item", { path: "items/:item_id" });
  this.resource("map", { path: "itinerary/map" });
});

//  ROUTE HOOKS

App.ApplicationRoute = Ember.Route.extend({
  //  'model' hook provides data for 'itinerary' templates
  model: function () {
    return items;
  }
});

App.ItemRoute = Ember.Route.extend({
  model: function (item_id) {
    return items[params.item_id];
  }
});

App.MapRoute = Ember.Route.extend({
  model: function() {
    return items;
  }
});

var items = [{"id":13,"day_section":{"id":1,"name":"Morning"},"place":{"address":"Flower Market Street","address_2":"Kowloon, Hong Kong","description":"The 100 or so shops and wholesalers here sell auspicious blossoms and luck-bringing houseplants to an enthusiastic crowd all year round.","id":8,"img_url":"http://media-cdn.tripadvisor.com/media/photo-s/00/14/e3/04/fresh-flower-market.jpg","lat":22.325063,"lng":114.171188,"name":"Flower Market","phone":null,"website":null,"place_category":{"id":1,"name":"attraction"},"place_type":{"id":2,"name":"Shopping"},"place_subtypes":[{"id":8,"name":"Specialty Market","parent_place_subtype_id":null,"place_type_id":2}]}},{"id":14,"day_section":{"id":2,"name":"Lunch"},"place":{"address":null,"address_2":null,"description":"Situated above the Mong Kok East station, New Century Plaza is the biggest shopping mall in the Mong Kok District, with dozens of restaurants featuring both Asian and Western cuisines. Recommended restaurants: Peking House 5/F (Northern Chinese), Chau Chou 5/F (Southern Chinese) [more here]","id":10,"img_url":"http://4.bp.blogspot.com/_mXFJC5I8H40/TLDvuUGPSxI/AAAAAAAAAEw/sHCRtvvG5Eg/s1600/Hongkong+Trip+007.JPG","lat":22.323014,"lng":114.172003,"name":"Grand Century Place","phone":null,"website":null,"place_category":{"id":2,"name":"business"},"place_type":{"id":1,"name":"Restaurant"},"price":{"display_string":"$$$","id":4},"place_subtypes":[{"id":9,"name":"International","parent_place_subtype_id":null,"place_type_id":1}]}},{"id":15,"day_section":{"id":3,"name":"Afternoon"},"place":{"address":null,"address_2":null,"description":"Bargain-priced new and second-hand electronic devices, audio-visual equipment and telecommunications products are all up for sale at this popular street market. Sharp-eyed shoppers can also uncover antique watches, old coins and other relics. A must-visit for gadget lovers. Also check out Golden Computer Centre nearby.","id":2,"img_url":"http://upload.wikimedia.org/wikipedia/commons/d/de/Market_of_Apliu_Street.jpg","lat":22.329326,"lng":114.163442,"name":"Apliu Street Market","phone":null,"website":null,"place_category":{"id":1,"name":"attraction"},"place_type":{"id":2,"name":"Shopping"},"place_subtypes":[{"id":2,"name":"Electronics","parent_place_subtype_id":null,"place_type_id":2}]}},{"id":16,"day_section":{"id":3,"name":"Afternoon"},"place":{"address":null,"address_2":null,"description":"With over 100 stalls of bargain clothing, accessories and souvenirs, the Ladies\u2019 Market on Tung Choi Street provides a one-kilometre stretch on which to practise your haggling skills. It gets its name from the huge amount of clothing and accessories on sale for women of all ages; however, watches, cosmetics, bags, home furnishings, CDs and trinkets also up for grabs.","id":13,"img_url":"http://media-cdn.tripadvisor.com/media/photo-s/01/b4/b7/71/ladies-market.jpg","lat":22.318274,"lng":114.170775,"name":"Ladies' Market","phone":null,"website":null,"place_category":{"id":1,"name":"attraction"},"place_type":{"id":2,"name":"Shopping"},"place_subtypes":[{"id":7,"name":"Flea Market","parent_place_subtype_id":null,"place_type_id":2}]}},{"id":17,"day_section":{"id":4,"name":"Dinner"},"place":{"address":null,"address_2":null,"description":"Din Tai Fung originated in Taiwan, and now has branches all over Asia and some in the US. Known for their delicate and heavenly Xiao Long Bao (the steamed pork dumplings that are filled with a gulp of broth inside and enjoyed with vinegar and ginger), this restaurnat is totally worth your wait.","id":6,"img_url":"http://media-cdn.tripadvisor.com/media/photo-s/02/9c/75/90/filename-dsc-0447-2-jpg.jpg","lat":22.297495,"lng":114.169106,"name":"Din Tai Fung","phone":null,"website":null,"place_category":{"id":2,"name":"business"},"place_type":{"id":1,"name":"Restaurant"},"price":{"display_string":"$$$","id":4},"place_subtypes":[{"id":6,"name":"Taiwanese","parent_place_subtype_id":null,"place_type_id":1}]}},{"id":18,"day_section":{"id":5,"name":"Evening"},"place":{"address":null,"address_2":null,"description":"A popular street bazaar named after a Tin Hau temple located in the centre of its main drag. Trinkets, tea ware, electronics, watches, menswear, jade and antiques are scrutinised and haggled over, while claypot rice, seafood, noodles and other treats are consumed with gusto. Also check out the nightly Cantonese Opera shows in the area.","id":18,"img_url":"http://upload.wikimedia.org/wikipedia/commons/a/a6/GateOfTempleInHongKong.jpg","lat":22.307312,"lng":114.170212,"name":"Temple Street Night Market","phone":null,"website":null,"place_category":{"id":1,"name":"attraction"},"place_type":{"id":2,"name":"Shopping"},"place_subtypes":[{"id":15,"name":"Local Market","parent_place_subtype_id":null,"place_type_id":2}]}}];