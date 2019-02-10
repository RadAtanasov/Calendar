let initialState = true;

const setAuth = (state = initialState, action) => {
    switch (action.type) {
        case 'setAuth':
            return  action.payload;
        default:
            return state;
    }
};

export default setAuth;