import axios, { AxiosResponse } from 'axios';
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
            await axios.get(
                'auth/me',
            ).then((response: AxiosResponse) => {
                this.name = response.data.name;
                this.email = response.data.email;
            }).catch(() => {
                // console.log(error);
            });
        },

        async login(credentials: object) {
            await axios.post(
                'auth/login',
                credentials,
            ).then((response: AxiosResponse) => {
                this.name = response.data.name;
                this.email = response.data.email;

                localStorage.setItem('access_token', response.data.access_token);

                router.push({ name: 'home' });
            });
        },

        async logout() {
            await axios.post(
                'auth/logout',
            ).then(() => {
                this.name = '';
                this.email = '';

                localStorage.setItem('access_token', '');

                router.push({ name: 'login' });
            });
        },
    },
});
