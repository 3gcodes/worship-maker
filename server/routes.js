var songs = require('./controllers/songs');

module.exports = function(app) {
	app.get('/api/1/songs', songs.index);
	app.post('/api/1/songs', songs.create);
	app.put('/api/1/songs/:id', songs.update);
	app.del('/api/1/songs/:id', songs.destroy);
};