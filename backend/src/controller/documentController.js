const ErrorHandler = require('../utils/errorhandler');
const Document = require('../model/documentModel');
const catchAsync = require('../middleware/catchAsync');

exports.createDoc = catchAsync(async (req, res, next) => {
	const { name, desc, category, department, document } = req.body;

	if (!name || !desc || !category || !department || !doc) return next(new ErrorHandler('please enter all feild', 400));

	const doc = await Document.create({
		name,
		desc,
		category,
		department,
		doc: document,
		user: req?.user?._id,
	});

	res.status(200).json({
		success: true,
		message: 'document created',
		doc,
	});
});

exports.getDoc = catchAsync(async (req, res, next) => {
	const doc = await Document.find();

	res.status(200).json({
		success: true,
		doc,
	});
});

exports.getOneDoc = catchAsync(async (req, res, next) => {
	const doc = await Document.findById(req.params.id);

	if (!doc) {
		return next(new ErrorHandler('Documenet not found', 404));
	}

	res.status(200).json({
		success: true,
		doc,
	});
});

exports.deleteUser = catchAsync(async (req, res, next) => {
	const doc = await Document.findById(req.params.id);

	if (!doc) {
		return next(new ErrorHandler('Document not found', 404));
	}

	await Document.findByIdAndDelete(doc?._id);
	res.status(200).json({
		success: true,
		message: 'Document deleted',
	});
});
