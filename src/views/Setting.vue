<script setup lang="ts">
import { useMeta } from 'vue-meta';

import MoonIcon from '../assets/icons/Moon.svg?component';
import SunIcon from '../assets/icons/Sun.svg?component';

import { useDarkModeStore } from '../store/darkMode';

const darkModeStore = useDarkModeStore();

useMeta({
    title: 'Settings',
    description: 'Change the settings of the app.',
});
</script>

<template>
    <div>
        <h2 class="title">
            Settings
        </h2>

        <div class="setting" @click="darkModeStore.toggleDarkMode()">
            <span>Dark mode theme</span>

            <MoonIcon v-if="!darkModeStore.darkMode" class="icon"/>
            <SunIcon v-if="darkModeStore.darkMode" class="icon"/>
        </div>
    </div>
</template>

<style scoped>
.setting {
    @apply text-center flex justify-between items-center my-4 p-4 rounded shadow;

    /* Light mode */
    @apply bg-white;

    /* Dark mode */
    @apply dark:bg-neutral-800;
}
</style>
