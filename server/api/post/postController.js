var postService = require('./postService');
var _ = require('lodash');


exports.get = function (req, res, next) {
    postService.getAll()
        .then((post) => res.json(post))
        .catch((err) => next(err));
};
exports.post = function (req, res, next) {
    postService.create({body: req.body, author: res.locals.user})
        .then((post) => res.json(post))
        .catch((err) => next(err))
};

exports.getAll = function (req, res, next) {
    postService.getAllPosts({author: req.params.id})
        .then((post) => res.json(post))
        .catch((err) => next(err));
};

exports.put = function (req, res, next) {
    postService.update({id: req.params.id, body: req.body})
        .then((post) => res.json(post))
        .catch((err) => next(err));
};

exports.delete = function (req, res, next) {
    postService.delete(req.params.id)
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            return next(err);
        });
};