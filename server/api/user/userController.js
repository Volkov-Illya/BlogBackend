var service = require('./userService');

exports.get = function (req, res, next) {
    service.findAll()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log('user not found');
            return next(err);
        });
};

exports.put = function (req, res, next) {
    service.update(req.params.id, req.body)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            return next(err);
        });
};

exports.post = function (req, res, next) {
    service.create(req.body)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            return next(err);
        });
};

exports.delete = function (req, res, next) {
    service.delete(req.params.id)
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            return next(err);
        });
};

