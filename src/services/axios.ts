import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ref } from 'vue';
import router from '../router';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        config.headers = {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            Accept: 'application/json',
        };

        return config;
    },
);

axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        const currentRoute = ref<any>(router.currentRoute.value.name);

        if (error?.response?.status === 401 && !['login', 'register'].includes(currentRoute.value)) {
            router.push({ name: 'login' });
        }

        return Promise.reject(error);
    },
);
