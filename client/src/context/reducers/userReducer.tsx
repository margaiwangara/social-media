import { REGISTER_USER, LOGOUT_USER } from '../types';

export default function(state, action){
	switch(action.type){
		case REGISTER_USER:
			return { ...state, user: action.payload.user };
			break;
		case LOGOUT_USER: 
			return { ...state, user: {} };
			break;
		default:
			return state;
	}
}