import { SET_CURRENT_USER } from '../types';

export default function(state: object, action: object){
	switch((action as any).type){
		case SET_CURRENT_USER:
			return { ...state, user:{
				isAuthenticated: !!Object.keys((action as any).payload.user).length,
				user: (action as any).payload.user
			}};
		default:
			return state;
	}
}