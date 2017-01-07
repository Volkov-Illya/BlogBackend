var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {type: String, trim: true, default: ''},
    lastName: {type: String, trim: true, default: ''},
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true,
        default: ''
    },
    role: {type: Number, default: 0}
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    },
    collection: 'users',
    _id: true
});

UserSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id.toString();
        return ret;
    }
});


module.exports = mongoose.model('User', UserSchema);
