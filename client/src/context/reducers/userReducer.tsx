import { SET_CURRENT_USER } from '../types';

export default function(state: object, action: object){
	switch((action as any).type){
		case SET_CURRENT_USER:
			console.log('setting current user', action);
			return state;
		default:
			return state;
	}
}