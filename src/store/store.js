import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from '../reducers/index';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer,
        form: formReducer
    }), applyMiddleware(thunk)
);

export default store;