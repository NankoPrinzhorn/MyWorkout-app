import axios, { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';

export const useWorkoutStore = defineStore('workout', {
    state: () => ({
        workouts: [],
    }),

    actions: {
        async getWorkouts() {
            return axios.get(
                'workouts',
            ).then(
                (response: AxiosResponse) => response.data,
            );
        },

        async getActiveWorkouts() {
            return axios.get(
                'workouts/active',
            ).then(
                (response: AxiosResponse) => response.data,
            );
        },

        async getWorkout(workoutId: string | string[]) {
            return axios.get(
                `workouts/${workoutId}`,
            ).then(
                (response: AxiosResponse) => response.data,
            );
        },

    },
});
