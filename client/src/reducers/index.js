import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import rowReducer from './rowReducer';

export default combineReducers({
	row: rowReducer,
	form: reduxForm
});