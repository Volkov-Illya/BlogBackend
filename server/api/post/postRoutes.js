var router = require('express').Router();
var controller = require('./postController');


router.route('/')
    .get(controller.get)
    .post(controller.post);

router.route('/:id')
    .get(controller.getAll)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;
