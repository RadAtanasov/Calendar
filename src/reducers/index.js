import getWorkingDays from './getWorkingDays';
import getWorkingDayLength from './getWorkingDayLength';
import getDatesOfWeek from './getDatesOfWeek';

const reducers = {
    workingDays: getWorkingDays,
    workingDayLength: getWorkingDayLength,
    datesOfWeek: getDatesOfWeek,
    authorisation: true
};

export default reducers;