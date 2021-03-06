var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	
	title: {
		type: String,
		required: [true, 'Title is required.']
	},

	content: {
		type: String,
		required: [true, 'Content is required.']
	}
});

module.exports = mongoose.model('Post', PostSchema);

