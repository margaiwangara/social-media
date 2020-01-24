import { ADD_ERROR, REMOVE_ERROR } from '../types';

export default function(state, action){
	switch(action.type){
		case ADD_ERROR:
			return { ...state, error: action.payload.error };
			break;
		case REMOVE_ERROR:
			return { ...state, error: {} }
			break;
		default: 
			return state;
	}
}