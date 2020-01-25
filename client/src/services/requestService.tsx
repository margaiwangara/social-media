import axios, { AxiosRequestConfig } from 'axios';

export default function(method: AxiosRequestConfig['method'], url: string, payload?: object){
	return new Promise((resolve, reject) => {
			axios({
				method,
				url,
				data: payload
			})
			.then(res => resolve(res.data))
			.catch(error => reject(error.reponse.data.error));
	});
}