var commentModel = require('./commentModel');
const _ = require('lodash');


module.exports.getAll = (post) => {
    console.log(post);
    return commentModel.find({post: post.id}).sort({createdAt: -1})
        .catch((err) => {
            return (err);
        });
};


module.exports.create = (data) => {
    console.log(data);
    const post = new commentModel();
    _.assign(post, data, data.body);
    return post.save()
        .catch((err) => {
            return (err);
        });
};

module.exports.update = (data) => {
    console.log(data);
    return commentModel.findByIdAndUpdate(data.id, data.body)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return (err);
        });
};

