var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
	title: {type: String, required: true}
});

module.exports = mongoose.model('Song', songSchema);