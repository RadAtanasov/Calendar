var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var prepareFormData = require('../app/helpers/prepareDataFromRequest');
var urlencodedParser = bodyParser.urlencoded({extended: false});

// Define the home page route
router.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    var data = prepareFormData(request.body);


});



module.exports = router;

