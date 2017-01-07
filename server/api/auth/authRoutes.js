const router = require('express').Router();
const controller = require('./authController');

router.route('/')
    .post(controller.signin);

module.exports = router;
