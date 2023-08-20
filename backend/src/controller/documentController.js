const ErrorHandler = require('../utils/errorhandler');
const Document = require('../model/documentModel');
const catchAsync = require('../middleware/catchAsync');
const cloudinary = require('cloudinary');
const { getDataUri } = require('../utils/dataUri');

exports.createDoc = catchAsync(async (req, res, next) => {
	const { name, desc, category, department } = req.body;
	const file = req.file;

	if (!name || !desc || !category || !department || !file) return next(new ErrorHandler('please enter all feild', 400));

	const fileUri = getDataUri(file);

	const mycloud = await cloudinary.v2.uploader.upload(fileUri.content, {
		public_id: file.originalname,
		resource_type: 'raw',
		folder: 'document',
		allowedFormats: ['jpg', 'jpeg', 'png', 'pdf'],
	});

	const doc = await Document.create({
		name,
		desc,
		category,
		department,
		doc: { public_id: mycloud.public_id, url: mycloud.secure_url },
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
