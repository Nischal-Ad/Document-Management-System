const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'please enter department'],
			maxLength: [20, 'title cannot exceed 50 characters'],
			unique: true,
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model('Department', departmentSchema);
