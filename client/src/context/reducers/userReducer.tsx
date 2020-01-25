import { SET_CURRENT_USER } from '../types';

export default function(state: object, action: object){
	switch((action as any).type){
		case SET_CURRENT_USER:
			return {
				isAuthenticated: !!Object.keys((action as any).user).length,
				user: (action as any).user
			}
		default:
			return state;
	}
}