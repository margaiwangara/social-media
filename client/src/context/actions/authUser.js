import { apiRequest } from '../../services/requestService';
import { SET_CURRENT_USER } from '../actionTypes';

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
          resolve();
        })
        .catch(error => console.log(error));
  })
}