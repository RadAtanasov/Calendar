var bcrypt = require('bcrypt');
var User = require('../models/user');
var saltRounds = 10;

var createNewUser = function (data, response) {
    bcrypt.hash(data.password, saltRounds, function(err, hash) {
        User.findOne({
            login: data.login,
        }).then(function (user) {
            if (!user) {
                User.create({
                    login: data.login,
                    password: hash
                });

                response.send({
                    result: true,
                    message: 'User was created',
                    error: null
                });
            } else {
                response.send({
                    result: false,
                    message: null,
                    error: 'This user already exists.'
                });
            }
        }).catch(function (err) {
            response.send({
                result: false,
                message: 'User was not created',
                error: err
            })
        });
    });
};

module.exports = createNewUser;