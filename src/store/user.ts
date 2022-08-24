import axios, { AxiosError, AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import router from '../router';

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        email: '',
        access_token: '',
    }),

    actions: {
        async me() {
            return axios.get(
                'auth/me',
            ).then((response: AxiosResponse) => {
                this.name = response.data.name;
                this.email = response.data.email;
            }).catch((error: AxiosError) => error?.response?.data);
        },

        async login(credentials: object) {
            return axios.post(
                'auth/login',
                credentials,
            ).then((response: AxiosResponse) => {
                this.name = response.data.name;
                this.email = response.data.email;

                localStorage.setItem('access_token', response.data.access_token);

                router.push({ name: 'home' });
            }).catch((error: AxiosError) => error?.response?.data);
        },

        async register(credentials: object) {
            return axios.post(
                'auth/register',
                credentials,
            ).then((response: AxiosResponse) => {
                this.name = response.data.name;
                this.email = response.data.email;

                localStorage.setItem('access_token', response.data.access_token);

                router.push({ name: 'home' });
            }).catch((error: AxiosError) => error?.response?.data);
        },

        async logout() {
            await axios.post(
                'auth/logout',
            ).then(() => {
                this.name = '';
                this.email = '';

                localStorage.setItem('access_token', '');

                router.push({ name: 'login' });
            }).catch((error: AxiosError) => error?.response?.data);
        },
    },
});
