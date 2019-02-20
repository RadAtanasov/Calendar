var mongoose = require('mongoose');
var Shema = require('../database');

var tasks = new Shema({
    user_id: {type: Shema.Types.ObjectId},
    task_name: String,
    task_description: { type: String },
    start_time: {type: Date },
    end_time: {type: Date },
});

var Task = mongoose.model('Task', tasks);

module.exports = Task;




