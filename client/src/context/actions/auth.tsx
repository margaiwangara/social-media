import { apiService } from '../../services/requestService';
import { SET_CURRENT_USER } from '../types';
import { addError, removeError } from './error';

export function setCurrentUser(user: object){
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function authUser(type: string, userData: object, dispatch: Function){
  return new Promise((resolve, reject) => {
    return apiService("POST", `/api/auth/${type}`, userData).then(({ token, user }: any) => {
      localStorage.setItem("jwtToken", token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
      resolve();
    }).catch(error => {
      dispatch(addError(error));
      reject()
    })
  });
}
