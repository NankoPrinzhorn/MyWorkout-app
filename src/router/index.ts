import {createRouter, createWebHistory} from "vue-router"

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
        component: () => import('../views/Trainings.vue'),
    },

    {
        path: '/statistics',
        name: 'statistics',
        component: () => import('../views/Statistics.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router