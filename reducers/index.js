import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const allReducers = combineReducers({
    countValue: counterReducer,
});

export default allReducers;