import { defineStore } from 'pinia';

export const useExerciseStore = defineStore('exercise', {
    state: () => ({}),

    actions: {
        getExercise(exerciseId: string | string[]) {
            return {
                id: 1,
                name: 'Bench Press',
                weight: '50',
                sets: [
                    {
                        id: 1,
                        reps: 12,
                    },
                    {
                        id: 2,
                        reps: 9,
                    },
                    {
                        id: 3,
                        reps: 7,
                    },
                ],
            };
        },
    },
});
