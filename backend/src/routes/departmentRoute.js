const express = require('express');

//controllers
const { isAuth } = require('../middleware/auth');
const { addDepartment, deleteDepartment, getAllDepartment } = require('../controller/dapartmentController');

const router = express.Router();

router.route('/adddepartment').post(isAuth, addDepartment);
router.route('/alldepartment').get(isAuth, getAllDepartment);
router.route('/deletedepartment/:id').delete(isAuth, deleteDepartment);

module.exports = router;
