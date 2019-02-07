import {createStore, combineReducers} from 'redux';
import reducers from '../reducers/index';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer,
        form: formReducer
    })
);

export default store;