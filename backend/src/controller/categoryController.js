const ErrorHandler = require('../utils/errorhandler');
const Category = require('../model/CategoryModel');
const catchAsync = require('../middleware/catchAsync');

exports.addCategory = catchAsync(async (req, res, next) => {
	const { name } = req.body;

	if (!name || name === null) return next(new ErrorHandler('Please enter category', 400));

	const category = await Category.findOne({ name });
	if (category) return next(new ErrorHandler('category Already Exist', 409));

	const newCategory = await Category.create({
		name,
	});

	res.status(201).json({
		success: true,
		message: 'category created',
		data: newCategory,
	});
});

exports.getAllCategory = catchAsync(async (req, res, next) => {
	const category = await Category.find();
	res.status(200).json({
		success: true,
		data: category,
	});
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
	const category = await Category.findById(req.params.id);

	if (!category) {
		return next(new ErrorHandler('Category not found', 404));
	}

	await Category.findByIdAndDelete(category?._id);
	res.status(200).json({
		success: true,
		message: 'Category deleted',
	});
});
