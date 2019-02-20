import moment from "moment";

let prepareTaskStore = (tasksObject) => {
    let result = {};
    for(let key in tasksObject) {
        let date = moment(tasksObject[key]['start_time']).format('L');
        result[date] = [];
    }

    for(let key in tasksObject) {
        let date = moment(tasksObject[key]['start_time']).format('L');
        let start = moment(tasksObject[key]['start_time']);
        let end = moment(tasksObject[key]['end_time']);
        let start_day = moment("2019-02-20T06:00:00.000Z");
        let taskInformation = {
            task_name: tasksObject[key]['task_name'],
            task_description: tasksObject[key]['task_description'],
            start_time: start.format('LT'),
            end_time: end.format('LT'),
            start_paint: moment.duration(start.diff(start_day)).asMinutes(),
            duration: moment.duration(end.diff(start)).asMinutes()
        };
        result[date].push(taskInformation);
    }

    console.log(result);

    return result;
};

export default prepareTaskStore;