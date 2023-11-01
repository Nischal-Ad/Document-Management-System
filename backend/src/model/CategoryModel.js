const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'please enter category'],
			maxLength: [20, 'title cannot exceed 50 characters'],
			unique: true,
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model('Category', categorySchema);
