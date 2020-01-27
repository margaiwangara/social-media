import { apiRequest } from '../../services/requestService';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './error';

export default function authUser(path, payload, dispatch){
  return new Promise((resolve, reject) => {
    return apiRequest('post', `/api/auth/${path}`, payload)
        .then(({ token, user }) => {
          localStorage.setItem('jwtToken', token);
          dispatch(
            {
              type: SET_CURRENT_USER,
              payload: {
                user
              }
            }
          );
          dispatch(removeError())
          resolve();
        })
        .catch(error => {
          console.log(addError(error));
          dispatch(addError(error));
          reject();
        });
  });
}