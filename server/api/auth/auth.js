const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../../config/config');
const checkToken = expressJwt({secret: config.secrets.jwt});
const crypto = require('crypto');

exports.decodeToken = function () {
    return function (req, res, next) {
        if (req.query && req.query.hasOwnProperty('access_token')) {
            req.headers.authorization = 'Bearer ' + req.query.access_token;
        }
        checkToken(req, res, next);
    };
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
