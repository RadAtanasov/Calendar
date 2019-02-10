import getWorkingDays from './getWorkingDays';
import getWorkingDayLength from './getWorkingDayLength';
import getDatesOfWeek from './getDatesOfWeek';
import setAuth from './setAuth';
import checkAuth from './checkAuth';

const reducers = {
    workingDays: getWorkingDays,
    workingDayLength: getWorkingDayLength,
    datesOfWeek: getDatesOfWeek,
    authorisation: setAuth,
    checkAuth: checkAuth
};

export default reducers;