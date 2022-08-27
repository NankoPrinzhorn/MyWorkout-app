import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue'),
    },

    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },

    {
        path: '/workouts',
        children: [
            {
                path: '',
                name: 'workouts',
                component: () => import('../views/Workouts/Workouts.vue'),
            },
            {
                path: ':workoutId/exercises',
                name: 'exercises',
                component: () => import('../views/Workouts/Workout.vue'),
            },
            {
                path: ':workoutId/exercises/:exerciseId',
                name: 'exercise',
                component: () => import('../views/Workouts/Exercise.vue'),
            },
        ],
    },

    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/Setting.vue'),
    },

    {
        path: '/:catchAll(.*)',
        redirect: '/home',
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
