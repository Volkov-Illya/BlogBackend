var router = require('express').Router();


router.use('/users', require('./user/userRoutes'));
router.use('/posts', require('./post/postRoutes'));
router.use('/comments', require('./comment/commentRoutes'));


module.exports = router;
