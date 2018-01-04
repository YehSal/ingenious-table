// Reducers take an action and return the new state
import {FETCH_ROWS, ADD_ROW, DELETE_ROW, EDIT_ROW} from './../actions/types';

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  	const studentA = a.student.toUpperCase();
	  const studentB = b.student.toUpperCase();

	  let comparison = 0;
	  if (studentA > studentB) {
	    comparison = 1;
	  } else if (studentA < studentB) {
	    comparison = -1;
	  }
	  return comparison;
}

export default (state=null, action) => {
	switch(action.type) {
		case FETCH_ROWS:
			return action.payload ? action.payload.sort(compare) : false;
		case ADD_ROW:
			return ([...state, action.payload] || state).sort(compare);
		case DELETE_ROW:
			return (state.filter((row) => row.id !== action.payload.id)).sort(compare);
		case EDIT_ROW:
			return (state.map((row) => {
				if(row.id === action.payload.id) {
					return action.payload;
				}
				return row;
			})).sort(compare);
		default:
			return state;
	}
}