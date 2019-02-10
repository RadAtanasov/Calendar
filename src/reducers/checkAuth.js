import axios from 'axios';
let initialState = false;

const checkAuth = (state = initialState, action) => {
    switch (action.type) {
        case 'checkAuth':
            return  action.payload;
        default:
            return state;
    }
};

export default checkAuth;

export function checkAuthOnServer() {
    return dispatch => {
        axios.get('/checkAuth').then((res) => {
            dispatch({
                type: 'checkAuth',
                payload: res.data.result
            })
        });
    };
};