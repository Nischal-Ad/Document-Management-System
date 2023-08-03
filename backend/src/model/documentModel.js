const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'please enter your name'],
		},
		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: true,
		},
		desc: {
			type: String,
			required: [true, 'please enter your desc'],
		},
		category: {
			type: String,
			required: [true, 'please enter your category'],
		},
		department: {
			type: String,
			required: [true, 'please enter your department'],
		},
		doc: {
			type: String,
			required: [true, 'please enter your template'],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Document', documentSchema);
