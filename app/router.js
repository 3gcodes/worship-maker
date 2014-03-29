App.Router.map(function() {
	this.resource('songs', { path: '/' }, function() {

	});
	this.resource('about');
	this.resource('services', function() {
		this.resource('service', {path: ':service_id'});
	});
});