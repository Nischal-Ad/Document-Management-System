const express = require('express');
const { getDoc, createDoc, getOneDoc, deleteUser } = require('../controller/documentController');
const { isAuth, roles } = require('../middleware/auth');
const router = express.Router();

router.route('/getdoc').get(isAuth, getDoc);
router.route('/createdoc').post(isAuth, createDoc);
router.route('/getonedoc/:id').get(isAuth, getOneDoc);
router.route('/deletedoc/:id').delete(isAuth, deleteUser);

module.exports = router;
