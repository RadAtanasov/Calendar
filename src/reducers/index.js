import getWorkingDays from './getWorkingDays';
import getWorkingDayLength from './getWorkingDayLength';
import getDatesOfWeek from './getDatesOfWeek';
import setAuth from './setAuth';
import checkAuth from './checkAuth';
import toggleAddModal from './toggleAddModal';
import getTasks from './getTasks';

const reducers = {
    workingDays: getWorkingDays,
    workingDayLength: getWorkingDayLength,
    datesOfWeek: getDatesOfWeek,
    authorisation: setAuth,
    checkAuth: checkAuth,
    toggleAddModal: toggleAddModal,
    tasks: getTasks
};

export default reducers;