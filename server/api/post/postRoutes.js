const router = require('express').Router();
const controller = require('./postController');
const auth = require('../auth/auth');

var checkUser = [auth.decodeToken(), auth.getFreshUser()];

// router.param('id', controller.params);

router.route('/')
    .get(controller.get)
    .post(checkUser,controller.post);

router.route('/:id')
    .get(controller.getAll)
    .put(checkUser, controller.put)
    .delete(checkUser, controller.delete);

module.exports = router;
