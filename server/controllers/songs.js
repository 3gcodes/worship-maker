var Song = require('../models/song');

exports.index = function(req, res) {
	Song.find(function(err, songs) {
		res.send({
			songs: songs
		});
	});
};

exports.create = function(req, res) {
	res.send(new Song(req.body.song).save());
};

exports.update = function(req, res) {
	Song.bindByIdAndUpdate(req.params.id, req.body.song, function(err, song) {
		res.send(song);
	});
};

exports.destroy = function(req, res) {
	Song.bindByIdAndRemove(req.params.id, function(erro, song) {
		res.send(song);
	});
};