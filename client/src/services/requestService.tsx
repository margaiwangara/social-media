import axios, { AxiosRequestConfig } from 'axios';

interface ServerData{
	data: object;
	error?: object;
}

export const apiService = (method: AxiosRequestConfig['method'], path: string, data?: any) => {
	return new Promise((resolve, reject) => {
		return axios.request({
			method,
			url: path,
			data,
			transformResponse: (r: ServerData) => r.data
		})
		.then(response => resolve(response.data))
		.catch(error => {
			const customError = JSON.parse(`${error.response.request.response}`);
			reject(customError.error);
		});
	});
}