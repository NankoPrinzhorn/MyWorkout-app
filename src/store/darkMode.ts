import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        darkMode: localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    }),
    actions: {
        init() {
            if (this.darkMode) {
                document.body.classList.add('dark');
            }
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;

            localStorage.theme = this.darkMode ? 'dark' : 'light';

            if (this.darkMode) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        },
    },
});
