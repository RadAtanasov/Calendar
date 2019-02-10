var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var app = express();
var config = require('../configs/config');

/*Create session*/
app.use(
    session({
        secret: config.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
    })
);

/*Connect router*/
app.use(require('../routers/api'));

/*Start server*/
app.listen(8080, function () {
    console.log('server started in port 8080');
});