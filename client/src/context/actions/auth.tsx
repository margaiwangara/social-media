import { apiService } from '../../services/requestService';
import { SET_CURRENT_USER } from '../types';

export function setCurrentUser(user: object){
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function authUser(type: string, userData: object, dispatch: Function){
  return new Promise((resolve, reject) => {
    return apiService("POST", `/api/auth/${type}`, userData).then((response) => {
      // localStorage.setItem("jwtToken", token);
      console.log('My User', response);
      dispatch(setCurrentUser({ user: { name: 'none'}}));
      resolve();
    });
  });
}
