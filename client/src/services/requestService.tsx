import axios from 'axios';

export default function(method: string, url: string, payload?: object){
	return new Promise((resolve, reject) => {
			axios({
				method,
				url,
				data: payload
			})
			.then(({ data }) => resolve(data))
			.catch(error => reject(error));
	});
}