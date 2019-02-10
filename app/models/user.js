var mongoose = require('mongoose');
var Shema = require('../database');

var users = new Shema({
    login: String,
    password: { type: String }
});

var User = mongoose.model('User', users);

module.exports = User;




