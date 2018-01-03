import axios from 'axios';
import {FETCH_ROWS, ADD_ROW, DELETE_ROW, EDIT_ROW} from './types';

export const fetchRows = () => async dispatch => {
	const res = await axios.get('/api/rows');	
	dispatch({type: FETCH_ROWS, payload: res.data});	
};

export const addRow = values => async dispatch => {
	const res = await axios.post('/api/rows', values);
	dispatch({type: ADD_ROW, payload: res.data});
};

export const deleteRow = id => async dispatch => {
	const res = await axios.delete('/api/row/' + id);
	dispatch({type: DELETE_ROW, payload: res.data});
};

export const editRow = (values, id) => async dispatch => {
	console.log(values);
	console.log(id);
	const res = await axios.put('/api/row/' + id, values);
	dispatch({type: EDIT_ROW, payload: res.data});
};
