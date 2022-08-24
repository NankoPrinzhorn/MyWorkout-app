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

    <span class="link" @click="$router.back()">
        Back
    </span>

    <template v-for="exercise in workout.exercises" :key="exercise.id">
        <router-link :to="{ name: 'exercise', params: { workoutId: workout.id, exerciseId: exercise.id}}" class="block">
            <div class="wrapper">
                <span>{{ exercise.name }}</span>
                <span>{{ exercise.weight }}kg | {{ exercise.sets.map((set: any) => set.reps).join('x') }}</span>
            </div>
        </router-link>
    </template>
</template>

<style scoped>
.wrapper {
    @apply flex justify-between items-center;
}
</style>
