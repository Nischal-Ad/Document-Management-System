const catchAsync = require('./catchAsync');
const ErrorHandler = require('../utils/errorhandler');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

exports.isAuth = catchAsync(async (req, res, next) => {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	} else if (req.cookies.token) {
		token = req.cookies.token;
	}

	if (!token) return next(new ErrorHandler('please login first', 401));

	const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

	req.user = await User.findById(decodedData.id);

	next();
});

exports.roles = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(new ErrorHandler('sorry you cannot access this page', 403));
		}
		next();
	};
};
