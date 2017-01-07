var postModel = require('./postModel');
const _ = require('lodash');
module.exports.create = (data) => {
    const post = new postModel();
    _.assign(post, data, data.body);
    return post.save()
        .catch((err) => {
            return (err);
        });
};

module.exports.getAll = () => {
    return postModel.find().sort({createdAt: -1})
        .catch((err) => {
            return (err);
        });
};

module.exports.getAllPosts = (data) => {
    return postModel.find({author: data.author}).sort({createdAt: -1})
        .populate('author')
        .catch((err) => {
            return (err);
        });
};

module.exports.update = (data) => {
    return postModel.findByIdAndUpdate(data.id, data.body)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return (err);
        });
};

module.exports.delete = (id) => {
    return postModel.findByIdAndRemove(id)
        .catch((err) => {
            return (err);
        });
};