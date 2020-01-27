import axios from 'axios';

export const apiRequest = (method, path, payload) => {
  return new Promise((resolve, reject) => {
    return axios[method](path, payload)
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error.response.data.error);
        });
  });
}