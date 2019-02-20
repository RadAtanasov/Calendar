var bcrypt = require('bcrypt');
var User = require('../models/user');
var saltRounds = 10;

var loginUser = function (data, request, response) {
    User.findOne({login: data.login}).then(function (user) {
        bcrypt.compare(data.password, user.password, function(err, result) {
            if (result) {
                request.session.userId = user.id;
                request.session.userLogin = user.login;
                response.send({
                    result: true,
                    message: 'User login',
                    error: null
                });
            } else {
                response.send({
                    result: false,
                    message: null,
                    error: err
                });
            }
        });
    });
};

var logoutUser = function (data, request, response) {
    if (request.session) {
        request.session.destroy(function () {
            response.send({
                result: true,
                message: 'User was logout',
                error: null
            })
        });
    }
};

var checkAuth = function (request, response) {
    if (request.session.userId) {
        response.send({
            result: true,
            data: {
                userId: request.session.userId,
                userLogin: request.session.userLogin
            },
            message: 'User login',
            error: null,
        });
    } else {
        response.send({
            result: true,
            data: false,
            message: 'User logout',
            error: null
        });
    }
};



module.exports = {
    loginUser,
    logoutUser,
    checkAuth
};