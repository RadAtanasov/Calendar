/*Length of working day in hours*/
import moment from "moment";

const initialState = [];

const preapreInitialState = () => {
    for (let i = 0; i < 6; i++) {
        initialState[i] = moment().startOf('isoweek').add(i, 'day').format('L');
    };
};
preapreInitialState();

const getDatesOfWeek = (state = initialState, action) => {
    switch (action.type) {
        case 'getDatesOfWeek':
            return  action.payload;
        default:
            return state;
    }
};

export default getDatesOfWeek;