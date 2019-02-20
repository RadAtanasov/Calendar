let Task = require('../models/task');

let addTask = (data, request, response) => {
    Task.create({
        user_id: request.session.userId,
        task_name: data.taskname,
        task_description: data.description,
        start_time: data.start,
        end_time: data.end,
    }).then(() => {
        response.send({
            result: true,
            message: 'Task was created',
            error: null
        });
    }).catch((err) => {
        response.send({
            result: false,
            message: 'Task was not created.',
            error: err
        });
    });
};

let getTasks = (request, response) => {
    Task.find({user_id: request.session.userId}).then((tasks) => {
        response.send({
            data: tasks,
            result: true,
            message: null,
            error: null
        })
    }).catch((err) => {
        response.send({
            result: false,
            message: null,
            error: err
        });
    })
};

module.exports = {
    addTask,
    getTasks
};