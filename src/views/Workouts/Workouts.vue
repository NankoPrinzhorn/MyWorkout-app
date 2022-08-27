<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'vue-meta';
import LoadingComponent from '../../components/LoadingComponent.vue';
import { Workout } from '../../interfaces/Workout';
import { useWorkoutStore } from '../../store/workout';

const workoutStore = useWorkoutStore();
const workouts = ref<Workout[]>();
const workoutsLoading = ref<boolean>(true);
const activeWorkouts = ref<Workout[]>();
const activeWorkoutsLoading = ref<boolean>(true);

workoutStore.getWorkouts().then((response: Workout[]) => {
    workouts.value = response;

    workoutsLoading.value = false;
});

workoutStore.getActiveWorkouts().then((response: Workout[]) => {
    activeWorkouts.value = response;

    activeWorkoutsLoading.value = false;
});

useMeta({
    title: 'Workout',
    description: 'Start or continue a workout and become strong.',
});
</script>

<template>
    <h2 class="title">
        Active workouts
    </h2>

    <LoadingComponent v-if="activeWorkoutsLoading" />

    <template v-for="workout in activeWorkouts" :key="workout.id">
        <div class="wrapper">
            <h3><strong>{{ workout.day.name }}</strong> - {{ workout.name }}</h3>

            <div class="my-4 cursor-pointer" @click="workout.showExercises = !workout.showExercises">
                <p v-if="workout.showExercises === false || workout.showExercises === undefined" class="small-text">
                    ...
                </p>

                <template v-else>
                    <p v-for="exercise in workout.exercises" :key="exercise.id" class="small-text">
                        {{ exercise.name }} | {{ exercise.weight }}kg
                        <span v-if="exercise.sets && exercise.sets.length > 0">
                            - {{ exercise.sets.map((set) => set.reps).join('x') }}
                        </span>
                    </p>
                </template>
            </div>

            <router-link :to="{ name: 'exercises', params: { workoutId: workout.id}}">
                <button class="link">
                    Continue workout
                </button>
            </router-link>
        </div>
    </template>

    <h2 class="title">
        All workouts
    </h2>

    <LoadingComponent v-if="workoutsLoading" />

    <template v-for="workout in workouts" :key="workout.id">
        <div class="wrapper">
            <h3><strong>{{ workout.day.name }}</strong> - {{ workout.name }}</h3>

            <div class="my-4 cursor-pointer" @click="workout.showExercises = !workout.showExercises">
                <p v-if="workout.showExercises === false || workout.showExercises === undefined" class="small-text">
                    ...
                </p>

                <template v-else>
                    <p v-for="exercise in workout.exercises" :key="exercise.id" class="small-text">
                        {{ exercise.name }} | {{ exercise.weight }}kg
                        <span v-if="exercise.sets && exercise.sets.length > 0">
                            - {{ exercise.sets.map((set) => set.reps).join('x') }}
                        </span>
                    </p>
                </template>
            </div>

            <router-link :to="{ name: 'exercises', params: { workoutId: workout.id}}">
                <button class="link">
                    <span v-if="workout.isActive">
                        Continue workout
                    </span>
                    <span v-else>
                        Start workout
                    </span>
                </button>
            </router-link>
        </div>
    </template>
</template>
