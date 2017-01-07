const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../../config/config');
const checkToken = expressJwt({secret: config.secrets.jwt});
const User = require('../../api/user/userModel');
const crypto = require('crypto');

exports.decodeToken = function () {
    return function (req, res, next) {
        if (req.query && req.query.hasOwnProperty('access_token')) {
            req.headers.authorization = 'Bearer ' + req.query.access_token;
        }
        checkToken(req, res, next);
    };
};

exports.getFreshUser = function () {
    return function (req, res, next) {

        User.findById(req.user._id)
            .then(function (user) {
                if (!user) {
                    res.status(401).send('Unauthorized');
                } else {
                    req.user = user;
                    next();
                }
            }, function (err) {
                next(err);
            })
    }
};

exports.signToken = function (id) {
    return jwt.sign(
        {_id: id},
        config.secrets.jwt,
        {expiresInMinutes: config.expireTime}
    );
};

exports.encryptPassword = (password) => {
    try {
        return crypto.createHash('sha1').update(password).digest('hex');
    } catch (err) {
        throw new Error(err);
    }
};
