import { defineStore } from 'pinia';

export const useWorkoutStore = defineStore('workout', {
    state: () => ({}),

    actions: {
        getWorkout(workoutId: string | string[]) {
            return {
                id: 1,
                name: 'Push',
                day: 'Monday',
                collapsed: true,
                exercises: [
                    {
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
                    },
                    {
                        id: 1,
                        name: 'DB shoulder press',
                        weight: '18',
                        sets: [
                            {
                                id: 1,
                                reps: 13,
                            },
                            {
                                id: 2,
                                reps: 12,
                            },
                            {
                                id: 3,
                                reps: 11,
                            },
                        ],
                    },
                ],
            };
        },
        getWorkouts() {
            return [
                {
                    id: 1,
                    name: 'Push',
                    day: 'Monday',
                    collapsed: true,
                    exercises: [
                        {
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
                        },
                        {
                            id: 1,
                            name: 'DB shoulder press',
                            weight: '18',
                            sets: [
                                {
                                    id: 1,
                                    reps: 13,
                                },
                                {
                                    id: 2,
                                    reps: 12,
                                },
                                {
                                    id: 3,
                                    reps: 11,
                                },
                            ],
                        },
                    ],
                },
            ];
        },
    },
});
