const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const auth = require('../auth/auth');

const UserSchema = new Schema({
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
    password: {type: String, default: ''},
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

UserSchema.path('password').set((value) => {
    return auth.encryptPassword(value);
});

module.exports = mongoose.model('User', UserSchema);
