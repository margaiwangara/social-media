import { SET_CURRENT_USER } from '../actionTypes';

export default function(state, action){
  switch(action.type){
    case SET_CURRENT_USER:
      return {
        ...state, 
        currentUser: {
          isAuthenticated: !!Object.keys(action.payload.user).length,
          user: action.payload.user
        }
      }
    default:
      return state;
  }
}