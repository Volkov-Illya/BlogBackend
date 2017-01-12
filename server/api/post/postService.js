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

module.exports.delete = (id, user) => {
    return postModel.findById(id)
        .then((post) => {
            if (!post) return false;
            if(post && post.author == user.id) return post.remove();
        });
};

module.exports.params = (id) => {
    return postModel.findById(id)
        .populate('author', 'username')
        .then(function (post) {
            return post;
        });
};

