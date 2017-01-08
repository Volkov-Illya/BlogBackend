const userModel = require('../user/userModel');
const auth = require('./auth');

exports.signin = function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    if (!email || !password) {
        res.status(400).send('You need a email and password');
        return;
    }
    return userModel.findOne({email: email})
        .then(function (user) {
            if (!user) {
                return res.status(401).send('No user with the given email');
            }
            if (user.password !== auth.encryptPassword(password)) {
                return res.status(401).send('Wrong password');
            }
            const token = auth.signToken(user._id);
            return res.json({accessToken: token, firstName: user.firstName, lastName: user.lastName});
        })
        .catch((err) => {
            next(err);
        });
};

exports.getFreshUser = function (req, res, next) {
    userModel.findById(req.user._id)
        .then(function (user) {
            console.log(user);
            if (!user) {
                res.status(401).send('Unauthorized');
            } else {
                req.user = user;
                next();
            }
        }, function (err) {
            next(err);
        })
};