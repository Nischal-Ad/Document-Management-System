const express = require('express');

//controllers
const { isAuth } = require('../middleware/auth');
const { addCategory, deleteCategory, getAllCategory } = require('../controller/categoryController');

const router = express.Router();

router.route('/addcategory').post(isAuth, addCategory);
router.route('/allcategory').get(isAuth, getAllCategory);
router.route('/deletecategory/:id').delete(isAuth, deleteCategory);

module.exports = router;
