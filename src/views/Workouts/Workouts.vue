<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'vue-meta';
import { Workout } from '../../interfaces/Workout';
import { useWorkoutStore } from '../../store/workout';

const workoutStore = useWorkoutStore();

const workouts = ref<Workout[]>(workoutStore.getWorkouts());

useMeta({
    title: 'Workout',
    description: 'Start or continue a workout and become strong.',
});
</script>

<template>
    <h2 class="title">
        All workouts
    </h2>

    <template v-for="workout in workouts" :key="workout.id">
        <div class="workout">
            <h3><strong>{{ workout.day }}</strong> - {{ workout.name }}</h3>

            <div class="my-4 cursor-pointer" @click="workout.collapsed = !workout.collapsed">
                <p v-if="workout.collapsed === true" class="small-text">
                    ...
                </p>

                <template v-if="workout.collapsed === false">
                    <p v-for="exercise in workout.exercises" :key="exercise.id" class="small-text">
                        {{ exercise.name }} | {{ exercise.weight }}kg - {{ exercise.sets.map((set) => set.reps).join('x') }}
                    </p>
                </template>
            </div>

            <router-link :to="{ name: 'exercises', params: { workoutId: workout.id}}">
                <button class="link">
                    Start workout
                </button>
            </router-link>
        </div>
    </template>
</template>

<style scoped>
.workout {
    @apply p-4 my-4 rounded shadow;

    /* Light mode */
    @apply bg-white;

    /* Dark mode */
    @apply dark:bg-neutral-800;
}
</style>
