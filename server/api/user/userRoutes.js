var router = require('express').Router();
var controller = require('./userController');


router.route('/')
    .get(controller.get)
    .post(controller.post);

router.route('/:id')
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;
