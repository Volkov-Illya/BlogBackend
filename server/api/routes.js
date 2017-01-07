var router = require('express').Router();


router.use('/users', require('./user/userRoutes'));
router.use('/posts', require('./post/postRoutes'));
router.use('/comments', require('./comment/commentRoutes'));
router.use('/signin', require('./auth/authRoutes'));


module.exports = router;
