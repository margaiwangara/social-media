import { apiRequest } from '../../services/requestService';

export default function authUser(path, payload){
  return new Promise((resolve, reject) => {
    return apiRequest('post', `http://localhost:5001/api/auth/${path}`, payload)
        .then(res => {
          console.log(res);
          resolve();
        });
  })
}