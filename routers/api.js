var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var prepareFormData = require('../app/helpers/prepareDataFromRequest');
var createNewUser = require('../app/controllers/registerController');
var {loginUser, logoutUser, checkAuth} = require('../app/controllers/loginController');
var urlencodedParser = bodyParser.urlencoded({extended: false});

// Define the home page route
router.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    var data = prepareFormData(request.body);

    createNewUser(data, response);
});

router.post("/login", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    var data = prepareFormData(request.body);

    loginUser(data, request, response);
});

router.get("/logout", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    var data = prepareFormData(request.body);

    logoutUser(data, request, response);
});

router.get("/checkAuth", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    checkAuth(request, response);
});

module.exports = router;

