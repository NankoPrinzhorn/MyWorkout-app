<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'vue-meta';
import { useRoute } from 'vue-router';
import { Exercise } from '../../interfaces/Exercise';
import { useExerciseStore } from '../../store/exercise';

const route = useRoute();
const exerciseStore = useExerciseStore();

const exercise = ref<Exercise>(exerciseStore.getExercise(route.params.exerciseId));

useMeta({
    title: 'Exercise',
    description: 'Fill in your exercise progress.',
});
</script>

<template>
    <div>
        <h2 class="title">
            {{ exercise.name }}
        </h2>

        <a class="link" @click="$router.back()">
            Back
        </a>

        <div class="wrapper">
            <div class="exercise-row">
                <span>Weight:</span>
                <span>{{ exercise.weight }}</span>
            </div>

            <div class="exercise-row">
                <span>Sets:</span>
                <span>{{ exercise.sets.length }}</span>
            </div>

            <div class="exercise-row">
                <span>Reps:</span>
                <span>{{ exercise.sets.map((set: any) => set.reps).join(' x ') }}</span>
            </div>

            <span class="small-text text-center mt-2">
                Last workout: 50kg | 12x11x10
            </span>
        </div>

        <div class="wrapper">
            <div class="exercise-row">
                <span>Reps:</span>
                <input
                    id="reps"
                    type="text"
                    name="reps"
                    placeholder="12x11x10...">
            </div>

            <div class="exercise-row my-2">
                <span>RPE:</span>
                <input
                    id="rpe"
                    type="number"
                    name="rpe"
                    placeholder="1-10...">
            </div>

            <div class="exercise-row mt-2">
                <span>Remark:</span>
                <input
                    id="reps"
                    type="text"
                    name="reps"
                    placeholder="It was to easy...">
            </div>

            <button class="link">
                Finish
            </button>
        </div>
    </div>
</template>

<style scoped>
.exercise-row {
    @apply flex flex-col justify-between items-center;
}
</style>
