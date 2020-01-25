import { useReducer } from 'react';
import { apiService } from '../../services/requestService';
import { SET_CURRENT_USER } from '../types';
import userReducer from '../reducers/userReducer';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export function setCurrentUser(user: object){
  return {
    type: SET_CURRENT_USER,
    payload: {
      user
    }
  }
}

export function authUser(type: string, data: object){
  const [state, dispatch] = useReducer(userReducer, initialState);
  return new Promise((resolve, reject) => {
    return apiService("POST", `/api/${type}`, data).then(({ token, user }: any) => {
      localStorage.setItem("jwtToken", token);
      dispatch(setCurrentUser(user));
      resolve();
    });
  });
}
