const router = require('express').Router();
const controller = require('./postController');
const auth = require('../auth/auth');
const authCtrl = require('../auth/authController');

var checkUser = [auth.decodeToken()];

router.route('/')
    .get(controller.get)
    .post(checkUser,  authCtrl.getFreshUser,controller.post);

router.route('/:id')
    .get(controller.getAll)
    .put(checkUser, controller.put)
    .delete(checkUser, controller.delete);

module.exports = router;
