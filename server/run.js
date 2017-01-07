'use strict';

let mongoose = require('mongoose');
mongoose.promise = require('bluebird');

const mongoUrl = process.env.MONGOOSE_URL ||  'mongodb://localhost:/nodeblog';
module.exports = {
    init: init,
    exit: exit
};

function init() {
    mongoose.connect(mongoUrl, (err) => {
        if (err) throw new Error(err);
        console.log(`Db connected`);
    });
}

function exit() {
    mongoose.disconnect();
}
