const ErrorHandler = require('../utils/errorhandler');
const Document = require('../model/documentModel');
const catchAsync = require('../middleware/catchAsync');

exports.createDoc = catchAsync(async (req, res, next) => {
	const { name, desc, category, department, doc } = req.body;

	if (!name || !desc || !category || !department || !doc) return next(new ErrorHandler('please enter all feild', 400));

	const user = await Document.create({
		name,
		desc,
		category,
		department,
		doc,
		user: req?.user?._id,
	});

	res.status(200).json({
		success: true,
		message: 'document created',
		user,
	});
});

exports.getDoc = catchAsync(async (req, res, next) => {
	const doc = await Document.find();

	res.status(200).json({
		success: true,
		doc,
	});
});
