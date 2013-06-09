App.MapView = Ember.View.extend({
	templateName: 'map',
	click: function(event) {
		console.log("map clicked!");
		console.dir(event);
	}
});

App.ListView = Ember.View.extend({
	templateName: 'list',
	listItems: 'App.day.items',
	itemsChanged: function () {
		this.rerender();
	}.observes('listItems')
});

var itemView = Ember.View.extend({});

App.EmailView = Ember.View.extend({
	templateName: 'email',
	email: ""
});

App.EmailSubmitView = Ember.View.extend({

})
