let initialState = false;

const toggleAddModal = (state = initialState, action) => {
    switch (action.type) {
        case 'toggleModal':
            return  action.payload;
        default:
            return state;
    }
}

export default toggleAddModal;