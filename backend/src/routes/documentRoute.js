const express = require('express');
const { getDoc, createDoc } = require('../controller/documentController');
const { isAuth, roles } = require('../middleware/auth');
const router = express.Router();

router.route('/getdoc').get(isAuth, getDoc);
router.route('/createdoc').post(isAuth, createDoc);

module.exports = router;
