<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'vue-meta';
import { useRoute } from 'vue-router';
import { Workout } from '../../interfaces/Workout';
import { useWorkoutStore } from '../../store/workout';

const route = useRoute();
const workoutStore = useWorkoutStore();

const workout = ref<Workout>(workoutStore.getWorkout(route.params.workoutId));

useMeta({
    title: 'Exercises',
    description: 'Start or continue a exercise and become strong.',
});
</script>

<template>
    <h2 class="title">
        {{ workout.name }}
    </h2>

    <a @click="$router.go(-1)">
        Back
    </a>

    <template v-for="exercise in workout.exercises" :key="exercise.id">
        <router-link :to="{ name: 'exercise', params: { workoutId: workout.id, exerciseId: exercise.id}}" class="block">
            <div class="exercise">
                <span>{{ exercise.name }}</span>
                <span>{{ exercise.weight }}kg | {{ exercise.sets.map((set: any) => set.reps).join('x') }}</span>
            </div>
        </router-link>
    </template>
</template>

<style scoped>
.exercise {
    @apply p-4 my-4 rounded shadow flex justify-between items-center;

    /* Light mode */
    @apply bg-white;

    /* Dark mode */
    @apply dark:bg-neutral-800;
}
</style>
