import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },

    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
    },

    {
        path: '/trainings',
        name: 'trainings',
        component: () => import('../views/Training.vue'),
    },

    {
        path: '/statistics',
        name: 'statistics',
        component: () => import('../views/Statistic.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
