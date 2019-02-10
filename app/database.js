var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/calendar', { useNewUrlParser: true });

module.exports = Schema;

