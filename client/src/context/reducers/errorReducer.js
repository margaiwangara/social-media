import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export default function errorReducer(state, action){
  switch(action.type){
    case ADD_ERROR:
      return {
        ...state, 
        error: action.payload.error
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: {}
      };
    default: 
      return state;
  }
}