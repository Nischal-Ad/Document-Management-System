const express = require('express');
const { getDoc, createDoc, getOneDoc, deleteUser, updateDoc } = require('../controller/documentController');
const { isAuth } = require('../middleware/auth');
const { singleUpload } = require('../middleware/multer');
const router = express.Router();

router.route('/getdoc').get(isAuth, getDoc);
router.route('/createdoc').post(isAuth, singleUpload, createDoc);
router.route('/getonedoc/:id').get(isAuth, getOneDoc);
router.route('/deletedoc/:id').delete(isAuth, deleteUser);
router.route('/updatedoc/:id').put(isAuth, singleUpload, updateDoc);

module.exports = router;
