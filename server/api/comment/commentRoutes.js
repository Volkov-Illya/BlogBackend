const router = require('express').Router();
const controller = require('./commentController');
const auth = require('../auth/auth');

var checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.route('/:post_id')
    .get(controller.get)
    .post(checkUser, controller.post);

router.route('/:comment_id')
    .put(checkUser, controller.put)
    // .delete(checkUser, controller.delete);

module.exports = router;