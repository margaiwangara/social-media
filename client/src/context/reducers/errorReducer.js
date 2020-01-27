import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export default function errorReducer(state, action){
  switch(action.type){
    case ADD_ERROR:
      return {
        error: action.payload.error
      };
    case REMOVE_ERROR:
      return {
        error: {}
      };
    default: 
      return state;
  }
}