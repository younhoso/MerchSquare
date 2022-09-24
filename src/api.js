import axios from "axios";

export const api = axios.create({
	baseURL: 'https://api.opensea.io'
});

export const apis = {
	detail: () => api.get('/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/?include_orders=false', {method: 'GET'})
}