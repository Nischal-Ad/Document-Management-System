const ErrorHandler = require('../utils/errorhandler');
const Department = require('../model/DepartmentModel');
const catchAsync = require('../middleware/catchAsync');

exports.addDepartment = catchAsync(async (req, res, next) => {
	const { name } = req.body;

	if (!name || name === null) return next(new ErrorHandler('Please enter department', 400));

	const department = await Department.findOne({ name });
	if (department) return next(new ErrorHandler('department Already Exist', 409));

	const newDepartment = await Department.create({
		name,
	});

	res.status(201).json({
		success: true,
		message: 'department created',
		data: newDepartment,
	});
});

exports.getAllDepartment = catchAsync(async (req, res, next) => {
	const department = await Department.find();
	res.status(200).json({
		success: true,
		data: department,
	});
});

exports.deleteDepartment = catchAsync(async (req, res, next) => {
	const department = await Department.findById(req.params.id);

	if (!department) {
		return next(new ErrorHandler('Department not found', 404));
	}

	await Department.findByIdAndDelete(department?._id);
	res.status(200).json({
		success: true,
		message: 'Department deleted',
	});
});
