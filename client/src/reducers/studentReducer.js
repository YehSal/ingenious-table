import {FETCH_ROWS, ADD_ROW, DELETE_ROW, EDIT_ROW} from './../actions/types';

export default (state=null, action) => {
	switch(action.type) {
		case FETCH_ROWS:
			return action.payload || false;
		case ADD_ROW:
			return [...state, action.payload] || state;
		case DELETE_ROW:
			return state.filter((row) => row.id !== action.payload.id);
		case EDIT_ROW:
			return state.map((row) => {
				if(row.id === action.payload.id) {
					return action.payload;
				}
				return row;
			});
		default:
			return state;
	}
}