var User = require('./userModel');

module.exports.findAll = () => {
    return User.find()
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return (err);
        });
};

module.exports.create = (data) => {
    console.log(data);
    return User.create(data)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return (err);
        });
};

module.exports.delete = (id) => {
    return User.findByIdAndRemove(id)
        .catch((err) => {
            return (err);
        });
};

module.exports.update = (id, data) => {

    return User.findByIdAndUpdate(id, data)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return (err);
        });
};

exports.params = function(req, res, id) {
    return User.findById(id)
        .select('-password')
        .then(function (user) {
            if (!user) {
                next(new Error('No user with that id'));
            }
            return user;
        });
};