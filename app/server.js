var express = require('express');
var app = express();

/*Connect router*/
app.use(require('../routers/api'));

/*Start server*/
app.listen(8080, function () {
    console.log('server started in port 8080');
});