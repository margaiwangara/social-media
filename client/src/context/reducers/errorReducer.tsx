import { ADD_ERROR, REMOVE_ERROR } from '../types';

export default function(state: object, action: object){
	switch((action as any).type){
		case ADD_ERROR:
			return { ...state, error: (action as any).payload.error };
			break;
		case REMOVE_ERROR:
			return { ...state, error: {} }
			break;
		default: 
			return state;
	}
}