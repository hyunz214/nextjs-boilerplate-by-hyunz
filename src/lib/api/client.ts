import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const client = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

client.interceptors.request.use((config: AxiosRequestConfig) => {
	if (config.showToast === undefined) {
		config.showToast = true;
	}
	return config;
});

export default client;