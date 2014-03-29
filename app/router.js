App.Router.map(function() {
	this.resource('songs' , function() {
		this.route('new');
	});
	this.resource('about');
	this.resource('services', function() {
		this.resource('service', {path: '/show/:service_id'});
	});
});