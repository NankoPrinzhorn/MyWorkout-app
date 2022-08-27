<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'vue-meta';
import { useRoute } from 'vue-router';
import LoadingComponent from '../../components/LoadingComponent.vue';
import { Workout } from '../../interfaces/Workout';
import { useWorkoutStore } from '../../store/workout';

const route = useRoute();
const workoutStore = useWorkoutStore();

const workout = ref<Workout|null>(null);
const loading = ref<boolean>(true);

workoutStore.getWorkout(route.params.workoutId).then((response: Workout) => {
    workout.value = response;

    loading.value = false;
});

useMeta({
    title: 'Exercises',
    description: 'Start or continue a exercise and become strong.',
});
</script>

<template>
    <LoadingComponent v-if="loading" />

    <div v-if="workout">
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
                    <span>
                        {{ exercise.weight }}kg
                        <span v-if="exercise.sets && exercise.sets.length > 0">
                            | {{ exercise.sets.map((set: any) => set.reps).join('x') }}
                        </span>
                    </span>
                </div>
            </router-link>
        </template>
    </div>
</template>

<style scoped>
.wrapper {
    @apply flex justify-between items-center;
}
</style>
