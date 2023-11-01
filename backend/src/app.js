const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const error = require('./middleware/error');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	})
);

//route imports
const user = require('./routes/userRoute');
const document = require('./routes/documentRoute');
const category = require('./routes/categoryRoute');

app.use('/api/v1', user);
app.use('/api/v1', document);
app.use('/api/v1', category);

//middleware for error
app.use(error);

module.exports = app;
