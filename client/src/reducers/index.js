import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import studentReducer from './studentReducer';

export default combineReducers({
	row: studentReducer,
	form: reduxForm
});