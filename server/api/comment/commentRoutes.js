var router = require('express').Router();
var controller = require('./commentController');


router.route('/:post_id')
    .get(controller.get)
    .post(controller.post);

router.route('/:comment_id')
    .put(controller.put);
// .delete(controller.delete);

module.exports = router;