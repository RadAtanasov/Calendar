const initialState = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getWorkingDays = (state = initialState, action) => {
    switch (action.type) {
        case 'getDays':
            return  action.payload;
        default:
            return state;
    }
};

export default getWorkingDays;