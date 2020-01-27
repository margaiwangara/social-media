import { apiRequest } from '../../services/requestService';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './error';

export default function authUser(path, payload, dispatch){
  const { authDispatch, errorDispatch } = dispatch;
  return new Promise((resolve, reject) => {
    return apiRequest('post', `/api/auth/${path}`, payload)
        .then(({ token, user }) => {
          localStorage.setItem('jwtToken', token);
          authDispatch(
            {
              type: SET_CURRENT_USER,
              payload: {
                user
              }
            }
          );
          errorDispatch(removeError())
          resolve();
        })
        .catch(error => {
          // console.log(addError(error));
          errorDispatch(addError(error));
          reject();
        });
  });
}