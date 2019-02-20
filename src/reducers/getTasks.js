/*Length of working day in hours*/
import moment from "moment";
import axios from "axios";
import preapreTaskStore from '../helpers/prepareTaskStore';

const initialState = {};

const getTasks = (state = initialState, action) => {
    switch (action.type) {
        case 'setTasks':
            return  action.payload;
        default:
            return state;
    }
};

export const getTasksFromDB = () => {
    return dispatch => {
        axios.get('/getTasks').then((res) => {
            dispatch({
                type: 'setTasks',
                payload: preapreTaskStore(res.data.data)
            });
        });
    };
};

export default getTasks;