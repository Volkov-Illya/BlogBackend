var mongoose = require('mongoose');
ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    text: {
        type: String,
        trim: true
    },
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

PostSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id.toString();
        return ret;
    }
});

module.exports = mongoose.model('Post', PostSchema);
