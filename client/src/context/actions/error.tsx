import { ADD_ERROR, REMOVE_ERROR } from '../types';

export function addError(error: object){
  return {
    type: ADD_ERROR,
    error
  }
}

export function removeError(){
  return {
    type: REMOVE_ERROR
  }
}