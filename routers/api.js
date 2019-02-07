var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

// Define the home page route
router.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    var data = prepareFormData(request.body);
    console.log(data);
});

function prepareFormData (body) {
    var result = null;
    for (var key in body) {
        result = JSON.parse(key);
    }

    return result;
}

module.exports = router;

