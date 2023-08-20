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
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Document', documentSchema);
