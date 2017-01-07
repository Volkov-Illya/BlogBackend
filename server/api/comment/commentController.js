var commentService = require('./commentService');
var _ = require('lodash');


exports.get = function (req, res, next) {
    console.log(req.params.post_id);
    commentService.getAll({id: req.params.post_id})
        .then((comment) => res.json(comment))
        .catch((err) => next(err));
};
exports.post = function (req, res, next) {

    commentService.create({content: req.body.content, author: req.body.author, post: req.params.post_id})
        .then((comment) => res.json(comment))
        .catch((err) => next(err));
};

exports.put = function (req, res, next) {
    console.log(req.params.comment_id);
    commentService.update({body: req.body, id: req.params.comment_id})
        .then((post) => res.json(post))
        .catch((err) => next(err));
};



